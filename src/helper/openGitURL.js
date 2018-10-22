// 参考https://www.jianshu.com/p/52b39618526f
var inquirer = require('inquirer');
var getGitInfo = require('./git');
const opn = require('opn');

// const questions = [{
//     type: 'input',
//     name: 'commit',
//     message: "commit Message是什么？"
// }];

/**
 * 打开相关的git仓库地址
 * @function openGitURL
 * @param {object} config
 * @param {string} config.localPath 
 * @example 
 * openGitURL
 */
function openGitURL(config) {
    let info = getGitInfo(config);
    opn(info.GIT_URL);
}
module.exports = openGitURL;