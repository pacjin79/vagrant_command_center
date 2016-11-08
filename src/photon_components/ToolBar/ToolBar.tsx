import * as React from 'react';
interface IToolbarProps extends React.Props<any>{
}
const ToolBar:React.StatelessComponent<IToolbarProps> = (props:IToolbarProps) => {
    return (
        <div className="toolbar-actions">
            {props.children}
        </div>
    );
}
export default ToolBar;