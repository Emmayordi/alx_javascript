// Function divideBy
function divideBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Function addBy
function addBy(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Create four closures
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);

// Test the functions
console.log(addBy100(20));      // Should display 120
console.log(divideBy10(20));    // Should display 2
console.log(divideBy100(200));  // Should display 2
console.log(addBy1000(20));     // Should display 1020
