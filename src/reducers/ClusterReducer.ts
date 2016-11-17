import * as immutable from 'immutable';

import {Action, handleActions} from 'redux-actions';

import {CLUSTER_ACTIONS} from '../actions/ClusterActions';
import ClusterHelper from '../helpers/ClusterHelper';
import {
    ICluster,
} from '../types';

export const clusters = handleActions({
    [CLUSTER_ACTIONS.CREATE_CLUSTER]: (clusters:ICluster[], action: Action<any>) => {
        const cluster = action.payload as ICluster;
        return ClusterHelper.addCluster(clusters, cluster);
    },
    [CLUSTER_ACTIONS.REMOVE_CLUSTER]: (clusters:ICluster[], action: Action<any>) => {
        const clusterId = action.payload;
        return ClusterHelper.removeCluster(clusters, clusterId);
    }
});