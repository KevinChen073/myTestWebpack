var inquirer = require('inquirer');
const opn = require('opn');

/**
 * 查看数据 - retcode\motu\crash\d2的UT\goldlog\aplus\xflush
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
            name: 'urls',
            choices: [
                new inquirer.Separator(' = 业务 = '),
                {name: '旺铺', value: 'minisite'},
                {name: '营销', value: 'op'},
                new inquirer.Separator(' = WEEX常用 = '),
                {name: 'retcode', value: 'retcode'},
                {name: '鹰视', value: 'ev'},
                {name: 'crash平台', value: 'crash'},
                {name: 'd2', value: 'd2'},
                new inquirer.Separator(' = WEEX少用 = '),
                {name: '魔兔', value: 'motu'},
                new inquirer.Separator(' = 其他 = '),
                {name: 'goldlog', value: 'goldlog'},
                {name: 'aplus', value: 'aplus'},
                {name: 'xflush', value: 'xflush'}
            ]
        }])
        .then(answers => {
            // Use user feedback for... whatever!!
            answers.urls.forEach((v)=>{
                switch(v){
                    case 'minisite':
                        opn('https://retcode.alibaba-inc.com/projectdashboard?projectId=1437#/?spmId=a277m.main')
                        opn('https://quark.alibaba-inc.com/dashboard/view/page.htm?id=126409')
                    break;
                    case 'op':
                        opn('https://camp.alibaba-inc.com/page.htm?pageId=18719')
                        opn('https://fbi.alibaba-inc.com/site/page.htm?id=95#11741')
                        opn('https://retcode.alibaba-inc.com/project/list')
                    break;
                    case 'ev':
                        opn('http://ev.alibaba.net/')
                    break;
                    case 'retcode':
                        opn('https://retcode.alibaba-inc.com/project/list')
                    break;
                    case 'crash':
                        opn('http://crash.alibaba-inc.com/crash/queryElk.htm')
                    break;
                    case 'd2':
                        opn('https://datastudio.dw.alibaba-inc.com/')
                    break;
                    case 'motu':
                        opn('https://motu.alibaba-inc.com/monitor/weex/biz/overview.htm?spm=0.0.0.0.wGUD3j&appId=21574054@iphoneos&pageId=1753#net=&time=2017-10-11&timeUnit=Day&fmt=yyyy-MM-dd&appVersion=null')
                    break;
                    case 'goldlog':
                        opn('http://log.alibaba-inc.com/track/index.htm#/apply/gold')
                    break;
                    case 'aplus':
                        opn('http://aplus.alibaba-inc.com/aplusplus/index.htm')
                    break;
                    case 'xflush':
                        // opn('https://datastudio.dw.alibaba-inc.com/')
                    break;                    
                }
            });
            process.exit(0);
        });
}