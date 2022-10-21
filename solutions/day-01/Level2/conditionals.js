let grade = 0;

if (grade >= 80 && grade <= 100) {
  console.log('A');
} else if (grade >= 70 && grade <= 79) {
  console.log('B');
} else if (grade >= 60 && grade <= 69) {
  console.log('C');
} else if (grade >= 50 && grade <= 59) {
  console.log('D');
} else if (grade >= 0 && grade <= 49) {
  console.log('F');
} else {
  console.log('Invalid grade');
}

let month = '';

switch (month) {
  case 'January':
    console.log('It/s Winter');
    break;
  case 'February':
    console.log('It/s Winter');
    break;
  case 'March':
    console.log('It/s Spring');
    break;
  case 'April':
    console.log('It/s Spring');
    break;
  case 'May':
    console.log('It/s Spring');
    break;
  case 'June':
    console.log('It/s Summer');
    break;
  case 'July':
    console.log('It/s Summer');
    break;
  case 'August':
    console.log('It/s Summer');
    break;
  case 'September':
    console.log('It/s Autumn');
    break;
  case 'October':
    console.log('It/s Autumn');
    break;
  case 'November':
    console.log('It/s Autumn');
    break;
  case 'December':
    console.log('It/s Winter');
    break;
  default:
    console.log('Invalid month');
    break;
}

let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Monday is a working day');
    break;
  case 'Tuesday':
    console.log('Tuesday is a working day');
    break;
  case 'Wednesday':
    console.log('Wednesday is a working day');
    break;
  case 'Thursday':
    console.log('Thursday is a working day');
    break;
  case 'Friday':
    console.log('Friday is a working day');
    break;
  case 'Saturday':
    console.log('Saturday is a weekend day');
    break;
  case 'Sunday':
    console.log('Sunday is a weekend day');
    break;
  default:
    console.log('Invalid day');
    break;
}
