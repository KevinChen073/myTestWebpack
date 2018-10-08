const fs = require('fs');
const JSON_WHITESPACE = 4;
const writeJson = (file, contents) => new Promise((resolve, reject) => {
 fs.writeFile(file, JSON.stringify(contents, null, JSON_WHITESPACE), (err) => {
    if (err) {
        reject(err);
    }
        resolve(`${file} written`);
    });
});

const path = require('path');
// helpers
const args = process.argv.slice(2);
const [ticket] = args;
const CONFIG_FILE = 'config.json';
const jiraTicket = ticket || 'GS-1000';
const jiraData = jiraTicket;
if (jiraData === undefined) {
 console.log(`JIRA ticket ${jiraTicket} not found`);
 process.exit(0);
}
const newConfigFile = path.join(__dirname, 'data', CONFIG_FILE);
writeJson(newConfigFile, jiraData)
 .then(msg => console.log(msg))
 .catch((err) => { throw err; });