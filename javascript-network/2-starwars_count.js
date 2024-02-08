// 2-starwars_count.js
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the Star Wars API films endpoint
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        try {
            const filmsData = JSON.parse(body);

            // Filter films where "Wedge Antilles" is present
            const filmsWithWedge = filmsData.results.filter((film) =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );

            // Print the number of movies with "Wedge Antilles"
            console.log(filmsWithWedge.length);
        } catch (parseError) {
            console.error(`Error parsing JSON: ${parseError.message}`);
        }
    }
});
