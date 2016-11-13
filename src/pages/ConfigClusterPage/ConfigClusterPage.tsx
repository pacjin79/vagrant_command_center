import * as Photon from '../../photon_components';
import * as React from 'react';

import {ACTION_CONSTANTS, actions} from '../../actions';
import {Dispatch, connect} from 'react-redux';

interface IClusterPageProps extends React.Props<any>{
    createCluster: (clusterId:string) => void;
}

class ClusterPage extends React.Component<IClusterPageProps, void> {
    constructor(props: IClusterPageProps){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.props.createCluster("test-1");
    }

    render(){
        return (
            <Photon.Button onClick={this.handleOnClick}>
                Add Cluster
            </Photon.Button>
        );
    }
}

const mapStateToProps = (state:any, ownProps: any) => {
    return{
    }
}
const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    const {
        clusterActions
    } = actions;
    return{
        createCluster(clusterId: string){
            dispatch(clusterActions.createCluster(clusterId));
        }
    };
}
export default connect(
    null,
    mapDispatchToProps)(ClusterPage);