require('colors');
const {cd, exec} = require('shelljs');
const opn = require('opn');
let {subl} = require('./../config/appPath');

module.exports = ()=>{
    exec(`${subl} ~/.bash_profile`);
}