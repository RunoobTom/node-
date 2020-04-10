const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {json: true}, (err, res, body) => {
    console.log('err ====', err, 'res ====', res)
})