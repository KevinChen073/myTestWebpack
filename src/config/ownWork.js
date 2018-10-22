let recordGitBook  = require('./../task/recordGitBook');
module.exports = {
    dataSource: [
        {
            alias: 'record-gitbook',
            desc: '记录gitbook',
            task: recordGitBook
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