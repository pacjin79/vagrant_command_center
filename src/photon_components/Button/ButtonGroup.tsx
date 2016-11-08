import * as React from 'react';
interface IButtonGroupProps extends React.Props<any>{
}
const ButtonGroup:React.StatelessComponent<IButtonGroupProps> = (props:IButtonGroupProps) => {
    return (
        <div className="btn-group">
            {props.children}
        </div>
    );
}
export default ButtonGroup;