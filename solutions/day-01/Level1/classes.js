// Path: solutions\day-01\Level1\classes.js
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  eat() {
    return `${this.name} is eating`
  }
  drink() {
    return `${this.name} is drinking`
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs)
    this.breed = breed
  }
  bark() {
    return `${this.name} is barking`
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs)
    this.breed = breed
  }
  meow() {
    return `${this.name} is meowing`
  }
}

const dog = new Dog('Dog', 2, 'black', 4, 'German Shepherd')
const cat = new Cat('Cat', 1, 'white', 4, 'Persian')

console.log(dog)
console.log(cat)
