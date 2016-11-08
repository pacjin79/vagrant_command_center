import * as React from 'react';
interface IIconProps extends React.Props<any>{
    icon: string;
}
const Icon:React.StatelessComponent<IIconProps> = (props:IIconProps) => {
    return (
        <span className={"icon icon-"+props.icon} />
    );
}
export default Icon;