import * as React from 'react';
import SplitPane = require('react-split-pane');     
interface IPaneGroup extends React.Props<any>{
}

const PaneGroup:React.StatelessComponent<IPaneGroup> = (props:IPaneGroup) => {
    return (
        <div className="pane-group">
           <SplitPane split="vertical" defaultSize={100} minSize={50}>
                {props.children}
           </SplitPane> 
        </div>
    );
}
export default PaneGroup;