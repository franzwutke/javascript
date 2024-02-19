//05) Coding-Task: If & switch statements

//01) Spot the errors and fix them

const size = 25;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Greater than 20";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20


//02) oddEven-Funktion

// TODO: Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
      return "Even";
  } else {
      return "Odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even


//03) oldYoung function

// TODO: Implement the oldYoung function


function oldYoung(age) {
  if (age >= 50) {
      return "elder person";
  } else if (age >= 14) {
      return "young person";
  } else if (age >= 0) {
      return "children";
  }  else if (age <= 0) {
      return "invalid parameter";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person