import * as React from 'react';
import * as classnames from 'classnames';
import Icon from '../Icon/Icon';

interface INavItemProps extends React.Props<any> {
    icon?: string;
    label?: string;
    eventKey?: number | string;
    onClick?: (eventKey:number|string) => void; 
}
const NavItem: React.StatelessComponent<INavItemProps> = (props: INavItemProps) => {
    const {
        icon,
        label,
        eventKey,
        onClick
    } = props;
    const getNavItemClassNameConfig = () => {
        const config = {
            "nav-group-item": true,
            "active": false
        }
        return classnames(config);
    };

    const handleOnClick = (e:React.SyntheticEvent<any>) => {
        e.preventDefault();
        onClick(eventKey);
    }

    return (
        <a href="#" className={getNavItemClassNameConfig()} onClick={handleOnClick}>
            {renderIcon(icon)}
            {label}
        </a>
    );
}

function renderIcon(icon: string): React.ReactNode {
    let iconUi: React.ReactNode;
    if (icon) {
        const getIconClassNameConfig = () => {
            const config = {
                "icon": true,
                ["icon-" + icon]: true
            }
            return classnames(config);
        };
        iconUi = <span className={getIconClassNameConfig()}></span>
    }
    return iconUi;
}
export default NavItem;