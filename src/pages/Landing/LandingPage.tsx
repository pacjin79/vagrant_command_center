import * as Photon from '../../photon_components';
import * as React from 'react';

import { default as AbstractPage, IAbstractPageProps } from '../AbstractPage';
import {
    Col,
    Row,
} from 'react-bootstrap';
import { ComponentDecorator, Dispatch, connect } from 'react-redux';
import { INavEnabledProps, INavItemModel } from '../../types';

import Card from '../../components/Card/Card';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import { IMainPageConfig } from '../../Main';
import { push } from 'react-router-redux';

import SplitPane = require('react-split-pane');


interface ILandingPageProps extends React.Props<any> {
    navigate: (path: string) => void;
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
                    path: "/confos",
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
        return (
            <table className="table-striped">
                <thead>
                    <tr>
                        <th>Cluster</th>
                        <th>Number of machines</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Photon.Icon icon="cloud" label="Docker Storm" />
                        </td>
                        <td>3</td>
                        <td>Up</td>
                        <td>
                            <Photon.ToolBar>
                                <Photon.ButtonGroup>
                                    <Photon.Button icon="cog" />
                                    <Photon.Button icon="cancel" />
                                </Photon.ButtonGroup>
                            </Photon.ToolBar>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Photon.Icon icon="cog" label="Kafka Cluster" />
                        </td>
                        <td>3</td>
                        <td>Halted</td>
                        <td>
                            <Photon.ToolBar>
                                <Photon.ButtonGroup>
                                    <Photon.Button icon="cog" />
                                    <Photon.Button icon="cancel" />
                                </Photon.ButtonGroup>
                            </Photon.ToolBar>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default LandingPage;