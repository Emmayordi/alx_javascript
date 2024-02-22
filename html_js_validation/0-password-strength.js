document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm');
    const errorElement = document.getElementById('error');

    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validatePassword();
    });

    function validatePassword() {
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;

        // Regular expressions for password criteria
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Check if the password meets all criteria
        if (
            lengthRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        ) {
            // Clear any previous error message
            errorElement.textContent = "";

            // Allow form submission
            passwordForm.submit();
        } else {
            // Display error message
            errorElement.textContent = "Password must meet the criteria.";
        }
    }
});
