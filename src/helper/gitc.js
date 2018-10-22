var inquirer = require('inquirer');
const {cd, exec} = require('shelljs');

const questions = [{
    type: 'input',
    name: 'commit',
    message: "commit Message是什么？"
}];

/**
 * 提交git commit
 * @function gitc
 * @param {object} config
 * @param {string} config.localPath 
 * @example 
 * gitc
 */
function gitc(config) {
    const {localPath} = config;
    inquirer.prompt(questions).then(answers => {
        cd(localPath);
        exec(`git add --all; git commit -m "${answers.commit}"; git push;`);
    });
}
module.exports = gitc;