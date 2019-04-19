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
        summary: "Paris is the capital and most populous city of France, with an area of 105 square kilometres and an official estimated population of 2,140,526 residents as of 1 January 2019. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science, and the arts.",
		places: ["Eiffel Tower", "The Louvre Museum", "Arc de Triomphe"],
        clues: ["She said she's headed to a city on the River Seine.",
                "Ever since the movie, she's been dying to check out the Moulin Rouge.",
                "She mentioned she was going to Bruand's lock museum. I told her that I'd heard it was closed. I think somebody lost the key."],
        choices: ["Zurich","Brussels","Munich"],      
        notes: []
	},
	{
        name: "London",
        summary: "London is the capital and largest city of both England and the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans. The City of London, London's ancient core − an area of just 1.12 square miles and colloquially known as the Square Mile − retains boundaries that follow closely its medieval limits. The City of Westminster is also an Inner London borough holding city status. Greater London is governed by the Mayor of London and the London Assembly.",
		places: ["Stonehenge", "Westminster Abbey", "Tower of London"],
        clues: ["She asked a lot of questions about the Changing of the Guard - like how many minutes she'd have to sneak by.",
                "She told me she was rushing to make an audition somewhere along Shaftesbury Avenue.",
                "She was bragging about finding season tickets at Wembley Stadium"],
        choices: ["Dublin","Edinburgh","Copenhagen"], 
        notes: []
	},
    {
        name: "Rome",
        summary: "Rome is the capital city and a special comune of Italy. Rome also serves as the capital of the Lazio region. With 2,872,800 residents in 1,285 km2, it is also the country's most populated comune. It is the fourth most populous city in the European Union by population within city limits. It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents, thus making it the most populous metropolitan city in Italy. Rome is located in the central-western portion of the Italian Peninsula, within Lazio, along the shores of the Tiber. The Vatican City (the smallest country in the world) is an independent country inside the city boundaries of Rome, the only existing example of a country within a city: for this reason Rome has been often defined as capital of two states.",
		places: ["Trevi Fountain", "Colosseum", "Pantheon"],
        clues: ["I think she said she was headed for what's it, the fountain with the big pine cone on top of it.",
                "I think your suspect planned on setting a few fires, so if you see one, call the firemen! Don't fiddle while the city burns",
                "I told her to be sure to see Trajan's Column, and she asked me which newspaper it's in."],
        choices: ["Vienna","Bern","Monaco"], 
        notes: []
	},
    {
        name: "Barcelona",
        summary: "Spain’s second largest and definitely most cosmopolitan city, and one of the Mediterranean’s busiest ports. Barcelona is the capital of Catalonia, which is a region of Spain with its own language – Catalan, and it’s own culture and character. Barcelona offers the best of both worlds, situated on the Costa Brava on the Spanish Mediterranean coast, the city gently rises up from the coastline through the city and up into a range of wooded hills. Famous for breaking ground art, architecture and avant-garde chefs; the city eclipses many other for its creativity and forward thinking.",
		places: ["Basilica of the Sagrada Familia", "Casa Batllo", "Park Guell"],
        clues: ["I heard she was watching a flamenco show at Cordobes",
                "I heard her asking for directions to Casa de la Ciutat",
                "I know the city where your henchwoman fled. The place isn't really to my tastes. I find it rather 'Gaudi'."],
        choices: ["Morocco","Rio de Janeiro","Caracas"], 
        notes: []
    },
    {
        name: "Athens",
        summary: "Athens is the historical capital of Europe, with a long history, dating from the first settlement in the Neolithic age. In the 5th Century BC  – the culmination of Athens’ long, fascinating history – the city’s values and civilization acquired a universal significance. Over the years, a multitude of conquerors occupied Athens, and erected unique, splendid monuments - a rare historical palimpsest. In 1834, it became the capital of the modern Greek state and in two centuries since it has become an attractive modern metropolis with unrivalled charm.",
		places: ["Acropolis of Athens", "Parthenon", "Mount Lycabettus" ],
        clues: ["Your henchwoman's hiding in a temple that was built two-and-a-half millenia ago. Boy I do hope she doesn't break anything",
                "Your perp is headed to the Parthenon! Don't let V.I.L.E steal it!",
                "I heard her mention she was craving Baklava"],
        choices: ["Ankara","Sarajevo","Bucharest"], 
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
