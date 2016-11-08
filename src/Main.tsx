import * as React from 'react';
import * as Photon from './photon_components';
import '../static/themes/photon/app.scss';

class Main extends React.Component<{}, void> {

    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <Photon.Window>
                <Photon.Header>
                    <Photon.ToolBar>
                        <Photon.ButtonGroup>
                            <Photon.Button icon="home" isActive={true} onClick={() => alert('clicked home')}/>
                            <Photon.Button icon="folder" onClick={()=> alert('clicked folder')}/>
                        </Photon.ButtonGroup>
                        <Photon.Button icon="megaphone" alignment="right" isDropDown={true}/>
                    </Photon.ToolBar>
                </Photon.Header>
                <Photon.WindowContent>
                    <div className="pane-group">
                        {this.props.children}
                    </div>
                </Photon.WindowContent>
                <Photon.Footer title="Opsie Inc." titleSize="hg">
                </Photon.Footer>
            </Photon.Window>
        )
    }
}

export default Main;