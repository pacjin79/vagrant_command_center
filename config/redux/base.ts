import {Middleware, Reducer} from "redux";

import {History} from "react-router";
import ServiceMiddleWare from '../../src/services/ServicesMiddleware';
import {reducers} from "../../src/reducers";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";

export function commonMiddleware(history:History.History):Array<Middleware>{
    return [
        thunk,
        ServiceMiddleWare,
        routerMiddleware(history)
    ];
}

export function getReducers(): Reducer <any>{
    return reducers;
}