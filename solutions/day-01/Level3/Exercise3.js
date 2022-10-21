import countries from './level2/countries.js';

//Solving the first point
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
const minAge = sortAges[0];
console.log(minAge);
const maxAge = sortAges[sortAges.length - 1];
console.log(maxAge);
const middleAge = sortAges[Math.floor(sortAges.length / 2)];
console.log(middleAge);
const averageAge = sortAges.reduce((a, b) => a + b) / sortAges.length;
console.log(averageAge);
const rangeAge = maxAge - minAge;
console.log(rangeAge);
const compareMinAverage = Math.abs(minAge - averageAge);
console.log(compareMinAverage);
const compareMaxAverage = Math.abs(maxAge - averageAge);
console.log(compareMaxAverage);
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

//Solving the second point
const tenMiddleCountries = countries.slice(Math.floor(countries.length / 2) - 5, Math.floor(countries.length / 2) + 5);
console.log(tenMiddleCountries);

//Solving the third point
const oddCountries = countries.filter((country) => indeOf(country) % 2 !== 0)
? console.log(oddCountries) : console.log('No countries found');
console.log(oddCountries);
