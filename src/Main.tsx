import '../static/themes/photon/app.scss';

import * as Photon from './photon_components';
import * as React from 'react';

import { ComponentDecorator, Dispatch, connect } from 'react-redux';
import { IAppState, INavModel } from './types';
import { INavEnabledProps, INavItemModel } from './types';
import { goBack, goForward, push } from 'react-router-redux';

import AbstractPage from './pages/AbstractPage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import { ServiceConstants } from './constants';
import SideNav from './components/SideNav/SideNav';
import { actions } from './actions';

import SplitPane = require('react-split-pane');

interface IMainPageProps extends INavEnabledProps {
    location: History.Location;
    save: (request: any) => void;
}

export interface IMainPageConfig {
    hasSideMenu: boolean;
    customHeaderNavdata?: _.Dictionary<INavItemModel[]>;
}

class MainPage extends React.Component<IMainPageProps, IMainPageConfig> {

    constructor(props: IMainPageProps) {
        super(props);
        this.state = {
            hasSideMenu: true
        }
        this.showSideMenu = this.showSideMenu.bind(this);
        this.configMain = this.configMain.bind(this);
    }

    public configMain(config: IMainPageConfig) {
        this.setState({
            hasSideMenu: config.hasSideMenu,
            customHeaderNavdata: config.customHeaderNavdata    
        });
    }

    render() {
        return (
            <Photon.Window>
                <Photon.Header>
                    {this.renderHeadNav()}
                </Photon.Header>
                <Photon.WindowContent>
                    {this.renderContent()}
                </Photon.WindowContent>
                <Photon.Footer title="Opsie Inc." titleSize="hg">
                </Photon.Footer>
            </Photon.Window>
        )
    }

    renderHeadNav() {
        const {
            navigate,
            goBack,
            goForward,
            save,
            location
        } = this.props;
        const {
            customHeaderNavdata = {
                btn1: [{
                    path: "/",
                    icon: "home"
                }]
            }
        } = this.state;
        const HeaderNavUi =
            <HeaderNav
                navData={customHeaderNavdata}
                navigate={navigate}
                goForward={goForward}
                goBack={goBack}
                save={save}
                location={location} />;

        return HeaderNavUi;

    }

    renderContent() {
        const paneProps = {
            pane1Style: {
                backgroundColor: "#f5f5f4"
            }
        };
        const {
            children,
            navigate,
            goBack,
            goForward
        } = this.props;
        const child = React.Children.only(children);
        const wrappedChild = React.cloneElement(child, {
            navigate: navigate,
            goBack: goBack,
            goForward: goForward,
            configMain: this.configMain
        });
        if (this.showSideMenu()) {
            return (
                <Photon.PaneGroup>
                    <SplitPane {...paneProps} split="vertical" defaultSize="20%" minSize={100}>
                        <div>
                            {this.renderSideNav()}
                        </div>
                        <div>
                            {wrappedChild}
                        </div>
                    </SplitPane>
                </Photon.PaneGroup>
            );
        } else {
            return (
                <Photon.PaneGroup>
                    {wrappedChild}
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
            hasSideMenu = true
        } = this.state;
        return hasSideMenu;
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