var person1 = {
    name:"Tom",
    sayHello: function() { console.log("Hello! "+ this.name);}
};
var person2 = Object.create(person1,{
    age: {
        value: 22,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
person2.name = "Huck";
person2.sayHello();
console.log(person2.age)