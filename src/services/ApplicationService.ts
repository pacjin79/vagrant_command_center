import * as Electron from 'electron';

import {
    IAppState,
} from '../types';

interface IApplicationService {
    saveApplicationState: (state?: IAppState) => void;
}

namespace ApplicationService {
    const remote = Electron.remote;
    const IOUtils = remote.require('./local/IOUtils');

    export class ElectronApplicationService implements IApplicationService {
        private static _instance: ElectronApplicationService = new ElectronApplicationService();
        constructor() {
            if (ElectronApplicationService._instance) {
                throw new Error("Error: Use AppService.getInstance() instead");
            }
            ElectronApplicationService._instance = this;
        }

        public static getInstance():IApplicationService{
            return ElectronApplicationService._instance;
        }

        public saveApplicationState(state?: IAppState) {
            console.log("++++called save Application state, state = ", state);
        }
    }
}

export const AppService = ApplicationService.ElectronApplicationService.getInstance();