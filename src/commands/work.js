require('colors')
let baseWork = require('./baseWork');
let dataSource = require('./../config/work');
let dataSourceOwn = require('./../config/ownWork');

// https://github.com/SBoudrias/Inquirer.js/
var inquirer = require('inquirer');


const mapping = {
    work: {
        label: '工作项'.cyan,
        data: dataSource
    },
    ownWork: {
        label: '日常'.cyan,
        data: dataSourceOwn
    },
}
module.exports = ()=>{
    inquirer
        .prompt([{
            type: 'list',
            message: '选择需要的行为',
            name: 'toppings',
            choices: [
                {name: '工作', value: 'work'},
                {name: '个人工作', value: 'ownWork'},
            ]
        }])
        .then(answer => {
            let choice = answer.toppings;

            let {label, data} = mapping[choice]
            baseWork(label, data);
        });
}