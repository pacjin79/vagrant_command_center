import './static/card.scss';

import * as React from 'react';

import {
    Col,
    Panel,
    Row,
} from 'react-bootstrap';

import {
    Link,
} from 'react-router';

interface ICardProps extends React.Props<any> {
    type?: "alert" | "default";
    linkto?: string;
    icon?: string;
    bsStyle?: "primary" | "default" | "info" | "success" | "alert"
}

const Card: React.StatelessComponent<ICardProps> = (props: ICardProps) => {
    const {
        type = "default"
    } = props;

    if(type === "alert") {
        return (
            <div>
                {renderTypeAlert(props)}
            </div>
        );
    }

    return (
        <div>
            {renderTypeDefault(props)}
        </div>
    )

}

function renderTypeAlert(props: ICardProps): React.ReactNode {
    const {
        linkto,
        icon = "user",
        bsStyle = "default"
    } = props;

    const headerUi =
        <Row>
            <Col xs={3}>
                <i className={`fa fa-${icon} fa-5x`} />
            </Col>
            <Col xs={9} className="text-right">
                <div>Comments</div>
            </Col>
        </Row>;

    const footerUi =
        <Link to={linkto}>
            <span className="pull-left">View Details</span>
            <span className="pull-right">
                <i className="fa fa-arrow-circle-right" />
            </span>
            <div className="clearfix"></div>
        </Link>;

    return (
        <Panel bsStyle={bsStyle}
            header={headerUi}
            footer={footerUi} />
    );
}

function renderTypeDefault(props: ICardProps) {
    return (
        <h1>I'm default</h1>
    )
}
export default Card;