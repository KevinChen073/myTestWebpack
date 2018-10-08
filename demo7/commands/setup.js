require('colors');
module.exports = (id)=>{
    if (!id) {
        console.log(`setup Program`.green);
    } else {
        console.log(`restart Program ${id}`.green);
    }
}