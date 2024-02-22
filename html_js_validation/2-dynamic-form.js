document.addEventListener('DOMContentLoaded', function () {
    const dynamicForm = document.getElementById('dynamicForm');

    // Add event listener for form submission
    dynamicForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    // Add event listener for dropdown change
    const numFieldsDropdown = document.getElementById('numFields');
    numFieldsDropdown.addEventListener('change', function () {
        const selectedValue = parseInt(numFieldsDropdown.value);
        generateInputFields(selectedValue);
    });

    function generateInputFields(numFields) {
        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Clear previous content

        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + i;
            inputField.placeholder = 'Field ' + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        const inputContainer = document.getElementById('inputContainer');
        const inputFields = inputContainer.querySelectorAll('input');

        // Check if any dynamically generated field is empty
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === '') {
                alert('Please fill in all fields.');
                return; // Prevent form submission
            }
        }

        // Allow form submission if all fields are filled
        dynamicForm.submit();
    }
});
