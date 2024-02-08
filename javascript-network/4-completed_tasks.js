// 4-completed_tasks.js
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        try {
            const tasksData = JSON.parse(body);

            // Create an object to store the number of completed tasks by user ID
            const completedTasksByUser = {};

            // Iterate through tasks and count completed tasks by user ID
            tasksData.forEach((task) => {
                if (task.completed) {
                    if (completedTasksByUser[task.userId]) {
                        completedTasksByUser[task.userId]++;
                    } else {
                        completedTasksByUser[task.userId] = 1;
                    }
                }
            });

            // Print the result as a JSON object
            console.log(JSON.stringify(completedTasksByUser, null, 2));
        } catch (parseError) {
            console.error(`Error parsing JSON: ${parseError.message}`);
        }
    }
});
