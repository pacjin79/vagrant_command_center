import * as Electron from 'electron';

import {
    IAppState,
    IService,
    IServiceRequest,
    IServiceResponse,
} from '../types';

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

        public execute(request:IServiceRequest):IServiceResponse {
            let response:IServiceResponse;
            switch(request.operation) {
                case "saveAppState":
                    response = this.saveApplicationState(request.payload);
                    break;
            }
            return response;
        }

        public provideId():string{
            return "appService";
        }

        public saveApplicationState(state?: IAppState):IServiceResponse {
            console.log("++++called save Application state, state = ", state);
            return {
                status: 200,
                responseData: "success"
            }
        }
    }
}

export const AppService = ApplicationService.ElectronApplicationService.getInstance();