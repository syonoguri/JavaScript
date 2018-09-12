/*-------------------------------------------------------------
* 画面を構成する要素を生成し、各要素のイベントリスナを登録する
-------------------------------------------------------------*/
function createPainter(parent, width, height) {
    // タイトル
    var title = elt("h2", null, "Simple Painter");
    // canvas要素と描画コンテキスト
    var [canvas,ctx] = createCanvas(width, height);
    // ツールバー:controlsオブジェクトのプロパティを巡回して登録
    var toolbar = elt("div",null);
    for(var name in controls) {
        toolbar.appendChild(controls[name](ctx));
    }
    toolbar.style.fontSize = "small";
    toolbar.style.marginBottom = "3px";
    parent.appendChild(elt("div",null, title, toolbar, canvas));
}
function createCanvas(canvasWidth,canvasHeight) {
    var canvas = elt("canvas",{width: canvasWidth, height: canvasHeight});
    var ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid gray";
    canvas.style.cursor = "pointer";
    // 描画ツールをmousedownリスナとして登録
    canvas.addEventListener("mousedown", function(e){
        // Firefox対策：カラー選択のchangeイベントを強制的に発生させる
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", false, true);
        colorInput.dispatchEvent(event);
        // 選択された描画ツールを初期化
        paintTools[paintTool](e,ctx);
    }, false);
    return [canvas, ctx];
}

/*---------------------------------------------------
* ユーティリティ
-----------------------------------------------------*/
// elementの左上角からのマウスの相対位置を取得
function relativePosition(event, element) {
    var rect = element.getBoundingClientRect();
    return { x: Math.floor(event.clientX - rect.left),
             y: Math.floor(event.clientY - rect.top ) };
}
/*-------------------------------------------------------
* ペイントツール
*   paintToolsのメソッドは、使用する描画ツールです。
*   描画ツールは、描画を開始するための各種設定と、イベントリスナの登録を行います。
*   各メソッドは、controls.painterで自動的にツール選択のメニューに取り込まれます。
*   メニューで選択されたツールは、変数paintToolsに格納され、描画時に使用されます。
*   描画ツールを追加する場合は、paintToolsのメソッドに新しい描画ツールを追加するだけで住みます。
*----------------------------------------------------------------------------------------*/
var paintTool; // 選択されたペイントツール（controls.painterで選択）
var paintTools = Object.create(null);// ペイントツールオブジェクト
// * brush:ブラシツール
paintTools.brush = function(e, ctx){
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    //Canvasの画面をimgに保存
    var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    // canvas要素に対するマウスポインタの相対位置を取得
    var p = relativePosition(e, ctx.canvas);
    // パスの定義開始
    ctx.beginPath();
    ctx.moveTo(p.x,p.y);
    // ドラッグリスナの登録
    setDragListeners(ctx, img, function(q){
        ctx.lineTo(q.x,q.y); // パスを追加
        ctx.stroke();        // パスを描画
    });
};
// * line:線を描くツール
paintTools.line = function(e, ctx) {
    ctx.lineCap = "round";
    var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var p = relativePosition(e, ctx.canvas);
    setDragListeners(ctx, img, function(q) {
        ctx.beginPath();
        ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
        ctx.stroke();
    });
};
// * circle:円弧を描くツール
paintTools.circle = function(e, ctx) {
    var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var p = relativePosition(e,ctx.canvas);
    setDragListeners(ctx, img, function(q) {
        var dx = q.x - p.x;
        var dy = q.y - p.y;
        var r = Math.sqrt(dx*dx+dy*dy);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 2*Math.PI, false);
        ctx.stroke();
    }) ;
};
// * circleFill:塗りつぶした円を描くツール
paintTools.circleFill = function(e,ctx) {
    var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var p = relativePosition(e,ctx.canvas);
    setDragListeners(ctx, img, function(q){
        var dx = q.x - p.x;
        var dy = q.y - p.y;
        var r = Math.sqrt(dx*dx+dy*dy);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 2*Math.PI, false);
        ctx.fill();
    });
};

/*---------------------------------------------------------------------------*
* ペイントツールのユーティリティ
--------------------------------------------------------------------------------*/
// * マウスドラッグ時のイベントリスナを登録する
function setDragListeners(ctx,img,draw) {
    // mousemoveリスナを登録
    var mousemoveEventListener = function(e) {
        ctx.putImageData(img, 0, 0);
        draw(relativePosition(e, ctx.canvas));
    };
    document.addEventListener("mousemove", mousemoveEventListener, false);
    // mouseupリスナを登録
    document.addEventListener("mouseup", function(e){
        // 保存しておいたイメージを復帰させる
        ctx.putImageData(img,0,0);
        // 指定された描画関数drawでマウス位置まで描画する
        draw(relativePosition(e,ctx.canvas));
        // mousemove.mouseupイベントリスナを削除
        document.removeEventListener("mousemove", mousemoveEventListener, false);
        document.removeEventListener("mouseup", arguments.callee, false);
    }, false);
}
/*------------------------------------------------------------------------------------*
* コントローラー
*   各種の設定を変更するコントロール群を定義します。
*   各コントローラーは、controlsオブジェクトのメソッドとして登録されています。
*   各メソッドは、必要なHTML要素を生成して返し、イベントリスナを登録します。
*   各メソッドは、createPainterで自動的にツールバーに取り込まれます。
*   新しいコントロールを追加する場合は、controlsに新しいメソッドを追加するだけで済みます。
-------------------------------------------------------------------------------------*/
var controls = Object.create(null); // コントローラーオブジェクト
var colorInput; // Firefox用のchangeイベント対策用にinput[type="color"]オブジェクトを格納
// * ペイントツールの選択
controls.painter = function(ctx) {
    var DEFAULT_TOOL = 0;
    var select = elt("select", null);
    var label = elt("label", null, "描画ツール:", select);
    for(var name in paintTools) {
        select.appendChild(elt("option",{value: name}, name));
    }
    select.selectedIndex = DEFAULT_TOOL;
    paintTool = select.children[DEFAULT_TOOL].value;
    select.addEventListener("change", function(e){
        paintTool = this.children[this.selectedIndex].value;
    },false);
    return label;
};
// * 色の選択（線と塗りの両方設定）
controls.color = function(ctx) {
    var input = colorInput = elt("input", {type:"color"});
    var label = elt("label", null, " 色:", input);
    input.addEventListener("change", function(e) {
        ctx.strokeStyle = this.value;
        ctx.fillStyle = this.value;
    },false);
    return label;
};
// * 線幅の選択
controls.brushsize = function(ctx) {
    var size = [1,2,3,4,5,6,8,10,12,14,16,20,24,28];
    var select = elt("select", null);
    for(var i=0; i<size.length; i++) {
        select.appendChild(elt("option",{value:size[i].toString()}, size[i].toString()));
    }
    select.selectedIndex = 2;
    ctx.lineWidth = size[select.selectedIndex];
    var label = elt("label", null, " 線幅:", select);
    select.addEventListener("change",function(e){
        ctx.lineWidth = this.value;
    }, false);
    return label;
};
// * 透明度の選択
controls.alpha = function(ctx) {
    var input = elt("input",{type:"number",min:"0",max:"1",step:"0.05",value:"1"});
    var label = elt("label", null, " 透明度:", input);
    input.addEventListener("change", function(e){
        ctx.globalAlpha = this.value;
    }, false);
    return label
};
