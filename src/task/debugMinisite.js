var inquirer = require('inquirer');
const {cd, exec} = require('shelljs');
// const { exec } = require('child_process');
const opn = require('opn');
let {charlesApp, vsApp} = require('../config/appPath');
let {minisitePath} = require('../config/filePath');
/**
 * 调试旺铺相关 - 打开testminisite网页，打开旺铺支持，打开旺铺的blade，打开vs打开旺铺目录，打开charles查看
 * @function debugMinisite
 * @example 
 * myWork work
 */
module.exports = function debugMinisite() {
    // console.log(1)
    inquirer
        .prompt([{
            type: 'checkbox',
            message: '选择需要的行为',
            name: 'toppings',
            choices: [
                new inquirer.Separator(' = 旺铺开发 = '),
                {name: '旺铺blade', value: 'blade'},
                {name: 'VS旺铺目录', value: 'vsMinisite'},
                new inquirer.Separator(' = 旺铺Debug = '),
                {name: 'testMinisite网页', value: 'testMinisite'},
                {name: '旺铺支持', value: 'minsiteSupport'},
                {name: 'charles', value: 'charles'}
            ]
        }])
        .then(answers => {
            // Use user feedback for... whatever!!
            answers.toppings.forEach((v)=>{
                switch(v){
                    case 'testMinisite':
                        opn('https://m.alibaba.com/page/testminisite.html?companyId=200012245&pageName=index&activeTabId=1')
                    break;
                    case 'minsiteSupport':
                        opn('https://yuque.antfin-inc.com/yuanhong.cyh/ywxv2y')
                    break;
                    case 'vsMinisite':
                        exec(`open -a ${vsApp} ${minisitePath}`)
                    break;
                    case 'blade':
                        exec('cd /ali-work/rax/icbushop/ff/blade;ff dev;')
                    break;
                    case 'charles':
                        exec(`open ${charlesApp}`)
                    break;
                }
            });
        });
}