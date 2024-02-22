document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('submitForm');

    // Add event listener for form submission
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        // Retrieve form field values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate form fields
        if (name === '' || email === '') {
            // Display error message for empty fields
            alert('Please fill in all required fields.');
        } else {
            // Display success message
            alert('Form submitted successfully!');
            // Additional actions can be performed here, such as sending the form data to a server.
        }
    }
});
