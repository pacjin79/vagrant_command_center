import * as Immutable from 'immutable';

import {ICluster} from '../types';

namespace ClusterHelper {
    
    export function addCluster(clusters: Array<ICluster>, newCluster:ICluster):Array<ICluster> {
        const ImClusterList = Immutable.List(clusters);
        return ImClusterList.push(newCluster).toArray();
    }
}

export default ClusterHelper;