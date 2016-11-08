import * as React from 'react';
interface IFooterProps extends React.Props<any> {
    title?: string;
    titleSize?: string;
}
const Footer: React.StatelessComponent<IFooterProps> = (props: IFooterProps) => {
    return (
        <div className="toolbar toolbar-footer">
            {renderTitle(props)}
            {props.children}
        </div>
    );
}

function renderTitle(props:IFooterProps):React.ReactNode {
    const {
        title = "",
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
export default Footer;