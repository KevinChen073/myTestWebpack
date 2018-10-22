require('colors');
const readLineSync = require('readline-sync');

/**
 * @todo: 准备也用inquier改造
 */
module.exports = (name, workConfig)=>{
    let index = readLineSync.keyInSelect(workConfig.dataSource.map((v)=>{
        return v.desc;
    }), `选择需要的${name}`);
    if (index !== -1) {
        let work = workConfig.dataSource[index];
        console.log(`选择了：${work.desc} : ${work.alias}`.green);
        if (work.task && typeof work.task === 'function') {
            work.task();
        }
    } else {
        console.log(`放弃选择`.cyan);
    }
}