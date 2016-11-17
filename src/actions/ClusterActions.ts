import { ICluster } from '../types';
import {
    SERVICES,
} from '../services';
import {
    ServiceConstants,
} from '../constants';
import { createAction } from 'redux-actions';

export const CLUSTER_ACTIONS = {
    CREATE_CLUSTER: "CREATE_CLUSTER",
    REMOVE_CLUSTER: "REMOVE_CLUSTER",
    GEN_VAGRANT_FILE: "GEN_VAGRANT_FILE"
};
const createCluster = createAction<any>(CLUSTER_ACTIONS.CREATE_CLUSTER,
    (clusterData: ICluster) => {
        return clusterData;
    });

const removeCluster = createAction<any>(CLUSTER_ACTIONS.REMOVE_CLUSTER,
    (clusterId: string) => {
        return clusterId;
    });

const genVagrantFile = createAction<any>(CLUSTER_ACTIONS.GEN_VAGRANT_FILE,
    (clusterId: string) => {
        console.log("****** I'm here in genVagrantFile");
        return {
            [ServiceConstants.CALL_SERVICE]: {
                 serviceId: SERVICES.appService.id,
                 operation: SERVICES.appService.operations.generateVagFile
            }
        }
    });

export const culusterActions = {
    createCluster,
    removeCluster,
    genVagrantFile
}