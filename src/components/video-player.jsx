import React, { Component } from 'react';

class VideoPlayer extends Component {
    render() {
        return (
            <div className="video-player">
                <iframe
                    src="https://tokbox.com/embed/embed/ot-embed.js?embedId=ef3741e9-f25c-456c-82d5-30ed0c10a19b&room=DEFAULT_ROOM&iframe=true"
                    width="800px"
                    height="640px"
                    allow="microphone; camera"
                ></iframe>
            </div>
        );
    }
}

export default VideoPlayer;