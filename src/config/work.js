let debugAndroid  = require('./../task/debugAndroid');
let justFlow  = require('./../task/justFlow');
let debugMinisite  = require('./../task/debugMinisite');
let data  = require('./../task/data');
module.exports = {
    dataSource: [
        {
            alias: 'debug-minisite',
            desc: '旺铺',
            task: debugMinisite
        },        
        {
            alias: 'just-flow',
            desc: 'Just-flow',
            task: justFlow
        },
        {
            alias: 'debug-android',
            desc: 'Android调试',
            task: debugAndroid
        },
        {
            alias: 'data',
            desc: '数据查看',
            task: data
        },
        {
            alias: 'just-cmd',
            desc: '进入just-命令行开发'
        },
        {
            alias: 'daily',
            desc: '编写周报'
        },
        {
            alias: 'plan',
            desc: '开始计划工作'
        }
    ]
}