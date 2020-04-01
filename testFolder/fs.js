const fs = require('fs');

// 读取文件
fs.readFile('./testFolder/sample.txt', 'utf-8', (err, data) => {
    console.log(err, data);
});

// 写文件
// fs.writeFile('./testFolder/sample.txt', 'utf-8',(err, data) => {
//     console.log(err, data);
// });

// 查看文件状态
// fs.stat('3.png', (err, stat) => {
//     console.log(stat)
// })

// 读文件流
const readFileStream = fs.createReadStream('./testFolder/sample.txt', 'utf-8');
readFileStream.on('data', (chunk) => {
    console.log('chunk', chunk);
});

readFileStream.on('end', (data) => {
    console.log('end', data);
});

