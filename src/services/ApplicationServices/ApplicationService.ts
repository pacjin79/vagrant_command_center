import {
    IAppState,
    ICluster,
    IService,
    IServiceRequest,
    IServiceResponse,
} from '../../types';

import ElectronApplicationService from './ElectronApplicationService';

export interface IApplicationService extends IService {
    saveApplicationState: (state?: IAppState) => IServiceResponse;
    generateVagrantFile: (request:IServiceRequest, state?: IAppState) => IServiceResponse;
}

export { default as AppService } from './ElectronApplicationService';