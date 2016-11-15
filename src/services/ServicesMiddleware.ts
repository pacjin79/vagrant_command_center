import * as _ from 'lodash';

import {Dispatch, Middleware, Store} from 'redux';
import {
    IAppState,
    IServiceRequest,
    IServiceResponse,
} from '../types';

import {getServiceById} from '../services';

//TODO: MOVE THIS INTO A CONSTANTS FOLDER
export const CALL_SERVICE = "CALL_SERVICE";

export default (store:Store<IAppState>) => (next:any) => (action:any):Middleware => {
    if(action.payload){
        if(_.has(action.payload, CALL_SERVICE)){
             handleServiceOrchestration(action.payload[CALL_SERVICE], store.getState());
        }
    }
    return next(action);
};

function handleServiceOrchestration(serviceRequest:IServiceRequest, state:IAppState){
    const service = getServiceById(serviceRequest.serviceId);
    service.execute(serviceRequest);
}