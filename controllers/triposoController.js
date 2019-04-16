require("dotenv").config();
var axios = require("axios");
var apikey = process.env.TRIPOSO_ID;



// Defining methods for the pexelsController
module.exports = {

	retrievePOI: function (req, res) {

		
		
		axios({
			url: "https://www.triposo.com/api/latest/poi.json?location_id="+req.params.name+
				 "&tag_labels=sightseeing&count=10&order_by=-score",
			method: 'GET',
			headers: {

				'X-Triposo-Account': process.env.TRIPOSO_ID,
				'X-Triposo-Token': process.env.TRIPOSO_KEY

			}
		})
			.then(response => {
				console.log(response.data);
				res.json(response.data);
			})
			.catch(err => {
				console.error(err);
				res.status(404).end();
			});

	}

};