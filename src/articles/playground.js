// // imports
// const { Component } = require("react");

// // Object Creation using constructors

// function SuperHero(fName, lName) {
//   this.fName = fName;
//   this.lName = lName;

//   this.getName = () => {
//     return this.fName + " " + this.lName;
//   };
// }

// const hero1 = new SuperHero("Bruce", "Wayne");
// const hero2 = new SuperHero("Barry", "Allen");

// console.log({ hero1: hero1.getName(), hero2: hero2.getName() });

// // Checking what isReactComponent logs
// console.log(Component.prototype.isReactComponent);

const regex = /Woaa+h/;

console.log(regex.test("Woah, livin' on a prayer")); // false
console.log(regex.test("Woaah, livin' on a prayer")); // true
console.log(regex.test("Woaaaaaaaah, livin' on a prayer")); // true

// console.log(regex.test("Did you pay for the Bon Jovi concert?")); // true
// console.log(regex.test("Woah, we're half way there")); // false
