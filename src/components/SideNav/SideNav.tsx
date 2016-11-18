import * as Photon from '../../photon_components';
import * as React from 'react';
import * as History from 'history';

import { INavItemModel, INavModel } from '../../types';

interface ISideNavProps extends INavModel {
    routing: History.Location;
}

class SideNav extends React.Component<ISideNavProps, void> {
    constructor(props: ISideNavProps) {
        super(props);
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(eventKey: string) {
        const {
            navigate
        } = this.props;
        if (navigate) {
            this.props.navigate(eventKey);
        } else {
            console.warn("SideNav, no navigate function detected in props");
        }
    }

    render() {
        return (
            <Photon.Pane>
                {this.renderNavItems()}
            </Photon.Pane>
        );
    }

    renderNavItems() {
        const {
            navData,
            routing
        } = this.props;

        return _(navData).map((navItems: INavItemModel[], categoryName: string) => {
            const navItemsUi: React.ReactNode[] = _(navItems).map((navItem: INavItemModel, index:number) => {
                let isActive = false;
                const routingPath = (routing.pathname.indexOf('/') !== -1) ? routing.pathname.replace('/', '') : routing.pathname;
                if(navItem.path === routingPath){
                    isActive = true;
                }
                return (
                    <Photon.NavItem key={`${_.camelCase(categoryName)} - ${index}`} icon={navItem.icon}
                        iconStyle={navItem.iconStyle}
                        eventKey={navItem.path}
                        onClick={this.onNavItemClick}
                        active={isActive}
                        label={navItem.label} />
                );
            }).value();
            return (
                <Photon.Nav key={_.camelCase(categoryName)} title={categoryName}>
                    {navItemsUi}
                </Photon.Nav>
            )
        }).value();
    }
}

export default SideNav;