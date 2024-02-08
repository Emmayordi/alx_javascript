// 6-square.js
const Square = require('./5-square');

class Square extends Square {
    constructor(size) {
        // Call the constructor of the parent class (Square)
        super(size);
    }

    charPrint(c) {
        // If c is undefined, use the character 'X'; otherwise, use the provided character
        const char = c || 'X';

        // Print the square using the specified character
        for (let i = 0; i < this.height; i++) {
            console.log(char.repeat(this.width));
        }
    }
}

module.exports = Square;  // Export the Square class for use in other files
