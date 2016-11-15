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
import { push } from 'react-router-redux';

import SplitPane = require('react-split-pane');


interface ILandingPageProps extends React.Props<any> {
    navigate: (path: string) => void;
    clusters: Array<ICluster>;
}

class LandingPage extends AbstractPage<ILandingPageProps> {

    constructor(props: ILandingPageProps) {
        super(props);
        this.getNavData = this.getNavData.bind(this);
    }

    onNavItemClick(eventKey: string) {
        console.log("here in landing page event key = " + eventKey);
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
                        <Photon.Button icon="cog" />
                        <Photon.Button icon="cancel" />
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
    return {
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage);