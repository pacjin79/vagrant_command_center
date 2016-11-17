import * as Photon from '../../photon_components';
import * as React from 'react';

import { default as AbstractPage, IAbstractPageProps } from '../AbstractPage';
import {
    Col,
    Row,
} from 'react-bootstrap';
import { ComponentDecorator, Dispatch, connect } from 'react-redux';
import {
    IAppState,
    ICluster,
    INavEnabledProps,
    INavItemModel,
} from '../../types';

import Card from '../../components/Card/Card';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import { IMainPageConfig } from '../../Main';
import {PageHelper} from '../../helpers';
import {actions} from '../../actions';
import { push } from 'react-router-redux';

import SplitPane = require('react-split-pane');


interface ILandingPageProps extends React.Props<any> {
    navigate: (path: string) => void;
    removeCluster: (clusterId:string) => void;
    genVagrantFile: (clusterId:string) => void;
    clusters: Array<ICluster>;
    save:() => void;
}

class LandingPage extends AbstractPage<ILandingPageProps> {

    constructor(props: ILandingPageProps) {
        super(props);
        this.getNavData = this.getNavData.bind(this);
        this.onClusterConfig = this.onClusterConfig.bind(this);
        this.onClusterDelete = this.onClusterDelete.bind(this);
        this.onClusterGenVagFile = this.onClusterGenVagFile.bind(this);
    }

    onClusterGenVagFile(clusterId:string) {
        this.props.genVagrantFile(clusterId);
    }

    onClusterConfig(eventKey:string){
    }

    onClusterDelete(eventKey:string){
        this.props.removeCluster(eventKey);
        this.props.save();
    }

    onNavItemClick(eventKey: string) {
        this.props.navigate(eventKey);
    }

    provideConfigMain(): IMainPageConfig {
        return {
            hasSideMenu: false,
            customHeaderNavdata: this.getNavData()
        };
    }

    getNavData(): _.Dictionary<INavItemModel[]> {
        const navData: _.Dictionary<INavItemModel[]> = {
            btnGrp1: [
                {
                    path: "/confCluster",
                    icon: "plus",
                    onClick: this.onNavItemClick.bind(this)
                },
                {
                    path: "/startAll",
                    icon: "play",
                    onClick: this.onNavItemClick.bind(this)
                }
            ]
        }
        return navData;
    }

    render() {
        const tableHeaders = [
            { key: "clusterName", displayName: "Cluster Name" },
            { key: "numOfMachines", displayName: "Number of Machines" },
            { key: "status", displayName: "Status" },
            { key: "actions", displayName: "" }
        ];
        const tableRows = _(this.props.clusters).map((cluster: ICluster) => {
            return {
                clusterName: cluster.clusterName,
                numOfMachines: cluster.machines.length,
                status: "active",
                actions:
                <Photon.ToolBar>
                    <Photon.ButtonGroup>
                        <Photon.Button icon="cog" eventKey={cluster.clusterId} onClick={this.onClusterConfig}/>
                        <Photon.Button icon="download" eventKey={cluster.clusterId} onClick={this.onClusterGenVagFile} />
                        <Photon.Button icon="cancel" eventKey={cluster.clusterId} onClick={this.onClusterDelete} />
                    </Photon.ButtonGroup>
                </Photon.ToolBar>
            }
        }).value();

        return (
            <Photon.Table tableHeaders={tableHeaders} tableRows={tableRows} />
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {

    return {
        clusters: state.clusters["present"]
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    const {
        removeCluster,
        genVagrantFile
    } = actions.clusterActions;
    const {
        save
    } = actions.pageActions;
    
    return {
        removeCluster: (clusterId:string) => {
            dispatch(removeCluster(clusterId));
        },
        save() {
            dispatch(save(PageHelper.createSaveAppStateRequest()));
        },
        genVagrantFile: (clusterId:string) => {
            dispatch(genVagrantFile(clusterId));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage);