import * as _ from 'lodash';

import {Dispatch, Middleware, Store} from 'redux';

import {AppService} from './ApplicationService';
import {IAppState} from '../types';

//TODO: MOVE THIS INTO A CONSTANTS FOLDER
export const CALL_SERVICE = "CALL_SERVICE";

export default (store:Store<IAppState>) => (next:any) => (action:any):Middleware => {
    console.log("Sevice Middle ware called !!!!! action = ", action);
    console.log("Sevice Middle ware called !!!!! store = ", store.getState());
    if(action.payload){
        if(_.has(action.payload, CALL_SERVICE)){
            console.log("called service!!!");
             AppService.saveApplicationState(store.getState());
        }
    }
    return next(action);
};