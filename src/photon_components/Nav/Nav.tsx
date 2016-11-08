import * as React from 'react';
interface INavProps extends React.Props<any>{
    title?: string;
}
const Nav:React.StatelessComponent<INavProps> = (props:INavProps) => {
    return (
        <nav className="nav-group">
            {renderNavTitle(props)}
            {props.children}
        </nav>
    );
}

function renderNavTitle(props:INavProps):React.ReactNode {
    const {
        title
    } = props;
    let navTitleUi:React.ReactNode;
    if(title){
        navTitleUi = <h5 className="nav-group-title">{title}</h5>
    }
    return navTitleUi;
}

export default Nav;