import '../static/themes/photon/app.scss';

import * as Photon from './photon_components';
import * as React from 'react';

import { ComponentDecorator, Dispatch, connect } from 'react-redux';
import { INavEnabledProps, INavItemModel, IToggleSideMenu } from './types';
import { goBack, goForward, push } from 'react-router-redux';

import { CALL_SERVICE } from './services/ServicesMiddleware';
import HeaderNav from './components/HeaderNav/HeaderNav';
import { IAppState } from './types';
import SideNav from './components/SideNav/SideNav';
import { actions } from './actions';

import SplitPane = require('react-split-pane');

interface IMainPageProps extends INavEnabledProps {
    location: History.Location;
    save: (request: any) => void;
}

class MainPage extends React.Component<IMainPageProps, void> {

    constructor(props: IMainPageProps) {
        super(props);
        this.showSideMenu = this.showSideMenu.bind(this);
    }

    render() {
        return (
            <Photon.Window>
                <Photon.Header>
                    <HeaderNav
                        save={this.props.save}
                        navigate={this.props.navigate}
                        goBack={this.props.goBack}
                        goForward={this.props.goForward}
                        location={this.props.location} />
                    <Photon.ToolBar className="pull-right">
                        <Photon.ButtonGroup>
                            <Photon.Button icon="home" isActive={true} onClick={() => {
                                this.props.navigate("/confCluster");
                            } } />
                            <Photon.Button icon="folder" onClick={() => alert('clicked folder')} />
                        </Photon.ButtonGroup>
                        <Photon.Button icon="megaphone" alignment="right" isDropDown={true} />
                    </Photon.ToolBar>
                </Photon.Header>
                <Photon.WindowContent>
                    {this.renderContent()}
                </Photon.WindowContent>
                <Photon.Footer title="Opsie Inc." titleSize="hg">
                </Photon.Footer>
            </Photon.Window>
        )
    }

    renderContent() {
        const paneProps = {
            pane1Style: {
                backgroundColor: "#f5f5f4"
            }
        };
        if (this.showSideMenu()) {
            return (
                <Photon.PaneGroup>
                    <SplitPane {...paneProps} split="vertical" defaultSize="20%" minSize={100}>
                        <div>
                            {this.renderSideNav()}
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </SplitPane>
                </Photon.PaneGroup>
            );
        } else {
            return(
                <Photon.PaneGroup>
                    {this.props.children}
                </Photon.PaneGroup>
            );
        }

    }

    renderSideNav() {
        const navData: _.Dictionary<INavItemModel[]> = {
            "Configure VM": [{
                path: "confos",
                icon: "drive",
                label: "OS"
            }, {
                path: "confProv",
                icon: "picasa",
                label: "Provider"
            }],
            "Configure Provisioner": [{
                path: "confAnsi",
                label: "Ansible"
            }, {
                path: "confShell",
                label: "Shell"
            }],
            "Configure Network": [{
                path: "confNetw",
                icon: "cloud",
                label: "Network"
            }, {
                path: "confSync",
                icon: "folder",
                label: "Sync Folder"
            }],
            "Configure Plugins": [{
                path: "confPlug",
                icon: "record",
                iconStyle: {
                    color: "#34c84a"
                },
                label: "Network"
            }, {
                path: "confSync",
                icon: "folder",
                label: "Sync Folder"
            }]
        }
        return <SideNav navData={navData}
            navigate={this.props.navigate}
            goBack={this.props.goBack}
            goForward={this.props.goForward}
            routing={this.props.location} />
    }

    private showSideMenu(): boolean {
        const {
            location
        } = this.props;
        if (location.pathname === '/') {
            //landing page, do not mount side menu
            return false;
        }

        return true;
    }
}

const mapStateToProps = (state: IAppState, ownerProps: IMainPageProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    const {
        pageActions
    } = actions;
    return {
        navigate: (path: string) => {
            dispatch(push(path));
        },
        goBack: () => {
            dispatch(goBack());
        },
        goForward: () => {
            dispatch(goForward());
        },
        save: (request: any) => {
            dispatch(pageActions.save(request));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MainPage);