import '../static/themes/base/base.less';
import '../static/themes/photon/app.scss';

import * as Photon from './photon_components';
import * as React from 'react';

import {ComponentDecorator, Dispatch, connect} from 'react-redux';
import { INavEnabledProps, INavItemModel } from './types';

import SideNav from './components/SideNav/SideNav';
import {push} from 'react-router-redux';

import SplitPane = require('react-split-pane');

interface IMainPageProps extends INavEnabledProps {
    location: History.Location;
}   

class MainPage extends React.Component<IMainPageProps, void> {

    constructor(props: IMainPageProps) {
        super(props);
    }

    render() {
        return (
            <Photon.Window>
                <Photon.Header>
                    <Photon.ToolBar>
                        <Photon.ButtonGroup>
                            <Photon.Button icon="home" isActive={true} onClick={() => alert('clicked home')} />
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
        )
    }

    renderSideNav() {
        const navData:_.Dictionary<INavItemModel[]> = {
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
        return <SideNav navData={navData} navigate={this.props.navigate} routing={this.props.location}/>
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
)(MainPage);