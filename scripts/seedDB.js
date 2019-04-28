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
        aerialimage: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/paris-aerial-view-philipp-gtze.jpg",
        places: ["Eiffel Tower", "The Louvre Museum", "Arc de Triomphe"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["She said she's headed to a city on the River Seine.",
            "Ever since the movie, she's been dying to check out the Moulin Rouge.",
            "She mentioned she was going to Bruand's lock museum. I told her that I'd heard it was closed. I think somebody lost the key."],
        cardimages: ["https://www.solenedebies.com/wp-content/uploads/2016/12/walking-woman-illustration.jpg",    
            "https://www.solenedebies.com/wp-content/uploads/2016/08/illustration-woman-lifestyle-editorial-paris.jpg",
            "https://www.solenedebies.com/wp-content/uploads/2016/08/woman-cafe-Paris-illustration-lifestyle.jpg"],
        choices: ["Zurich", "Brussels", "Munich"],
        notes: []
    },
    {
        name: "London",
        summary: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
        latitude: 51.50642,
        longitude: -0.1277,
        aerialimage: "https://cdn.theatlantic.com/assets/media/img/photo/2017/01/a-dizzying-view-of-london/02JasonHawkes-6494/main_900.jpg",
        places: ["Stonehenge", "Westminster Abbey", "Tower of London"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["She asked a lot of questions about the Changing of the Guard - like how many minutes she'd have to sneak by.",
            "She told me she was rushing to make an audition somewhere along Shaftesbury Avenue.",
            "She was bragging about finding season tickets at Wembley Stadium"],
        cardimages: ["https://i2.wp.com/metro.co.uk/wp-content/uploads/2018/10/sei_33777212-82b2-e1539009381238.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-937084440-1537353897.jpg",
            "https://s.abcnews.com/images/Entertainment/kate-middleton-gty-jt-170904_16x9_992.jpg"],
        choices: ["Dublin", "Edinburgh", "Copenhagen"],
        notes: []
    },
    {
        name: "Rome",
        summary: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
        latitude: 41.90322,
        longitude: 12.49564,
        aerialimage: "http://cdn7.dissolve.com/p/D736_97_032/D736_97_032_0004_600.jpg",
        places: ["Trevi Fountain", "St. Peter's Basilica", "Pantheon"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["I think she said she was headed for what's it, the fountain with the big pine cone on top of it.",
            "I think your suspect planned on setting a few fires, so if you see one, call the firemen! Don't fiddle while the city burns",
            "I told her to be sure to see Trajan's Column, and she asked me which newspaper it's in."],
        cardimages: ["https://i0.wp.com/andreapeacock.com/wp-content/uploads/2019/02/DSC03332.jpg",
            "https://ak4.picdn.net/shutterstock/videos/18794684/thumb/1.jpg",
            "https://italoamericano.org/sites/default/files/media/main/italian-family.jpg"],
        choices: ["Vienna", "Bern", "Monaco"],
        notes: []
    },
    {
        name: "Barcelona",
        summary: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.",
        latitude: 12.49564,
        longitude: 2.16835,
        aerialimage: "https://ak8.picdn.net/shutterstock/videos/6957538/thumb/1.jpg",
        places: ["Basilica of the Sagrada Familia", "Casa Mila", "Museo National De Arte"],
        placeImages : [ 
            "", 
            "https://www.barcelona-life.com/wp-content/uploads/2018/03/casa-mila-tickets-barcelona.jpg", 
            ""
        ],
        clues: ["I heard she was watching a flamenco show at Cordobes",
            "I heard her asking for directions to Casa de la Ciutat",
            "I know the city where your henchwoman fled. The place isn't really to my tastes. I find it rather 'Gaudi'."],
        cardimages: ["http://www.barcelona-access.com/files/9072-7-imatge/Sagrada_Familia_Barcelona.jpg",
            "http://www.littleblackshell.com/wp-content/uploads/2017/06/CasaMila-1440x2016.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/01/50/ff/e3/museo-national-de-arte.jpg"],
        choices: ["Morocco", "Rio de Janeiro", "Caracas"],
        notes: []
    },
    {
        name: "Athens",
        summary: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.",
        latitude: 37.97614,
        longitude: 23.7364,
        aerialimage: "https://i.ytimg.com/vi/W1Rhr11C5fw/maxresdefault.jpg",
        places: ["Acropolis of Athens", "Parthenon", "Mount Lycabettus"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["Your henchwoman's hiding in a temple that was built two-and-a-half millenia ago. Boy I do hope she doesn't break anything",
            "Your perp is headed to the Parthenon! Don't let V.I.L.E steal it!",
            "I heard her mention she was craving Baklava"],
        cardimages: ["https://www.tripsavvy.com/thmb/5Ly9I8LHZnEBBcsvOmccCyn-F-Y=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/woman-at-a-restaurant-enjoying-the-view-of-the-acropolis-at-sunset--athens--greece-663377436-59810768685fbe0011830fee.jpg",
            "https://farm8.static.flickr.com/7410/16168821927_e62d1b6273_b.jpg",
            "https://www.greekboston.com/wp-content/uploads/2015/02/Rights-of-Women-In-Modern-Greece.jpg"],
        choices: ["Ankara", "Sarajevo", "Bucharest"],
        notes: []
    },

    {
        name: "Tokyo",
        summary: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples",
        latitude: 35.6762,
        longitude: 139.6503,
        aerialimage: "https://i0.nicepik.com/files/923/673/159/city-building-rooftop-aerial.jpg",
        places: ["Tokyo Skytree", "Senso-ji", "Tokyo Tower"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["She only eats the freshest sushi. I'll bet you'll find her at the crack of dawn in Tsukiji",
            "Much to her delight, she got to ride the Pokemon Yanamote Train into town.",
            "She told me she's going to the city that used to be known as Edo."],
        cardimages: ["https://resources.matcha-jp.com/old_thumbnails/720x2000/1512.jpg",
            "https://static1.squarespace.com/static/58fd82dbbf629ab224f81b68/t/5b6c3ea4aa4a997ec52cdd83/1533820583529/Kimono-Aoki-Hoten.jpg",
            "https://as1.ftcdn.net/jpg/01/46/54/10/500_F_146541067_Kp3VtHZkW2HhJiGnazT1KaQVAbWbYgyj.jpg"],
        choices: ["Shanghai", "Seoul", "Beijing"],
        notes: []
    },
    {
        name: "Berlin",
        summary: "Berlin is best known for its historical associations as the German capital, internationalism and tolerance, lively nightlife, its many cafés, clubs, bars, street art, and numerous museums, palaces, and other sites of historic interest.",
        latitude: 52.5200,
        longitude: 13.4050,
        aerialimage: "https://ak4.picdn.net/shutterstock/videos/5305934/thumb/1.jpg",
        places: ["Brandenburg Gate", "Reichstag Building", "Berlin Cathedral Church"],
        placeImages : [ 
            "", 
            "", 
            ""
        ],
        clues: ["She told me she likes a little light opera, so I sent her to the Komische Oper.",
            "She wants to study some spy tricks at Stasi - Die Ausstellung.",
            "She told me she was craving Wiener Schnitzel."],
        cardimages: ["http://www.nicoleisthenewblack.com/wp-content/uploads/2012/04/Brandenburg_Gate_in_Berlin.jpg",
            "http://www.mysinchew.com/files/reich1.jpg",
            "https://thelovedoeschallenge.files.wordpress.com/2016/05/img_4059.jpg"],
        choices: ["Warsaw", "Prague", "Vienna"],
        notes: []
    },
    {
        name: "Moscow",
        summary: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital.",
        latitude: 55.7558,
        longitude: 37.6173,
        aerialimage: "https://www.rusalia.com/wp-content/uploads/2016/07/Plaza-Roja-de-Moscu.jpg",
        places: ["Red Square", "St. Basil's Cathedral", "Cathedral of Christ The Savior"],
        placeImages : [ 
            "https://jooinn.com/images/red-square-3.jpg", 
            "https://www.dookinternational.com/blog/wp-content/uploads/2016/11/Moscow-Kremlin.jpg", 
            "https://i1.wp.com/www.awaywithmaja.com/wp-content/uploads/2016/06/DSCN6913-1024x768.jpg"
        ],
        clues: ["She asked me for a recipe for Borscht.",
            "I told her she could leave the city on the Trans-Siberian Railway.",
            "If it's May Day, look for her in the Square. She'll be wearing red, of course."],
        cardimages: ["https://i.ytimg.com/vi/j2vxXn2cwFE/maxresdefault.jpg",
                    "http://www.heartmybackpack.com/wp-content/uploads/2015/03/IMG_82881.jpg", 
                    "http://arhiva.dalje.com/slike/slike_3/r1/g2012/m01/ox281286719037638941.jpg"],
        choices: ["Kiev", "Warsaw", "Helsinki"],
        notes: []
    }


];




db.City.remove({})
    .then(() => db.City.collection.insertMany(citySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


