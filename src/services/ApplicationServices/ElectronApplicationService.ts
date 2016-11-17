import * as Electron from 'electron';

import {
    IAppState,
    IServiceRequest,
    IServiceResponse,
} from '../../types';

import { IApplicationService } from './ApplicationService';
import { SERVICES } from '../';

const remote = Electron.remote;
const IOUtils = remote.require('./local/IOUtils');
const Transformer = remote.require('./local/Transformer');


class ElectronApplicationService implements IApplicationService {
    private static _instance: ElectronApplicationService = new ElectronApplicationService();
    constructor() {
        if (ElectronApplicationService._instance) {
            throw new Error("Error: Use AppService.getInstance() instead");
        }
        ElectronApplicationService._instance = this;
    }

    public static getInstance(): IApplicationService {
        return ElectronApplicationService._instance;
    }

    public execute(request: IServiceRequest, appState: IAppState): IServiceResponse {
        let response: IServiceResponse;
        switch (request.operation) {
            case SERVICES.appService.operations.saveAppState:
                response = this.saveApplicationState(appState);
                break;
            case SERVICES.appService.operations.generateVagFile:
                response = this.generateVagrantFile(request, appState);
                break;
        }
        return response;
    }

    public provideId(): string {
        return "appService";
    }

    //TODO: HANDLE ERRORS
    public saveApplicationState(state?: IAppState): IServiceResponse {
        //flush application state to fs
        IOUtils.flushAppStateToFs(state);
        return {
            status: 200,
            responseData: "success"
        }
    }

    public generateVagrantFile(request: IServiceRequest, state: IAppState): IServiceResponse {
        Transformer.generateVagrantFile();
        return {
            status: 200,
            responseData: "success"
        }
    }


}

export default ElectronApplicationService.getInstance();