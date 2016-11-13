import * as Photon from '../../photon_components';
import * as React from 'react';

import {
    Col,
    Row,
} from 'react-bootstrap';
import { ComponentDecorator, Dispatch, connect } from 'react-redux';
import { INavEnabledProps, IToggleSideMenu } from '../../types';

import Card from '../../components/Card/Card';
import { push } from 'react-router-redux';

import SplitPane = require('react-split-pane');

interface ILandingPageProps extends React.Props<any> {
    navigate: (path: string) => void;
}

class LandingPage extends React.Component<ILandingPageProps, void> {
    constructor(props: ILandingPageProps) {
        super(props);
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(eventKey: string) {
        this.props.navigate(eventKey);
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
                            <Photon.Icon icon="cloud" label="Docker Storm"/>
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
                            <Photon.Icon icon="cog" label="Kafka Cluster"/>
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

const mapStateToProps = (state: any, ownProps: any) => {
    return {
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        navigate: (path: string) => {
            dispatch(push(path));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LandingPage);