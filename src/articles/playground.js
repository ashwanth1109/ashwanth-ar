// Object Creation using constructors

function SuperHero(fName, lName) {
  this.fName = fName;
  this.lName = lName;

  this.getName = () => {
    return this.fName + " " + this.lName;
  };
}

const hero1 = new SuperHero("Bruce", "Wayne");
const hero2 = new SuperHero("Barry", "Allen");

console.log({ hero1: hero1.getName(), hero2: hero2.getName() });
