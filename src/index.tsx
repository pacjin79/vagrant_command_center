import * as Electron from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ConfigClusterPage from './pages/ConfigClusterPage/ConfigClusterPage';
import ConfigOSPage from './pages/ConfigOS/ConfigOSPage';
import ConfigProvider from './pages/ConfigProvider/ConfigProvider';
import { IAppState } from "./types";
import LandingPage from './pages/Landing/LandingPage';
import Main from "./Main";
import { PlainRoute } from 'react-router';
import { ReduxConfigDev } from '../config/redux/dev';
import { ReduxConfigProd } from '../config/redux/prod';
import RootComponentDev from 'RootComponentDev';
import { Store } from "redux";

const remote = Electron.remote;

const rootRoute: PlainRoute = {
    path: '/',
    indexRoute: {
        component: LandingPage
    },
    childRoutes: [
        {
            path: 'confos',
            component: ConfigOSPage
        },
        {
            path: 'confProv',
            component: ConfigProvider
        },
        {
            path: 'confCluster',
            component: ConfigClusterPage
        }
    ],
    component: Main
};

const IOUtils = remote.require('./local/IOUtils');
IOUtils.loadAppStateFromFs().then((data: IAppState) => {
    initialize(data);
}).catch((e: Error) => {
    console.error("issue reading app state from fs ", e.stack);
    initialize();
});

function initialize(data?:IAppState){
    let initialState: IAppState = {
        currentPage: {
            notifications: []
        },
        clusters: []
    };
    if(data) {
        initialState = data;
    }

    let store: Store<IAppState> = ReduxConfigDev.configureStore(initialState);
    const Root = <RootComponentDev store={store} routes={rootRoute} />;
    ReactDOM.render(
        Root,
        document.getElementById("bootstrapContainer")
    );
}