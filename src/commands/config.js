require('colors');
const readLineSync = require('readline-sync');
let workConfig  = require('./../config/work');

const {cd, exec} = require('shelljs');
let {subl, vsApp} = require('./../config/appPath');

/**
 * 去到webpack的工作目录
 * @example shell
 * myWork config
 * 
 */
module.exports = ()=>{
    let index = readLineSync.keyInSelect(['打开todoList','打开程序编写目录','cd 到目录'], '选择需要的工作');
    if (index !== -1) {
        switch(index) {
            case 0:
                exec(`${subl} /myOwnFile/myTestWebpack/src/todo/index.md`);
            break;
            case 1:
                exec(`open -a ${vsApp} /myOwnFile/myTestWebpack`);
            break;
            case 2:
                exec(`cd /myOwnFile/myTestWebpack`);
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