import * as React from 'react';
import SplitPane = require('react-split-pane');     
interface ISplitPaneGroup extends React.Props<any>{
}

const SplitPaneGroup:React.StatelessComponent<ISplitPaneGroup> = (props:ISplitPaneGroup) => {
    return (
        <div className="pane-group">
           <SplitPane split="vertical" defaultSize="20%" minSize={100}>
                {props.children}
           </SplitPane> 
        </div>
    );
}
export default SplitPaneGroup;