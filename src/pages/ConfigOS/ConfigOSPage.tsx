import * as Formsy from 'formsy-react';
import * as Lookups from '../../lookups';
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
                <FormSelect
                    name="os"
                    label="OS"
                    bsSize="xs"
                    allowBlanks
                    required
                    options={Lookups.OSLookup} />
                <FormSelect
                    name="boxName"
                    label="Box name"
                    allowBlanks
                    bsSize="sm"
                    required
                    options={Lookups.OSBoxLookup}
                    />
            </Formsy.Form>
        );
    }
}

export default ConfigOSPage;