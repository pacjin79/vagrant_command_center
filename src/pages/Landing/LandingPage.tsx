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

class LandingPage extends React.Component<ILandingPageProps, void> implements IToggleSideMenu {
    constructor(props: ILandingPageProps) {
        super(props);
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(eventKey: string) {
        this.props.navigate(eventKey);
    }

    enableSideMenu() {
        return false;
    }

    render() {
        const paneProps = {
            pane1Style: {
                backgroundColor: "#f5f5f4"
            }
        };

        return (
            <div className="container">
                <Col sm={12}>
                    <Row>
                        <Col sm={6}>
                            <Card
                                icon="cloud"
                                type="alert"
                                linkto="/confos">
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card
                                icon="server"
                                type="alert"
                                linkto="/confProv">
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
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