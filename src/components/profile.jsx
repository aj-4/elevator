import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from './stars';

class Profile extends Component {
    render() {
        return (
            <div className="profile-box">
                <h1 className="profile-title"><div className="fancyfont">{this.props.loggedInUser.name}</div> <div>{this.props.loggedInUser.job}</div></h1>
                <Stars count="4.5"/>
                <img className="profile-avatar" src="./src/img/erlich.jpg" alt="Profile Picture"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { loggedInUser: state.loggedInUser };
}

export default connect(mapStateToProps)(Profile);