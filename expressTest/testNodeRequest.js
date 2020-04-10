var request = require('request');

//get方式请求
var url = 'http://localhost:3000/hello';
request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // 请求成功的处理逻辑
    }
});