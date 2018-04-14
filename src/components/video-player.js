import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="video-player">
                <iframe
                    src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=03b1f160-b8a9-47e7-9fab-cfb9fcdd3b3e&room=${this.props.roomId}&iframe=true`}
                    width="500px"
                    height="400px"
                    allow="microphone; camera"
                ></iframe>
            </div>
        );
    }
}

export default VideoPlayer;