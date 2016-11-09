import * as Formsy from 'formsy-react';
import * as React from 'react';

import {
    Col,
    Row,
} from 'react-bootstrap';
import {
    Input,
    Select,
} from 'formsy-react-components';

interface IConfigOSPageProps extends React.Props<any> {
}

class ConfigOSPage extends React.Component<IConfigOSPageProps, void> {
    constructor(props: IConfigOSPageProps) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col xs={12}>
                        {this.renderForm()}
                    </Col>
                </Row>
            </div>
        );
    }

    renderForm() {
        return (
            <Formsy.Form ref="form">
                <div style={{width: "250px"}}>
                    <Input
                        name="test"
                        type="email"
                        label="Email Address"
                        layout="vertical"
                        value="" />
                </div>
                <div style={{width: "200px"}}>
                    <Input
                        name="test2"
                        type="email"
                        label="Email Address"
                        layout="vertical"
                        value="" />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-form btn-default">Cancel</button>
                    <button type="submit" className="btn btn-form btn-primary">OK</button>
                </div>
            </Formsy.Form>
        );
    }
}

export default ConfigOSPage;