import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserReadyAction, ActionAddRoom } from '../actions'
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

    ready() {
        this.props.UserReadyAction();
        this.props.ActionAddRoom(({ name: this.props.loggedInUser }));        
    }

    renderButton() {
        return (
            <div className="pitch-box">
                <h1>Ready to Pitch?</h1>
                <button onClick={this.ready.bind(this)} className="btn btn-primary">Yes</button>
                <Link to="/home" ><button className="btn btn-warn">No</button> </Link>
            </div>
        );
    }

    render() {
        if (!this.props.isReady) {
            return this.renderButton();
        } 
        return (
            this.props.room && this.props.room.name
            ? <div>
                <div className="pitch-box">
                <VideoPlayer roomid={this.props.room.roomId} />
                <div>Matched with</div>
                <h2><span className="fancyfont">{this.props.room.name}</span>, {this.props.room.job}</h2>
                </div>
            </div>
            : <div className="pitch-box">
                <h1>Finding you a match...</h1>    
                <div className="loader"></div>       
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { isReady: state.isReady,
            loggedInUser: state.loggedInUser,
            room: state.room
        };
}

export default connect(mapStateToProps, { UserReadyAction, ActionAddRoom })(Pitch);