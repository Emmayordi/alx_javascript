// 3-request_store.js
const request = require('request');
const fs = require('fs');

// URL to request
const url = 'http://localhost:5050/route_0';

// File path to store the body response
const filePath = 'output.txt';

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

