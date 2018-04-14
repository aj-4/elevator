import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className="info-box">
                <div className="img-container">
                    <img src="./src/img/updown.gif" className="info-gif" />
                    <h1 className="info-title"><span className="fancyfont">Elevator</span></h1>
                </div>
                <div className="info-sub">
                    <p>
                        When you live in San Francisco, whether you are selling a product or yourself, your pitch has to be on point.
                    </p>
                    <p>
                        When first impressions are this important, you can't risk giving a bad pitch.
                    </p>
                    <p>
                        That's why we created Elevator - practice your pitch and get honest feedback - then watch yourself improve.
                    </p>
                </div>
            </div>
        );
    }
}

export default Info;