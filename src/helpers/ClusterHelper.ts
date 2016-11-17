import * as Immutable from 'immutable';

import {ICluster} from '../types';

namespace ClusterHelper {
    
    export function addCluster(clusters: Array<ICluster>, newCluster:ICluster):Array<ICluster> {
        const ImClusterList = Immutable.List(clusters);
        return ImClusterList.push(newCluster).toArray();
    }

    export function removeCluster(clusters: Array<ICluster>, clusterIdToRemove:string):Array<ICluster>{
        const indexToRm = _.findIndex(clusters, (cluster:ICluster) => {
            return cluster.clusterId === clusterIdToRemove;
        })
        if(indexToRm !== -1){
            const ImClusterList = Immutable.List(clusters);
            return ImClusterList.delete(indexToRm).toArray();
        }
        return clusters;
    }
}

export default ClusterHelper;