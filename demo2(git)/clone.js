require('colors');
const path = require('path');
const shell = require('shelljs');
const fs = require('fs');
const { repositories } = require('./config');
const repositoriesDirectory = path.join(__dirname, 'myrepositories');

function cloneRepositories(repositoryPath, repositoryList =[]) {
     const repositoryCount = repositoryList.length;
     if (!repositoryPath || repositoryCount === 0) {
        console.log('Invalid path or repository list');
        return;
     }
     console.log(`Cloning repositories to: ${repositoriesDirectory}`.blue);
     if (!fs.existsSync(repositoriesDirectory)) {
        console.log(`create dir`);
        fs.mkdirSync(repositoriesDirectory);
    }
     shell.cd(repositoriesDirectory);
     repositoryList.forEach((v, i)=>{
        console.log(`Cloning ${i + 1} of ${repositoryCount}`.cyan);
        clone(v, i);
        checkoutBranch(v, i);
     });

     console.log('Completed cloning of repositories'.green);
}

function clone(v, index) {
    let repositoryUrl = v.delivery;
    shell.exec(`git clone ${repositoryUrl} --progress -b master`);
}

function checkoutBranch(v, index) {
    let {baseBranch, delivery} = v;
    const repoName = delivery.substring(delivery.lastIndexOf('/'));
    shell.cd(path.join(__dirname, repoName));
    shell.exec(`git checkout ${baseBranch}`);
    shell.exec(`git pull origin ${baseBranch}`);
    shell.cd(repositoriesDirectory);
}

cloneRepositories(repositoriesDirectory, repositories);

