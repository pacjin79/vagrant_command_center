import * as React from 'react';
import * as classnames from 'classnames';

interface IPaneProps extends React.Props<any> {
    type?: "sidebar" | "default"
}

const Pane: React.StatelessComponent<IPaneProps> = (props: IPaneProps) => {
    const getClassnameConfig = () => {
        const {
            type = "default"
        } = props;
        let config = {
            pane: true,
            "pane-sm": false,
            "pane-mini": false,
            sidebar: false
        };
        //configure for sidebar
        if(type === "sidebar"){
            config.pane = false;
            config["pane-sm"] = true; 
            config.sidebar = true;
        }
        return classnames(config);
    }

    const className = getClassnameConfig();    

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}
export default Pane;