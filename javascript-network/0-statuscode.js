// 0-statuscode.js
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
