import * as ClusterActions from './ClusterActions';
import * as PageActions from './PageActions';

export const ACTION_CONSTANTS = {
    pageActionConstants: PageActions.PAGE_ACTIONS_CONST,
    clusterActionConstants: ClusterActions.CLUSTER_ACTIONS
}

export const actions = {
    pageActions: PageActions.pageActions,
    clusterActions: ClusterActions.culusterActions
}