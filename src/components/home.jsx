import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar';

class Home extends Component {
    componentDidMount() {
        console.log('running');
        document.documentElement.style.setProperty("--bg-img", `url('../src/img/box.jpg')`);
    }

    render() {
        return (
            <div className="home-screen">
                <div className="welcometext">
                    <h1>
                        Welcome to <span className="fancyfont">Elevator</span>, {this.props.loggedInUser.name}
                    </h1>
                    Here you can practice your pitch, whether it's for your start-up, yourself, or for fun - 
                    get feedback with a partner and watch yourself improve over time
                    <button className="btn btn-primary try-btn">Get Started</button>
                </div>

                <div className="sq-menu">
                    <div className="menubox">Pitch Now</div>
                    <div className="menubox">Profile Stats</div>
                    <div className="menubox">Info</div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { loggedInUser: state.loggedInUser };
}

export default connect(mapStateToProps)(Home);