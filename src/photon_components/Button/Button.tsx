import * as React from 'react';
import Icon from '../Icon/Icon';
import * as classnames from 'classnames';
import * as _ from 'lodash';

interface IButtonProps extends React.Props<any> {
    icon?: string;
    bsStyle?: "default" | "primary";
    text?: string;
    isDropDown?: boolean;
    isActive?: boolean;
    alignment?: "right" | "left";
    onClick?: () => void;
}

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
    const {
        icon,
        bsStyle = "default",
        text,
        isActive = false,
        alignment = "left",
        isDropDown = false
    } = props;

    const className = classnames({
        btn: true,
        ['btn-' + bsStyle]: true,
        "btn-dropdown": isDropDown,
        "active": isActive,
        "pull-right": (alignment === "right")
    });

    const handleOnClick = (e: React.SyntheticEvent<any>) => {
        e.preventDefault();
        props.onClick();
    }

    return (
        <button className={className} onClick={handleOnClick}>
            {renderIcon(icon, text)}
            {props.children}
        </button>
    );
}



function renderIcon(icon: string, text: string): React.ReactNode {
    let iconUi: React.ReactNode;
    if (!_.isUndefined(icon)) {
        const className = classnames({
            "icon": (icon !== null),
            ["icon-" + icon]: (icon !== null),
            "icon-text": (text !== undefined && text !== null)
        })
        iconUi = <span className={className} />
    }
    return iconUi;
}

export default Button;