import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionAddRoom, ActionPopRoom } from '../actions';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.room = 0;
    }

    componentDidMount() {
        if (this.props.rooms && this.props.rooms.length) {
            this.room = this.props.rooms[0];
            ActionPopRoom();
        } else {
            this.room = 1;
            ActionAddRoom(1);
        }
    }
    
    render() {
        return (
            <div className="video-player">
                <iframe
                    src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=03b1f160-b8a9-47e7-9fab-cfb9fcdd3b3e&room=${this.room}&iframe=true`}
                    width="500px"
                    height="400px"
                    allow="microphone; camera"
                ></iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {rooms: state.rooms};
}

export default connect(mapStateToProps, { ActionAddRoom, ActionPopRoom })(VideoPlayer);