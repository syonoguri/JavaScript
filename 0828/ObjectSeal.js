var person = { name:"Tom" };
Object.seal(person);
person.age = 17;
delete person.name;
console.log("name" in person); // → true: nameは削除されていない
console.log("age" in person); // → false: ageは追加されていない
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// → {value: Tom, writable: true, enumerable: true, configurable: false}
person.name = "Huck";
console.log(person);
// → Object {name: "Huck"}