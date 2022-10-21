const solveQuadEquation = (a, b, c) => {
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return [];
  }
  if (delta === 0) {
    return [-b / (2 * a)];
  }
  return [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)];
};

solveQuadEquation(1, 2, 1);

const printArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printArray([1, 2, 3, 4, 5]);

const showDateTime = () => {
  const date = new Date();
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
};

showDateTime();

const swapValues = (array) => {
  const temp = array[0];
  array[0] = array[1];
  array[1] = temp;
  return array;
};

swapValues([1, 2]);

const reverseArray = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

reverseArray([1, 2, 3, 4, 5]);

const capitalizeArray = (array) => {
  const capitalizedArray = [];
  for (let i = 0; i < array.length; i++) {
    capitalizedArray.push(array[i].toUpperCase());
  }
  return capitalizedArray;
};

capitalizeArray(["a", "b", "c", "d", "e"]);

const addItem = (array, item) => {
  array.push(item);
  return array;
};

addItem([1, 2, 3, 4, 5], 6);

const removeItem = (array, index) => {
  array.splice(index, 1);
  return array;
};

removeItem([1, 2, 3, 4, 5], 2);

const evensAndOdds = (array) => {
  const even = array.filter((number) => number % 2 === 0);
  const odd = array.filter((number) => number % 2 !== 0);
  return even.length > odd.length ? "even" : "odd";
};

evensAndOdds([1, 2, 3, 4, 5]);

const sum = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

sum(1, 2, 3, 4, 5);

userIdGenerator = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
};

const idGenerator = userIdGenerator();