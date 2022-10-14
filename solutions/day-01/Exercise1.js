const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

const emptyArray = [];
console.log(emptyArray);
const fiveItems = [1, 2, 3, 4, 5];
console.log(fiveItems);
const mixedArray = ['one', 2, 'three', 4, 'five'];
console.log(mixedArray);
const longArray = mixedArray.length;
console.log(longArray);
const firstItem = countries[0];
console.log(firstItem);
const middleItem = countries[Math.floor(countries.length / 2)];
console.log(middleItem);
const lastItem = countries[countries.length - 1];
console.log(lastItem);
const mixedDataTypes = [1, 'one', true, undefined, null, { name: 'John' }];
console.log(mixedDataTypes);
const lengthMixedDataTypes = mixedDataTypes.length;
console.log(lengthMixedDataTypes);
const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon];
console.log(itCompanies);
const numberOfCompanies = itCompanies.length;
console.log(numberOfCompanies);
const firstCompany = itCompanies[0];
console.log(firstCompany);
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCompany);
const lastCompany = itCompanies[itCompanies.length - 1];
console.log(lastCompany);
const itCompaniesUpperCase = itCompanies.map((company) => company.toUpperCase());
console.log(itCompaniesUpperCase);
const itCompaniesJoined = itCompanies.join(', ');
console.log(itCompaniesJoined);
const itCompaniesExists = itCompanies.includes('Facebook');
console.log(itCompaniesExists);
const itCompaniesWithO = itCompanies.map((company) => company.includes('o'));
console.log(itCompaniesWithO);
const itCompaniesOrdered = itCompanies.sort();
console.log(itCompaniesOrdered);
const itCompaniesReverse = itCompanies.reverse();
console.log(itCompaniesReverse);
const itCompaniesSlice = itCompanies.slice(0, 3);
console.log(itCompaniesSlice);
const itCompaniesSplice = itCompanies.splice(itCompanies.length - 3, itCompanies.length);
console.log(itCompaniesSplice);
const itCompaniesMiddle = itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompaniesMiddle);
const itCompaniesRemovedFirst = itCompanies.shift();
console.log(itCompaniesRemovedFirst);
const itComopaniesMiRemovedMiddle = itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itComopaniesMiRemovedMiddle);
const itCompaniesRemovedLast = itCompanies.pop();
console.log(itCompaniesRemovedLast);
const itCompaniesRemovedAll = itCompanies.splice(0, itCompanies.length);
console.log(itCompaniesRemovedAll);