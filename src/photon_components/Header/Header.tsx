import * as React from 'react';
interface IHeaderProps extends React.Props<any>{
    title?: string;
    titleSize?: string;
}
const Header:React.StatelessComponent<IHeaderProps> = (props:IHeaderProps) => {
    return (
        <header className="toolbar toolbar-header">
            {renderTitle(props)}
            {props.children}
        </header>
    );
}

function renderTitle(props:IHeaderProps):React.ReactNode {
    const {
        title = undefined,
        titleSize = "md"
    } = props;
    let titleUi:React.ReactNode;
    if(props.title){
        switch(titleSize) {
            case "sm":
                titleUi = <h4 className="title">{title}</h4>;
                break;
            case "md":
                titleUi = <h3 className="title">{title}</h3>;
                break;
            case "lg":
                titleUi = <h2 className="title">{title}</h2>;
                break;                
            case "hg":
                titleUi = <h1 className="title">{title}</h1>;
                break;
        }
    }
    return titleUi;
}
export default Header;