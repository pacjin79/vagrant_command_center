import * as Formsy from 'formsy-react';
import * as Lookups from '../../lookups';
import * as Photon from '../../photon_components';
import * as React from 'react';

import {
    Col,
    Row,
} from 'react-bootstrap';

interface IConfigProviderPageProps extends React.Props<any>{
}

class ConfigProviderPage extends React.Component<IConfigProviderPageProps, void> {
    constructor(props: IConfigProviderPageProps){
        super(props);
    }

    render(){
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
                <Photon.FormSelect
                    name="vmProvider"
                    label="Vm Provider"
                    bsSize="xs"
                    allowBlanks
                    required
                    options={Lookups.vmProviders} />
            </Formsy.Form>
        );
    }
}

export default ConfigProviderPage;