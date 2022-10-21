import countries from './countries';

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const skills = function (obj) {
  let numberSkills = 0;
  for (let key in obj) {
    numberSkills = obj[key].skills.length;
    }
    return numberSkills;
  }

  const moreSkills = function (name) {
    let moreSkills = 0;
    for (let key in users) {
      if (key === name) {
        moreSkills = users[key].skills.length;
      }
    }
    return `The user ${name} has ${moreSkills} skills`;
  }

  users.moreSkills();

  users.skills["MongoDB"]

  const copyUsers = Object.assign({}, users);
  const copyKeys = Object.keys(copyUsers);
  const copyValues = Object.values(copyUsers);

  const countryProperties = console.log(countries.name, countries.capital, countries.language, countries.population)
  