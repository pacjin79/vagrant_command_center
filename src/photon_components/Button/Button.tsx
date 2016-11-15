import * as React from 'react';
import * as _ from 'lodash';
import * as classnames from 'classnames';

import Icon from '../Icon/Icon';

interface IButtonProps extends React.Props<any> {
    icon?: string;
    bsStyle?: "default" | "primary" | "positive" | "negative" | "warning";
    withText?: boolean;
    isDropDown?: boolean;
    isActive?: boolean;
    alignment?: "right" | "left";
    eventKey?: string | number;
    required?: boolean;
    onClick?: (eventKey?:string | number) => void;
}

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
    const {
        icon,
        bsStyle = "default",
        withText = false,
        isActive = false,
        alignment = "left",
        isDropDown = false,
        eventKey
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
        if(_.isFunction(props.onClick)){
            props.onClick(eventKey);
        } else if(props.onClick){
            console.warn("props.onClick is not a function");
        }
    }

    return (
        <button className={className} onClick={handleOnClick}>
            {renderIcon(icon, withText)}
            {props.children}
        </button>
    );
}



function renderIcon(icon: string, withText: boolean): React.ReactNode {
    let iconUi: React.ReactNode;
    if (!_.isUndefined(icon)) {
        const className = classnames({
            "icon": (icon !== null),
            ["icon-" + icon]: (icon !== null),
            "icon-text": withText
        })
        iconUi = <span className={className} />
    }
    return iconUi;
}

export default Button;