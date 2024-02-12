// Global variable
let globalVariable = 'Welcome';

// Function outer
function outer() {
    // Display globalVariable
    console.log(globalVariable);

    // Local variable
    let course = 'Holberton';

    // Function inner
    function inner() {
        // Display globalVariable and course
        console.log(globalVariable + ' ' + course);

        // Local variable
        let exclamation = '!';

        // Function inception
        function inception() {
            // Display globalVariable, course, and exclamation
            console.log(globalVariable + ' ' + course + exclamation);
        }

        // Call inception function
        inception();
    }

    // Call inner function
    inner();
}

// Call outer function
outer();

