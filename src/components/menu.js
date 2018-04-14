import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuBox from './menu-box';

import { ChangeInfoText } from '../actions'

class Menu extends Component {
    hoverState(btn) {
        this.props.ChangeInfoText(btn);
    }

    render() {
        return (
            <div className="sq-menu">
                <MenuBox act={() => this.hoverState('pitch')}
                    id="pitch" icon="ion-mic-c" text="Pitch" />
                <MenuBox act={() => this.hoverState('profile')}
                    id="profile" icon="ion-android-person" text="Profile" />
                <MenuBox act={() => this.hoverState('info')}
                    id="info" icon="ion-lightbulb" text="Info" />
            </div> 
        );
    }
}

export default connect(null, { ChangeInfoText })(Menu);