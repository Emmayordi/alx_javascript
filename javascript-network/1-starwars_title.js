// 1-starwars_title.js
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        try {
            const movieData = JSON.parse(body);
            console.log(movieData.title);
        } catch (parseError) {
            console.error(`Error parsing JSON: ${parseError.message}`);
        }
    }
});
