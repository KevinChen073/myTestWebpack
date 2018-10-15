const nobot = require('commander');
const { version } = require('../package');
// commands
const work = require('./commands/work');
const ownWork = require('./commands/ownWork');
const check = require('./commands/check');
const config = require('./commands/config');

nobot
 .version(version);

 nobot
 .command('work')
 .description('唤出工作相关')
 .action(work);

 nobot
 .command('ownWork')
//  .option('-g, --game [gameName]', 'select a game')
 .description('打开个人生活相关')
 .action(ownWork);

nobot
 .command('config')
 .description('配置')
 .action(config);

 nobot
 .command('check')
 .description('查看已安装别名')
 .action(check);

 nobot
 .command('*')
 .action(() => nobot.help());

nobot.parse(process.argv);
if (!process.argv.slice(2).length) {
 nobot.help();
}