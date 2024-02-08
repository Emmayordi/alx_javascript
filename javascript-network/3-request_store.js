// 3-request_store.js
const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        // Save the response body to the specified file path (UTF-8 encoded)
        fs.writeFileSync(filePath, body, 'utf-8');
        console.log(`File saved to ${filePath}`);
    }
});
