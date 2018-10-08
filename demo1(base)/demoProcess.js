require('colors');

let args = process.argv;
let pid = process.pid;

// console.log(args);
// output: ["/usr/local/bin/node", "/myOwnFile/myTestWebpack/demo1/demoProcess.js"]
process.on('exit', (code) => {
    console.log(`The process has now finished, exiting with code: ${code}`);
})

let argsSplit = args.slice(2);
let [name] = argsSplit;
if (!name) {
    console.error('no args for this');
    process.exit(0);
}

process.stdout.write('Hello, I am writing to standard output\n');
process.stdout.write(`Current working directory: ${process.cwd()}\n`);
console.log(`This script has been running for ${process.uptime()} seconds`.green);
console.log(`I get your args: ${name}`.red);

process.stdout.write('Type something then hit enter: \n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
 const chunk = process.stdin.read();
 if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.exit(0);
 }
});