//aufgabe im livecouching

function myFunction (a, b, c) {
  return a + b + c;
}

console.log (myFunction(1, 1, 1)) ;
//result should be 3 
 
//coding task first function
//01) Greet function

function welcomeMsg(name) {
  return name;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

//02) Gross Price Function

function calcGrossPrice(netto, mwst) {
  return netto * mwst + netto;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//03) Add Positive Function

//1 möglichkeit

function addPositive(a, b){
  a = Math.abs(a)
  b = Math.abs(b)
  return a + b;
}
//2 möglichkeit


console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9