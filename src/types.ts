import NotificationSystem = require("react-notification-system");
import Notification = NotificationSystem.Notification;

import * as React from 'react';
import * as _ from 'lodash';

interface IPageProperties {
    notifications: Array<Notification>;
}

export interface IAppState {
    currentPage: IPageProperties;
}

export interface INavEnabledProps extends React.Props<any> {
    navigate: (path: string) => void;
}

//navigation data structure
export interface INavItemModel {
    path: string;
    icon?: string;
    iconStyle?: _.Dictionary<any>;
    label?: string;
}

export interface INavModel extends INavEnabledProps {
    navData: _.Dictionary<Array<INavItemModel>>;
}