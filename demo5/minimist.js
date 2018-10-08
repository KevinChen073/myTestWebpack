//node demo5/minimist.js 'apple bananas cherries' '--name='My Game'' '--ticket='My Ticket'' '--template='My Template'' 
const argv = require('minimist')(process.argv.slice(2));
console.log(argv);