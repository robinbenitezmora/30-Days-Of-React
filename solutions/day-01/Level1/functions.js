function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

fullName("Robin", "Benitez");

function addNumbers (num1, num2) {
  return num1 + num2;
}

addNumbers(1, 2);

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

areaOfCircle(2);

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

convertCelsiusToFahrenheit(30);

function BMI (weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  }
  return "Obesity";
}

BMI(80, 1.8);

function checkSeason(month) {
  if (month === "December" || month === "January" || month === "February") {
    return "Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring";
  } else if (month === "June" || month === "July" || month === "August") {
    return "Summer";
  } else if (month === "September" || month === "October" || month === "November") {
    return "Autumn";
  }
  return "Invalid month";
}

checkSeason("December");