import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.loggedInUser}'s Profile</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { loggedInUser: state.loggedInUser };
}

export default connect(mapStateToProps)(Profile);