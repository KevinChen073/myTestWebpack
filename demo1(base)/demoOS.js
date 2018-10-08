const os = require('os');

const homeDirectory = os.homedir();
console.log(`home目录为: ${homeDirectory}`);

const osPlatform = os.platform();
console.log(`操作系统为: ${osPlatform}`);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;

const cpuModel = cpuCores[0].model;
console.log(`CPU为： ${cpuModel} ，并且具有 ${coreCount}
核.`);