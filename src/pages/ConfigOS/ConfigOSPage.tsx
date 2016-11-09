import * as React from 'react';

interface IConfigOSPageProps extends React.Props<any>{
}

class ConfigOSPage extends React.Component<IConfigOSPageProps, void> {
    constructor(props: IConfigOSPageProps){
        super(props);
    }

    render(){
        return (
            <h1>I'm page OS</h1>
        );
    }
}

export default ConfigOSPage;