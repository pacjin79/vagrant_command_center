import {createAction} from 'redux-actions';
import NotificationSystem = require("react-notification-system");
import Notification = NotificationSystem.Notification;


export const PAGE_ACTIONS_CONST = {
    ADD_NOTIFICATION: "ADD_NOTIFICATION",
    SAVE: "SAVE"
};

const addNotificationAction = createAction<any>(PAGE_ACTIONS_CONST.ADD_NOTIFICATION,
    (notification: Notification): Notification => {
       return notification;
    });


const save = createAction<any>(PAGE_ACTIONS_CONST.SAVE,
    (request) => {
       return request;
    });

export const pageActions =  {
    addNotificationAction,
    save
};