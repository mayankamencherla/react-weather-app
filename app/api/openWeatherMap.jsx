var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=7d85dc47d0c7f8d36ea406455d9a089a';

module.exports = {
    getTemp: function(location){
        // URI Encode the location 
        var encodedLocation= encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res){
            if (res.data.cod && res.data.message) {
                // location was not found etc
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res){
            throw new Error('Unable to fetch weather for that location');
        });
    }
}