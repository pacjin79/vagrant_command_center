import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Store} from "redux";
import {IAppState} from "./types";
import {PlainRoute} from 'react-router';
import {ReduxConfigDev} from '../config/redux/dev';
import {ReduxConfigProd} from '../config/redux/prod';
import RootComponentDev from 'RootComponentDev';
import Main from "./Main";
import LandingPage from './pages/Landing/LandingPage';

const rootRoute:PlainRoute = {
    path: '/',
    indexRoute: {
        component: LandingPage
    },
    component: Main
};

const initialState:IAppState = {
    currentPage: {
        notifications: []
    }
};


let store:Store<IAppState> = ReduxConfigDev.configureStore(initialState);
const Root = <RootComponentDev store={store} routes={rootRoute} />;
ReactDOM.render(
    Root,
    document.getElementById("bootstrapContainer")
);