import NotificationSystem = require("react-notification-system");
import Notification = NotificationSystem.Notification;

import * as React from 'react';
import * as _ from 'lodash';

//start of applcation properties
interface IPageProperties {
    notifications: Array<Notification>;
}

export interface IMachine {
    boxName: string;
    vmProviderName: string;
}

export interface ICluster {
    clusterId: string;
    clusterName: string;
    machines: Array<IMachine>;
}

export interface IAppState {
    currentPage: IPageProperties;
    clusters: Array<ICluster>;
}

//end of application state

export interface INavEnabledProps extends React.Props<any> {
    navigate: (path: string) => void;
    goBack:() => void;
    goForward:() => void;
}

//navigation data structure
export interface INavItemModel {
    path: string;
    icon?: string;
    iconStyle?: _.Dictionary<any>;
    label?: string;
    onClick?: (eventKey?:string|number) => void;
}

export interface INavModel extends INavEnabledProps {
    navData: _.Dictionary<Array<INavItemModel>>;
}

//Forms data structure
export interface IFormInputProps extends React.Props<any> {
    name: string;
    label?: string;
    bsSize?: "xs" | "sm" | "md" | "lg" | "hg";
    placeholder?: string;
    value?:string;
    required?:boolean;
}

//service data structure
export interface IServiceResponse {
    status: number; //use http status code 
    responseData?: any;
}
export interface IServiceRequest {
    serviceId:string;
    operation: string;
    payload: any;
}
export interface IService {
    execute: (request:IServiceRequest, appState: IAppState)=>IServiceResponse | void;
    provideId: () => string;
}
