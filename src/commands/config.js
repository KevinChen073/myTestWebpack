require('colors');
const readLineSync = require('readline-sync');
let workConfig  = require('./../config/work');

const {cd, exec} = require('shelljs');
let {subl, vs} = require('./../config/appPath');

module.exports = ()=>{
    let index = readLineSync.keyInSelect(['打开todoList','打开程序编写目录'], '选择需要的工作');
    if (index !== -1) {
        switch(index) {
            case 0:
                exec(`${subl} /myOwnFile/myTestWebpack/src/todo/index.md`);
            break;
            case 1:
                exec(`${vs} /myOwnFile/myTestWebpack`);
            break;
            default:
                console.log(`放弃选择`.cyan);
            break;
        }
    } else {
        console.log(`放弃选择`.cyan);
    }
    process.exit(0);
}