const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const getPersonInfo = (person) => {
  const {
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages,
  } = person
  const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills.join(
    ', '
  )}. He speaks ${languages.join(', ')}.`
  return personInfo
}

console.log(getPersonInfo(person))