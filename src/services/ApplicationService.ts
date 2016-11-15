import * as Electron from 'electron';

import {
    IAppState,
    IService,
    IServiceRequest,
    IServiceResponse,
} from '../types';

import {SERVICES} from '.';

interface IApplicationService extends IService {
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

        public execute(request:IServiceRequest, appState:IAppState):IServiceResponse {
            let response:IServiceResponse;
            switch(request.operation) {
                case SERVICES.appService.operations.saveAppState:
                    response = this.saveApplicationState(appState);
                    break;
            }
            return response;
        }

        public provideId():string{
            return "appService";
        }

        public saveApplicationState(state?: IAppState):IServiceResponse {
            console.log("++++called save Application state, state = ", state);
            console.log("IOUtils = ", IOUtils);
            //flush application state to fs
            IOUtils.flushAppStateToFs(state);
            
            return {
                status: 200,
                responseData: "success"
            }
        }
    }
}

export const AppService = ApplicationService.ElectronApplicationService.getInstance();