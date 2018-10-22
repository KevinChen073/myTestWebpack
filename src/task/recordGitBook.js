
var inquirer = require('inquirer');
const opn = require('opn');
const {cd, exec} = require('shelljs');
let {vsApp} = require('./../config/appPath');
let {gitbookPath} = require('../config/filePath');

let gitc = require('../helper/gitc');
/**
 * 记录Gitbook
 * @function recordGit
 * @example 
 * myWork work
 */
module.exports = function recordGit() {
    inquirer
        .prompt([{
            type: 'checkbox',
            message: '选择需要的行为',
            name: 'toppings',
            choices: [
                {name: '记录', value: 'record'},
                {name: 'build', value: 'build'},
                {name: '跳转', value: 'cd'},
                {name: '提交', value: 'commit'},
                {name: '打开线上git', value: 'gitAddress'},
            ]
        }])
        .then(answers => {
            answers.toppings.forEach((v)=>{
                switch(v){
                    case 'record':
                        cd(gitbookPath);
                        exec(`open -a ${vsApp} .`);
                    break;
                    case 'cd':
                        console.log(gitbookPath.cyan);
                    break;
                    case 'build':
                        cd(gitbookPath);
                        exec(`gitbook serve`);
                    break;
                    case 'commit':
                        gitc({
                            localPath: gitbookPath
                        });
                    break;
                    case 'gitAddress':
                        opn('https://github.com/KevinChen073');
                    break;
                }
            });
        });
}