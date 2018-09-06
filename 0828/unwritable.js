var person = {name: "Tom"};
Object.defineProperty(person, "name", {
    writable: false,
});
Object.getOwnPropertyDescriptor(person,"name");
person.name = "Huck";
console.log(person.name);