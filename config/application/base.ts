import * as path from 'path';

const getUserDir = () => {
    return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
};

const configDir = getUserDir() + '/.vagrant_cc';

console.log("config Dir = " + configDir);

const config = {
    applicationConfigDir: configDir,
    appStateFilepath: configDir + '/lastAppState.json',
    internalTemplateDir: path.join(__dirname, '../..', "main", "templates")
};

export default config;