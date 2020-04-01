var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.0.101',
    user: 'root',
    password: 'tang123.3',
    port: '3306'
});

connection.connect((err) => {
    if(err) {
        console.log('err', err);
    }
});
// https://www.cnblogs.com/zhongweiv/p/nodejs_mysql.html
// connection.query('SELECT 1 + 1 ASls')