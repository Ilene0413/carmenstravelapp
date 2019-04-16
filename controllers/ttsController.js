
const googleTTS = require('google-tts-api');

module.exports = {

    convert_tts: function (req, res) {

        googleTTS(req.params.text)
            .then(function (url) {
                res.json(url);
            })
            .catch(function (err) {
                console.error(err.stack);

            });
    }
};