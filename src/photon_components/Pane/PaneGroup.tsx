import * as React from 'react';
interface IPaneGroup extends React.Props<any>{
}

const PaneGroup:React.StatelessComponent<IPaneGroup> = (props:IPaneGroup) => {
    return (
        <div className="pane-group">
                {props.children}
        </div>
    );
}
export default PaneGroup;