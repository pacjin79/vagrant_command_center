import * as Formsy from 'formsy-react';
import * as React from 'react';

import {
    Col,
    Row,
} from 'react-bootstrap';
import {
    FormActionBar,
    FormInput,
    FormSelect,
} from '../../photon_components';
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
        const options = [
            { label: "", value: "" },
            { label: "Debien Linux", value: "dbl" }
        ];
        const versionOptions = [
            { label: "", value: ""},
            { label: "1.0", value: "1.0"}
        ]
        return (
            <Formsy.Form ref="form">
                <FormSelect
                    name="os"
                    label="OS"
                    bsSize="lg"
                    options={options} />
                <FormSelect
                    name="version"
                    label="Version"
                    bsSize="sm"
                    options={versionOptions} />
            </Formsy.Form>
        );
    }
}

export default ConfigOSPage;