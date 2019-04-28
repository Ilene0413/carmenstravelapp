
const PexelsAPI = require('pexels-api-wrapper');
require("dotenv").config();
var apikey = process.env.PEXELS_ID;

var pexelsClient = new PexelsAPI(apikey);

// Defining methods for the pexelsController
module.exports = {
	
	retrieveImage: function(req, res) {

		pexelsClient.search(req.params.name,1	,1)
			.then(function(result) {
				// console.log(result);
				// console.log(result.photos[0].src.original);
				res.send(result.photos[0].src.original);

			}).catch(function(e) {
				console.err(e);
			});
		
	}
	
};