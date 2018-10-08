require('colors');
module.exports = (id)=>{
    console.log('create a new template'.green);
    
    if (id) {
        console.log(`id is ${id}`.green);
    }
}