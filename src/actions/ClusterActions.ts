import {ICluster} from '../types';
import {createAction} from 'redux-actions';

export const CLUSTER_ACTIONS = {
    CREATE_CLUSTER: "CREATE_CLUSTER"
};
const createCluster = createAction<any>(CLUSTER_ACTIONS.CREATE_CLUSTER,
    (clusterData:ICluster) => {
        return clusterData;
    });


export const culusterActions = {
    createCluster
}