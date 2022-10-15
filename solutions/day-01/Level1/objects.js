const dog = {};
console.log(dog);
//
// 1. Create a new object called dog.
dog.name = 'Fido';
dog.legs = 4;
dog.color = 'brown';
dog.age = 4;
dog.bark = function() {
  console.log('Woof! Woof!');
};
dog.breed = 'Labrador';
dog.getDogInfo = function() {
  console.log(`This dog is a ${this.breed} and is ${this.age} years old.`);
};
dog.getOlder = function() {
  this.age++;
};

dog.getDogInfo();
dog.getOlder();