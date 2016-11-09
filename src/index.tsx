import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

const rootRoute: PlainRoute = {
    path: '/',
    indexRoute: {
        component: ConfigOSPage
    },
    childRoutes: [
        {
            path: 'confos',
            component: ConfigOSPage
        },
        {
            path: 'confProv',
            component: ConfigProvider
        }
    ],
    component: Main
};

const initialState: IAppState = {
    currentPage: {
        notifications: []
    }
};


let store: Store<IAppState> = ReduxConfigDev.configureStore(initialState);
const Root = <RootComponentDev store={store} routes={rootRoute} />;
ReactDOM.render(
    Root,
    document.getElementById("bootstrapContainer")
);