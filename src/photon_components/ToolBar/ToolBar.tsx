import * as React from 'react';
interface IToolbarProps extends React.Props<any>{
    className?: string;
}
const ToolBar:React.StatelessComponent<IToolbarProps> = (props:IToolbarProps) => {
    const {
        className = ""
    } = props;

    return (
        <div className={`toolbar-actions ${className}`}>
            {props.children}
        </div>
    );
}
export default ToolBar;