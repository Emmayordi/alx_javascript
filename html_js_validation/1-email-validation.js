document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const errorElement = document.getElementById('error');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateEmail();
    });

    function validateEmail() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        // Regular expression for email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Check if the email follows the standard email format
        if (emailRegex.test(email)) {
            // Clear any previous error message
            errorElement.textContent = "";

            // Allow form submission
            emailForm.submit();
        } else {
            // Display error message
            errorElement.textContent = "Please enter a valid email address.";
        }
    }
});
