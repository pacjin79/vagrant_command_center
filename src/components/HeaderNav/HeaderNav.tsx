import * as Photon from '../../photon_components';
import * as React from 'react';

import {CALL_SERVICE} from '../../services/ServicesMiddleware';
import { INavEnabledProps } from '../../types';

interface IHeaderNavProps extends INavEnabledProps {
    location: History.Location;
    save: (request:any) => void;
}

class HeaderNav extends React.Component<IHeaderNavProps, void> {
    constructor(props: IHeaderNavProps) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNavigation(eventKey: string | number) {
        if (eventKey === 1) {
            this.props.goBack();
        } else {
            this.props.goForward();
        }
    }

    handleSave() {
        console.log("handle save props = ", this.props)
        this.props.save({
            [CALL_SERVICE]: "save"
        })
    }

    render() {
        return (
            <Photon.ToolBar className="pull-left">
                <Photon.ButtonGroup>
                    <Photon.Button eventKey={1} icon="left-open-big" onClick={this.handleNavigation} />
                    <Photon.Button eventKey={2} icon="right-open-big" onClick={this.handleNavigation} />
                </Photon.ButtonGroup>
                <Photon.ButtonGroup>
                    <Photon.Button icon="floppy" onClick={this.handleSave}/>
                    <Photon.Button icon="play" />
                </Photon.ButtonGroup>
            </Photon.ToolBar>

        );
    }
}

export default HeaderNav;