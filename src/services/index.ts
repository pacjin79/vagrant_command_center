import { IService, IServiceResponse } from '../types';

import { AppService } from './ApplicationService'

const serviceRegistry = {
    [AppService.provideId()]: AppService
}

export function getServiceById(serviceId: string): IService {
    return serviceRegistry[serviceId];
}
