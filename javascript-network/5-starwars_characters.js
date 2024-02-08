// 5-starwars_characters.js
const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL with the provided Movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API films endpoint
request.get(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        try {
            const movieData = JSON.parse(body);

            // Print the characters from the movie
            movieData.characters.forEach((character) => {
                // Make a GET request to the character's URL
                request.get(character, (characterError, characterResponse, characterBody) => {
                    if (characterError) {
                        console.error(`Error fetching character: ${characterError.message}`);
                    } else {
                        const characterData = JSON.parse(characterBody);
                        console.log(characterData.name);
                    }
                });
            });
        } catch (parseError) {
            console.error(`Error parsing JSON: ${parseError.message}`);
        }
    }
});
