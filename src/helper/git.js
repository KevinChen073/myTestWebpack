
const {cd, exec} = require('shelljs');
const parseGitConfig = require('parse-git-config');
/**
 * 获取项目git相关信息
 * @function getGitInfo
 * @param {object} config
 * @param {string} config.localPath 
 * @example 
 * getGitInfo
 * @return {object} gitInfo
 * @return {string} gitInfo.CURRENT_WORK_DIR 当前脚本的工作目录的路径
 * @return {string} gitInfo.GIT_COMMIT_VERSION 获取git版本
 * @return {string} gitInfo.GIT_URL 获取git线上URL
 * @return {string} gitInfo.GIT_REPO 获取git线上repo
 * @return {object} gitInfo.USER 获取git项目用户
 */


function getGitInfo(config) {
    let gitInfo = {};

    const {localPath} = config;
    cd(localPath);
    var fs = require("fs")
    var gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim() // ref: refs/heads/develop
    var ref = gitHEAD.split(': ')[1] // refs/heads/develop
    var develop = gitHEAD.split('/')[2] // 环境：develop
    var gitVersion = fs.readFileSync('.git/' + ref, 'utf-8').trim() // git版本号，例如：6ceb0ab5059d01fd444cf4e78467cc2dd1184a66
    var gitCommitVersion = '"' + develop + ': ' + gitVersion + '"' // 例如dev环境: "develop: 6ceb0ab5059d01fd444cf4e78467cc2dd1184a66"


    // 当前脚本的工作目录的路径
    var cwd = '"' + process.cwd() + '"' // process-node全局模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。process.cwd()表示返回运行当前脚本的工作目录的路径

    let gitConfig = parseGitConfig.sync();
    
    if (gitConfig && gitConfig['remote "origin"']) {
        gitInfo.GIT_REPO = gitConfig['remote "origin"'].url;
        gitInfo.GIT_URL = gitConfig['remote "origin"'].url;
    }

    if (gitConfig && gitConfig['user']) {
        gitInfo.USER = gitConfig['user'];
    }

    gitInfo.CURRENT_WORK_DIR = cwd; // 当前脚本的工作目录的路径
    gitInfo.GIT_COMMIT_VERSION = gitCommitVersion; // 获取git版本

    return gitInfo;
}
module.exports = getGitInfo;
