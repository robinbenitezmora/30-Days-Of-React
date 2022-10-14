import countries from './countries.js';
import webTechs from './web_techs.js';

// Solving the second point
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const arrayWords = text.split(' ');
console.log(arrayWords);
const arrayWordsLength = arrayWords.length;
console.log(arrayWordsLength);

// Solving the third point
console.log(shoppingCart);
const addShoppingCartFirst = shoppingCart.unshift('Meat');
console.log(addShoppingCartFirst);
const addShoppingCartLast = shoppingCart.push('Sugar');
console.log(addShoppingCartLast);
const removeShoppingCart = shoppingCart.pop();
console.log(removeShoppingCart);
const changeShoppingCart = shoppingCart.splice(3, 1, 'Green Tea');
console.log(changeShoppingCart);

// Solving the fourth point
const countryExist = countries.includes('Ethiopia') ? 'Ethiopia is in the array' : countries;
console.log(countryExist);

// Solving the fifth point
const techExist = webTechs.includes('Sass') ? 'Sass is a CSS preprocess' : webTechs.push('Sass');
console.log(techExist);

// Solving the sixth point
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
