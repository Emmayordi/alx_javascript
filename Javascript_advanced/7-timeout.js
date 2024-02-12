// Log to the console Start of the execution queue
console.log('Start of the execution queue');

// Use setTimeout to execute the final code block with a delay of 0
setTimeout(function () {
    // Log numbers 1 to 100 in a loop
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    // Log to the console End of the loop printing
    console.log('End of the loop printing');
}, 0);

// Log to the console Final code block to be executed
console.log('Final code block to be executed');
