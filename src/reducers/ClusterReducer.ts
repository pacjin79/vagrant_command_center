import * as immutable from 'immutable';

import {Action, handleActions} from 'redux-actions';

import {CLUSTER_ACTIONS} from '../actions/ClusterActions';
import ClusterHelper from '../helpers/ClusterHelper';
import {
    ICluster,
} from '../types';

export const clusters = handleActions({
    [CLUSTER_ACTIONS.CREATE_CLUSTER]: (clusters:ICluster[], action: Action<any>) => {
        const cluster:ICluster = {
            clusterId: action.payload,
            machines: []
        };
        return ClusterHelper.addCluster(clusters, cluster);
    }
});