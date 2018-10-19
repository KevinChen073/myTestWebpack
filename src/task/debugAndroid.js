
const {cd, exec} = require('shelljs');
// const { exec } = require('child_process');
const opn = require('opn');
let {androidStudio, androidStudioApp} = require('./../config/appPath');
/**
 * 打开Android调试能力 - Android studio，Android 工程，打开我的网页支持
 * @function debugAndroid
 * @example 
 * myWork work
 */
const androidProjectPath = '/ali-work/rax/components/AliSourcingProject';
module.exports = function debugAndroid() {
    // Android studio，Android 工程
    exec(`open -a ${androidStudioApp} ${androidProjectPath}`)

    // 打开我的网页支持
    opn('https://yuque.antfin-inc.com/yuanhong.cyh/lspsgz/fzqn5s');
}