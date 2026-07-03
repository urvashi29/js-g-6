// call, apply, bind()
// Template strings  (``)
// variable & expression substituition

// Prototype
// object function constructor (equivalent of class)
function Person(age, name, salary) {
  this.age = age;
  this.name = name;
  this.salary = salary;
  this.details = function () {
    console.log("Hello" + this.name);
  };
}

// age, name, salary, details -> instance members
Person.prototype.nationality = "Indian"; //prototype member

const personOne = new Person(20, "Alina", 90000); //instance of Person/ object
console.log(personOne);
console.log(personOne.constructor); //tell about the instance it is created from

// Inbuilt
// let arrNum = new Array([10, 2, 3, 4, 5]);
const arr = [10, 2, 3, 4, 5, 6];
console.log(arr.constructor);

console.log(Array.prototype);
console.log(Array.isArray(arr));

const person = {
  name: "alex",
};

console.log(person);
console.log(Object.prototype);

console.log(Object.values(person));
console.log(Object.keys(person));

// function Object, Array, String, Number, Boolean, Function, Date

let strVal = new String("Hello");
let str = "hello";
console.log(str);
console.log(strVal);

console.log(String.prototype);

const num = new Number(20);
console.log(num);
console.log(Number.prototype);

const bool = new Boolean(true);
console.log(bool);

// Prototypal Inheritance
function Employee(id) {
  let count = 0; //private variable
  this.id = id;
}

function Programmer(id, language) {
  Employee.call(this, id); //equivalent to super
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

const p = new Programmer(1, "JavaScript");
console.log(p);

// ES6 features: class
//template of js object
class Shape {
  constructor(id) {
    this.id = id;
  }
}

Shape.prototype.getId = function () {};

const a = new Shape(1);
console.log(a);

class Circle extends Shape {
  constructor(id, radius) {
    super(id);
    this.radius = radius;
  }
}

const c = new Circle(2, 5);
console.log(c);

// Debugging
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
