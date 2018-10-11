require('colors');
const readLineSync = require('readline-sync');
let workConfig  = require('../config/ownWork');

module.exports = ()=>{
    let index = readLineSync.keyInSelect(workConfig.dataSource.map((v)=>{
        return v.desc;
    }), '选择需要的日常');
    let work = workConfig.dataSource[index];
    console.log(`选择了：${work.desc} : ${work.alias}`.green);
}