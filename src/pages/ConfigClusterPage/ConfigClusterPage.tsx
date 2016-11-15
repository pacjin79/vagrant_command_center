import * as Formsy from 'formsy-react';
import * as Photon from '../../photon_components';
import * as React from 'react';

import { ACTION_CONSTANTS, actions } from '../../actions';
import {
    Col,
    Row,
} from 'react-bootstrap';
import { Dispatch, connect } from 'react-redux';

import AbstractPage from '../AbstractPage';
import { CALL_SERVICE } from '../../services/ServicesMiddleware';
import { ICluster } from '../../types';
import { IMainPageConfig } from '../../Main';
import { IServiceRequest } from '../../types';
import {
    SERVICES,
} from '../../services';

interface IClusterPageProps extends React.Props<any> {
    createCluster: (clusterData: ICluster) => void;
    navigate: (path: string) => void;
    save: () => void;
}

class ClusterPage extends AbstractPage<IClusterPageProps> {
    constructor(props: IClusterPageProps) {
        super(props);
        this.handleCreateCluster = this.handleCreateCluster.bind(this);
    }

    handleCreateCluster() {
        const form = this.refs['form'] as Formsy.IFormsyInstance;
        const values = form.getCurrentValues();
        const {
            clusterName,
            single
        } = values;
        const clusterId = _.snakeCase(clusterName)
        const payload: ICluster = {
            clusterId: clusterId,
            clusterName: clusterName,
            machines: []
        };
        this.props.createCluster(payload);
        this.props.save();
        this.props.navigate("/");
    }

    provideConfigMain(): IMainPageConfig {
        return {
            hasSideMenu: false
        };
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm={12}>
                        <Formsy.Form ref="form">
                            <Photon.FormInput
                                name="clusterName"
                                bsSize="sm"
                                label="Cluster Name"
                                required
                                placeholder="Enter Cluster Name" />
                            <Photon.FormCheckbox
                                name="single"
                                label="yes"
                                rowLabel="Single Machine"
                                />
                            <Photon.FormActionBar>
                                <Photon.Button
                                    bsStyle="primary"
                                    onClick={this.handleCreateCluster}>
                                    Add Cluster
                                </Photon.Button>
                            </Photon.FormActionBar>
                        </Formsy.Form>
                    </Col>
                </Row>
            </div>

        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    const {
        clusterActions,
        pageActions
    } = actions;
    return {
        createCluster(clusterData: ICluster) {
            dispatch(clusterActions.createCluster(clusterData));
        },
        save() {
            const payload: any = {
                [CALL_SERVICE]: {
                    serviceId: SERVICES.appService.id,
                    operation: SERVICES.appService.operations.saveAppState
                }
            };
            dispatch(pageActions.save(payload));
        }
    };
}
export default connect(
    null,
    mapDispatchToProps)(ClusterPage);