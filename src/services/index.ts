import { IService, IServiceResponse } from '../types';

import { AppService } from './ApplicationService'

export const SERVICES = {
    appService: {
        id: AppService.provideId(),
        operations: {
            saveAppState: "saveAppState"
        }
    }
};

const serviceRegistry = {
    [SERVICES.appService.id]: AppService
};

export function getServiceById(serviceId: string): IService {
    return serviceRegistry[serviceId];
}

