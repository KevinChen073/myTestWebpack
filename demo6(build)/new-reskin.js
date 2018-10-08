require('colors');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const readLineSync = require('readline-sync');
const fse = require('fs-extra');
const open = require('opn');

// 获取新游戏名字
const GAME_JSON_FILENAME = 'game.json';
let { gameName, gamePrimaryColor, gameSecondaryColor } = argv;
if (gameName === undefined) {
    gameName = readLineSync.question('What is the name of thenew reskin? ', {
        limit: input => input.trim().length > 0,
        limitMessage: 'The project has to have a name, try again'
    });
}

// 工厂函数，统一处理Color input
const confirmColorInput = (color, colorType = 'primary') => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexColorRegex.test(color)) {
        return color;
    }
    return readLineSync.question(`Enter a Hex Code for the game ${colorType} color `, {
        limit: hexColorRegex,
        limitMessage: 'Enter a valid hex code: #efefef'
    });
};

// 获取颜色
gamePrimaryColor = confirmColorInput(gamePrimaryColor, 'primary');
gameSecondaryColor = confirmColorInput(gameSecondaryColor, 'secondary');

// 反馈用户
console.log(`Creating a new reskin '${gameName}' with skin color: Primary: '${gamePrimaryColor}' Secondary: '${gameSecondaryColor}'`);
const src = path.join(__dirname, 'template');
const destination = path.join(__dirname, 'releases', gameName);
const configurationFilePath = path.join(destination, GAME_JSON_FILENAME);
const projectToOpen = path.join('http://localhost:8080', 'releases', gameName, 'index.html');
// 确保两个文件夹都在
fse.ensureDirSync(src);
fse.ensureDirSync(destination);

fse.copy(src, destination)
    .then(() => {
        console.log(`Successfully created ${destination}`.green);
        return fse.readJson(configurationFilePath);
    })
    .then((config) => {
        const newConfig = config;
        newConfig.primaryColor = gamePrimaryColor;
        newConfig.secondaryColor = gameSecondaryColor;
        return fse.writeJson(configurationFilePath, newConfig);
    })
    .then(() => {
        console.log(`Updated configuration file ${configurationFilePath}`.green);
        openGameIfAgreed(projectToOpen);
    })
    .catch(console.error);

const openGameIfAgreed = (fileToOpen) => {
    const isOpeningGame = readLineSync.keyInYN('Would you like to open the game? ');
    if (isOpeningGame) {
        open(fileToOpen);
    }
};    