// 使用fs模块来读文件
const fs = require('fs');
const readJson = file => new Promise((resolve, reject) => {
 fs.readFile(file, { encoding: 'UTF-8' }, (err, data) => {
    if (err) {
       reject(err);
    }
    if (typeof data === 'string') {
        resolve(JSON.parse(data));
    } else {
        resolve(data);
    }
 });
});
// console.log(__dirname);
// console.log(process.cwd());
// Usage
readJson(`${__dirname}/data/mock.json`)
 .then(config => console.log(config));

// 或者直接读json文件
let config = require('./data/mock.json');
console.log(config);