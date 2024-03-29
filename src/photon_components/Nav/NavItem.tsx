import * as React from 'react';
import * as _ from 'lodash';
import * as classnames from 'classnames';

import Icon from '../Icon/Icon';

interface INavItemProps extends React.Props<any> {
    icon?: string;
    label?: string;
    active?: boolean;
    iconStyle?: _.Dictionary<any>;
    eventKey?: number | string;
    onClick?: (eventKey:number|string) => void; 
}
const NavItem: React.StatelessComponent<INavItemProps> = (props: INavItemProps) => {
    const {
        icon,
        label,
        eventKey,
        iconStyle = {},
        active = false, 
        onClick
    } = props;

    const getNavItemClassNameConfig = (isActive:boolean) => {
        const config = {
            "nav-group-item": true,
            "active": isActive
        }
        return classnames(config);
    };

    const handleOnClick = (e:React.SyntheticEvent<any>) => {
        e.preventDefault();
        onClick(eventKey);
    }

    return (
        <a href="#" className={getNavItemClassNameConfig(active)} onClick={handleOnClick}>
            {renderIcon(icon, iconStyle)}
            {label}
        </a>
    );
}

function renderIcon(icon: string, style:_.Dictionary<any>): React.ReactNode {
    let iconUi: React.ReactNode;
    if (icon) {
        const getIconClassNameConfig = () => {
            const config = {
                "icon": true,
                ["icon-" + icon]: true
            }
            return classnames(config);
        };
        iconUi = <span style={style} className={getIconClassNameConfig()}></span>
    }
    return iconUi;
}
export default NavItem;