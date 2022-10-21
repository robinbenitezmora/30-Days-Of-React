const userIdGeneratorByUser = (user) => {
  const id = user.id;
  const username = user.username;
  return id + username;
};

const user = {
  id: 1,
  username: "user1",
};

userIdGeneratorByUser(user);

// Path: solutions\day-01\Level3\functions.js
const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

generateColor();

// Path: solutions\day-01\Level3\functions.js
const shuffleArray = (array) => {
  const shuffledArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return shuffledArray;
}

shuffleArray([1, 2, 3, 4, 5]);

// Path: solutions\day-01\Level3\functions.js
const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

factorial(5);

// Path: solutions\day-01\Level3\functions.js
const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  if (typeof value === "string") {
    return value.trim().length === 0;
  }
  return false;
}

isEmpty(null);

// Path: solutions\day-01\Level3\functions.js
const average = (...numbers) => {
  if (typeof numbers[0] === Number) {
    return numbers.reduce((sum, number) => sum + number) / numbers.length;
  }
  return numbers[0].reduce((sum, number) => sum + number) / numbers[0].length;
}

average(1, 2, 3, 4, 5);

// Path: solutions\day-01\Level3\functions.js
