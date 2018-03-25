import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserReadyAction } from '../actions'
import { Link } from 'react-router-dom';
import VideoPlayer from './video-player';

class Pitch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--blend-mode", `overlay`);
        document.documentElement.style.setProperty("--screen-color", 'skyblue');
        document.documentElement.style.setProperty("--/bg-img", `url('../src/img/box.jpg')`);        
    }

    renderButton() {
        return (
            <div className="pitch-box">
                <h1>Ready to Pitch?</h1>
                <button onClick={this.props.UserReadyAction} className="btn btn-primary">Yes</button>
                <Link to="/home" ><button className="btn btn-warn">No</button> </Link>
            </div>
        );
    }

    render() {
        if (!this.props.isReady) {
            return this.renderButton();
        }
        return (
            <div className="pitch-box">
                <VideoPlayer />
                <h1>Finding you a match...</h1>    
                <div className="loader"></div>       
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { isReady: state.isReady };
}

export default connect(mapStateToProps, { UserReadyAction })(Pitch);