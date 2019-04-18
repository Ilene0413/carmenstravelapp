// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Cities & Users collections and inserts the cities & users below

mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/carmendb",
        { useNewUrlParser: true }
);

const citySeed = [
        {
                name: "Paris",
                summary: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
                latitude: 48.864716,
                longitude: 2.349014,
                places: ["Eiffel Tower", "The Louvre Museum", "Arc de Triomphe"],
                clues: ["She said she's headed to a city on the River Seine.",
                        "Ever since the movie, she's been dying to check out the Moulin Rouge.",
                        "She mentioned she was going to Bruand's lock museum. I told her that I'd heard it was closed. I think somebody lost the key."],
                choices: ["Zurich", "Brussels", "Munich"],
                notes: []
        },
        {
                name: "London",
                summary: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
                latitude: 51.50642,
                longitude: -0.1277,
                places: ["Stonehenge", "Westminster Abbey", "Tower of London"],
                clues: ["She asked a lot of questions about the Changing of the Guard - like how many minutes she'd have to sneak by.",
                        "She told me she was rushing to make an audition somewhere along Shaftesbury Avenue.",
                        "She was bragging about finding season tickets at Wembley Stadium"],
                choices: ["Dublin", "Edinburgh", "Copenhagen"],
                notes: []
        },
        {
                name: "Rome",
                summary: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
                latitude: 41.90322,
                longitude: 12.49564,
                places: ["Trevi Fountain", "Colosseum", "Pantheon"],
                clues: ["I think she said she was headed for what's it, the fountain with the big pine cone on top of it.",
                        "I think your suspect planned on setting a few fires, so if you see one, call the firemen! Don't fiddle while the city burns",
                        "I told her to be sure to see Trajan's Column, and she asked me which newspaper it's in."],
                choices: ["Vienna", "Bern", "Monaco"],
                notes: []
        },
        {
                name: "Barcelona",
                summary: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.",
                latitude: 12.49564,
                longitude: 2.16835,
                places: ["Basilica of the Sagrada Familia", "Casa Batllo", "Park Guell"],
                clues: ["I heard she was watching a flamenco show at Cordobes",
                        "I heard her asking for directions to Casa de la Ciutat",
                        "I know the city where your henchwoman fled. The place isn't really to my tastes. I find it rather 'Gaudi'."],
                choices: ["Morocco", "Rio de Janeiro", "Caracas"],
                notes: []
        },
        {
                name: "Athens",
                summary: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.",
                latitude: 37.97614,
                longitude: 23.7364,
                places: ["Acropolis of Athens", "Parthenon", "Mount Lycabettus"],
                clues: ["Your henchwoman's hiding in a temple that was built two-and-a-half millenia ago. Boy I do hope she doesn't break anything",
                        "Your perp is headed to the Parthenon! Don't let V.I.L.E steal it!",
                        "I heard her mention she was craving Baklava"],
                choices: ["Ankara", "Sarajevo", "Bucharest"],
                notes: []
        },
        
        {
                name: "Tokyo",
                summary: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples",
                latitude: 35.6762,
                longitude: 139.6503,
                places: ["Tokyo Skytree", "Senso-ji", "Tokyo Tower"],
                clues: ["She only eats the freshest sushi. I'll bet you'll find her at the crack of dawn in Tsukiji",
                        "Much to her delight, she got to ride the Pokemon Yanamote Train into town.",
                        "She told me she's going to the city that used to be known as Edo."],
                choices: ["Shanghai", "Seoul", "Beijing"],
                notes: []
        },
        {
                name: "Agra",
                summary: "Agra is a city in northern India’s Uttar Pradesh state. It's home to the iconic Taj Mahal",
                latitude: 27.1767,
                longitude: 78.0081,
                places: ["Taj Mahal", "Agra Fort", "Tomb of Akbar the Great"],
                clues: ["For her rendezvous, she had to slip through the Elephant Gate - in spite of her crippling fear of elephants",
                        "She was looking for the perfect garden where she could relax by the River Yamuna.",
                        "She asked where to get the best Tandoori Chicken"],
                choices: ["Sri Lanka", "Nepal", "Bangkok"],
                notes: []
        },
        {
                name: "Moscow",
                summary: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital.",
                latitude: 55.7558,
                longitude: 37.6173,
                places: ["Red Square", "The Kremlin", "Bolshoi Theatre"],
                clues: ["She asked me for a recipe for Borscht.",
                        "I told her she could leave the city on the Trans-Siberian Railway.",
                        "If it's May Day, look for her in the Square. She'll be wearing red, of course."],
                choices: ["Kiev", "Warsaw", "Helsinki"],
                notes: []
        }



        





];


const userSeed = [
        {
                userid: "Ilene",
                wins: 0,
                losses: 0


        },
        {
                userid: "Dina",
                wins: 0,
                losses: 0

        },
        {
                userid: "Mukti",
                wins: 0,
                losses: 0

        },
        {
                userid: "JoAnn",
                wins: 0,
                losses: 0

        }

];

db.City.remove({})
        .then(() => db.City.collection.insertMany(citySeed))
        .then(data => {
                console.log(data.result.n + " records inserted!");
        })
        .catch(err => {
                console.error(err);
                process.exit(1);
        });

db.User.remove({})
        .then(() => db.User.collection.insertMany(userSeed))
        .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
        })
        .catch(err => {
                console.error(err);
                process.exit(1);
        });