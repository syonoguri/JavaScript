var worker = new Worker("worker.js");
worker.postMessage("message");

worker.onmessage = function(e) {
    var message = e.data;
};

console.log(message);