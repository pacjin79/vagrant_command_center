import {} from ''

import * as _ from 'lodash';

import {Dispatch, Middleware, Store} from 'redux';
import {
    IAppState,
    IServiceRequest,
    IServiceResponse,
} from '../types';

import {ServiceConstants} from '../constants';
import {getServiceById} from '../services';

export default (store:Store<IAppState>) => (next:any) => (action:any):Middleware => {
    console.log("------I'm here in ServicesMiddleware");
    const {
        CALL_SERVICE
    } = ServiceConstants;
    if(action.payload){
        if(_.has(action.payload, CALL_SERVICE)){
             handleServiceOrchestration(action.payload[CALL_SERVICE], store.getState());
        }
    }
    return next(action);
};

function handleServiceOrchestration(serviceRequest:IServiceRequest, state:IAppState){
    const service = getServiceById(serviceRequest.serviceId);
    service.execute(serviceRequest, state);
}