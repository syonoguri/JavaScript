function f() {
    console.log(a);
    let a = "local";
    console.log(a); // ⇒ local
    return a;
}
f();
