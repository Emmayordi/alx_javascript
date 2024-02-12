function welcomeMessage(fullName) {
    // Closure for alert displaying Welcome <fullName>
    return function () {
        alert('Welcome ' + fullName);
    };
}

// Create three variables with welcomeMessage closures
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

// Test the functions
guillaume();
alex();
fred();
