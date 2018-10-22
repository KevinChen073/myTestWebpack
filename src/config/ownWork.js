let recordGitBook  = require('./../task/recordGitBook');
let developWorkLife  = require('./../task/developWorkLife');
module.exports = {
    dataSource: [
        {
            alias: 'record-gitbook',
            desc: '记录gitbook',
            task: recordGitBook
        },
        {
            alias: 'workLife',
            desc: '开发脚手架',
            task: developWorkLife
        },
        {
            alias: 'greatwall',
            desc: '科学上网'
        },
        {
            alias: 'life',
            desc: '生活软件(微信、音乐)'
        },
    ]
}