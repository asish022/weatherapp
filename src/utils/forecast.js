const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7424c45eb65c1604557838a1c3f9229a&query=' + latitude + ',' + longitude 

    request({url, json: true }, (error, response)  => {
        if (error) {
            callback('unable to connect weather', undefined)
        }   else if (response.body.error){
            callback('unable to connect to weather try another process', undefined)
        }   else {
            callback(undefined, response.body.current.weather_descriptions +', there is a ' + response.body.current.temperature+ ' degrees temperature. with ' + response.body.current.precip + '% chance of rain ')
        }
    })
}

module.exports = forecast