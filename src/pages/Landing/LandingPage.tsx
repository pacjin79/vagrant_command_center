import * as React from 'react';
import * as Photon from '../../photon_components';

interface ILandingPageProps extends React.Props<any>{
}

class LandingPage extends React.Component<ILandingPageProps, void> {
    constructor(props: ILandingPageProps){
        super(props);
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(eventKey:number){
        alert("navItem clicked event key = "+eventKey);
    }

    render(){
        return (
            <Photon.PaneGroup>
                <Photon.Pane type="sidebar">
                    <Photon.Nav title="Favorites">
                        <Photon.NavItem icon="home" label="home" eventKey={1} onClick={this.onNavItemClick}/>
                        <Photon.NavItem icon="folder" label="workspace" eventKey={2} onClick={this.onNavItemClick}/>
                    </Photon.Nav>
                </Photon.Pane>
                <Photon.Pane>
                    <h3>pane 2</h3>
                </Photon.Pane>
            </Photon.PaneGroup>
        );
    }
}

export default LandingPage;