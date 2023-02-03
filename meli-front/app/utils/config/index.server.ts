export const getSiteConfig = (key: string) => {
    //TODO: handler when not found key
    const defaultConfig = require(process.cwd() + '/config/default.json');
    return defaultConfig[key];
}
