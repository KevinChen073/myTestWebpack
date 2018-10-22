
var inquirer = require('inquirer');
const opn = require('opn');
const {cd, exec} = require('shelljs');
let {vsApp} = require('../config/appPath');
let {developWorkLifePath} = require('../config/filePath');

let openGitURL = require('../helper/openGitURL');
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
                {name: '用vs打开开发', value: 'develop'},
                {name: '跳转', value: 'cd'},
                {name: '提交', value: 'commit'},
                {name: '打开线上git', value: 'gitAddress'},
                {name: '打开todoList', value: 'todo'},
            ]
        }])
        .then(answers => {
            answers.toppings.forEach((v)=>{
                switch(v){
                    case 'develop':
                        cd(developWorkLifePath);
                        exec(`open -a ${vsApp} .`);
                    break;
                    case 'cd':
                        console.log(developWorkLifePath.cyan);
                    break;
                    case 'commit':
                        gitc({
                            localPath: developWorkLifePath
                        });
                    break;
                    case 'gitAddress':
                        openGitURL({
                            localPath: developWorkLifePath
                        });
                    break;
                    case 'todo':
                        console.log(`${subl} ${developWorkLifePath}/src/todo/index.md`.cyan);
                        exec(`${subl} ${developWorkLifePath}/src/todo/index.md`);
                    break;
                }
            });
        });
}