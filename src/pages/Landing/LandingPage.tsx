import * as Photon from '../../photon_components';
import * as React from 'react';

import {ComponentDecorator, Dispatch, connect} from 'react-redux';

import {INavEnabledProps} from '../../types';
import {push} from 'react-router-redux';

import SplitPane = require('react-split-pane');
interface ILandingPageProps extends React.Props<any> {
    navigate:(path:string) => void;
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
        const paneProps = {
            pane1Style: {
                backgroundColor: "#f5f5f4"
            }
        };

        return (
            <Photon.PaneGroup>
                <SplitPane {...paneProps} split="vertical" defaultSize="20%" minSize={100}>
                    <Photon.Pane>
                        <Photon.Nav title="Configure VM">
                            <Photon.NavItem icon="drive" label="OS" eventKey="app/configos" onClick={this.onNavItemClick} />
                            <Photon.NavItem icon="picasa" label="Provider" eventKey="pv" onClick={this.onNavItemClick} />
                        </Photon.Nav>
                        <Photon.Nav title="Configure Provisioner">
                            <Photon.NavItem icon="" label="Ansible" eventKey="provision.ansible" />
                        </Photon.Nav>
                        <Photon.Nav title="Configure Network">
                            <Photon.NavItem icon="cloud" label="Network" eventKey="network" />
                            <Photon.NavItem icon="folder" label="Sync Folder" eventKey="folder" />
                        </Photon.Nav>
                        <Photon.Nav title="Configure Plugins ">
                            <Photon.NavItem icon="record" iconStyle={{color:'#34c84a'}} label="Plugins" eventKey="network" />
                        </Photon.Nav>
                    </Photon.Pane>
                    <Photon.Pane>
                        {this.props.children}
                    </Photon.Pane>
                </SplitPane>
            </Photon.PaneGroup>
        );
    }
}

const mapStateToProps = (state:any, ownProps: any) => {
    return {
    };
}

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return {
        navigate:(path:string) => {
            dispatch(push(path));
        }
    }
}

export default connect(
        null,
        mapDispatchToProps
)(LandingPage);