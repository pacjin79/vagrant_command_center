import * as React from 'react';
import * as classnames from 'classnames';
interface IIconProps extends React.Props<any> {
    icon: string;
    label?: string;
}
const Icon: React.StatelessComponent<IIconProps> = (props: IIconProps) => {
    const {
        label
    } = props;
    const className = classnames({
        "icon": true,
        [`icon-${props.icon}`]: true
    });
    const labelUi = (label) ? <label style={{ display: "inline" }} className="margin-xs-left">{label}</label> : "";

    return (
        <span className={className}>
            {labelUi}
        </span>
    );
}
export default Icon;