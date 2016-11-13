import {createAction} from 'redux-actions';

export const CLUSTER_ACTIONS = {
    CREATE_CLUSTER: "CREATE_CLUSTER"
};
const createCluster = createAction<any>(CLUSTER_ACTIONS.CREATE_CLUSTER,
    (clusterId:string) => {
        return clusterId;
    });


export const culusterActions = {
    createCluster
}