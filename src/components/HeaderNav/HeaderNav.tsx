import * as Photon from '../../photon_components';
import * as React from 'react';
import * as _ from 'lodash';

import { INavEnabledProps, INavItemModel, INavModel } from '../../types';

import {ServiceConstants} from '../../constants';

interface IHeaderNavProps extends INavModel {
    location: History.Location;
    save: (request: any) => void;
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
            [ServiceConstants.CALL_SERVICE]: "save"
        })
    }

    render() {
        const {
            navData
        } = this.props;
        return (
            <Photon.ToolBar className="pull-left">
                <Photon.ButtonGroup>
                    <Photon.Button eventKey={1} icon="left-open-big" onClick={this.handleNavigation} />
                    <Photon.Button eventKey={2} icon="right-open-big" onClick={this.handleNavigation} />
                </Photon.ButtonGroup>
                {this.renderNavData(navData)}
            </Photon.ToolBar>

        );
    }

    renderNavData(navData:_.Dictionary<INavItemModel[]>) {
        return _(navData).map((navItems: INavItemModel[], key:string) => {
            const navItemUis = _(navItems).map((navItem: INavItemModel, index: number) => {
                const {
                    onClick = (eventKey:any) => {
                        this.props.navigate(eventKey);
                    }
                } = navItem;
                return (
                    <Photon.Button key={`header-navitem-${key}-${index}`}
                        eventKey={navItem.path}
                        icon={navItem.icon}
                        onClick={onClick} />
                );

            }).value();
            return (
                <Photon.ButtonGroup key={`header-navgrp-${key}`}>
                    {navItemUis}
                </Photon.ButtonGroup>
            )
        }).value();
    }
}

export default HeaderNav;