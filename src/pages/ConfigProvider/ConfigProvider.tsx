import * as React from 'react';

interface IConfigProviderPageProps extends React.Props<any>{
}

class ConfigProviderPage extends React.Component<IConfigProviderPageProps, void> {
    constructor(props: IConfigProviderPageProps){
        super(props);
    }

    render(){
        return (
            <h1>I'm Provider</h1>
        );
    }
}

export default ConfigProviderPage;