var a = ["A", "B", "C", "D"];
a.splice(2); // a → ["A", "B"]:戻り値 = ["C", "D"]

var b = ["A", "B", "C", "D"];
b.splice(-1); // b → ["A", "B", "C"]:戻り値 = ["D"]

var c = ["A", "B", "C", "D"];
c.splice(1,0,"X","Y"); // c → ["A","X","Y","B","C","D"]:戻り値 = []