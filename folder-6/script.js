//06) - using loops

//01) oddNumbers function


// TODO: Implement the oddNumbers function

function oddNumbers(firstNumber, secondNumber) {
    let result = [];
    
    for (let i = firstNumber; i <= secondNumber; i += 1) {
        if (i % 2 !== 0) {
            result.push(i);
        }       
    }

    return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

///////////////////////////////////////////////////

//02) charCount function


// TODO: Implement the charCount function



function charCount(string, letter) {
    let count = {} 
    
}
    




console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3