import * as path from 'path';

import config from './base';

config.applicationConfigDir = path.join(__dirname, '../..', 'build', 'tmp');
config.appStateFilepath = config.applicationConfigDir+'/lastAppState.json';

export default config;