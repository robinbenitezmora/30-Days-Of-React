// Path: solutions\day-01\Level2\conditionals.js
if (age > 18) {
    console.log("You are old enough to drive");
} else {
    console.log("You are left with ${18 - age} years to drive");
}

const myAge = 30;

if (myAge < age) {
    console.log("You are ${age - MyAge} years older than me");
} else {
    console.log("You are ${myAge - age} years younger than me");
}

myAge < age ? console.log("You are ${age - MyAge} years older than me") : console.log("You are ${myAge - age} years younger than me");

number % 2 === 0 ? console.log("${number} is an even number") : console.log("${number} is an odd number");
