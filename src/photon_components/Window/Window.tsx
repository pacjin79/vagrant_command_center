import * as React from 'react';

interface IWindowProps extends React.Props<any>{
}
interface IWindowContentProps extends React.Props<any>{
}

export const Window:React.StatelessComponent<IWindowProps> = (props:IWindowProps) => {
    return (
        <div className="window">
            {props.children}
        </div>
    );
}


export const WindowContent:React.StatelessComponent<IWindowContentProps> = (props:IWindowContentProps) => {
    return (
        <div className="window-content">
            {props.children}
        </div>
    );
}