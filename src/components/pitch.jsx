import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserReadyAction } from '../actions'

class Pitch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--blend-mode", `overlay`);
        document.documentElement.style.setProperty("--screen-color", 'cornflowerblue');
        document.documentElement.style.setProperty("--bg-img", `url('../src/img/box.jpg')`);        
    }

    renderButton() {
        return (
            <div className="pitch-box">
                <h1>Ready to Pitch?</h1>
                <button onClick={this.props.UserReadyAction} className="btn btn-primary">Yes</button>
                <button className="btn btn-warn">No</button>
            </div>
        );
    }

    render() {
        if (!this.props.isReady) {
            return this.renderButton();
        }
        return (
            <div className="pitch-box">
                <h1>Finding you a match...</h1>           
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { isReady: state.isReady };
}

export default connect(mapStateToProps, { UserReadyAction })(Pitch);