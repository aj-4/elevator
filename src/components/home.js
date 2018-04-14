import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './menu';

import {ActivateMenu} from '../actions/index'

class Home extends Component {
    componentDidMount() {
        document.documentElement.style.setProperty("--bg-img", `url('../src/img/box.jpg')`);
        document.documentElement.style.setProperty("--screen-color", `none')`);
    }

    componentDidUpdate() {
        this.updateBgColor();
    }

    updateBgColor() {
        if (this.props.infoText.st !== 'welcome') {
            let { infoText } = this.props;
            
            let color;
            if (infoText[0] === 'G') {
                color = 'cornflowerblue';
            } else if (infoText[0] === 'S') {
                color = 'seagreen';
            } else if (infoText[0] === 'R') {
                color = 'orangered';
            }
            document.documentElement.style.setProperty("--blend-mode", `screen`);
            document.documentElement.style.setProperty("--screen-color", color);
            document.documentElement.style.setProperty("--hover-color", color);            
        }
    }

    render() {
        return (
            <div className="home-screen">            
                <div className="welcometext">
                    <h1 className="welc-txt">
                        Welcome to <span className="fancyfont">Elevator</span>, {this.props.loggedInUser.name}
                    </h1>
                        {this.props.infoText}
                    {
                        !this.props.menu &&
                        <button
                            onClick={this.props.ActivateMenu}
                            className="btn btn-secondary try-btn">Get Started</button>
                    }
                    
                </div>

                {
                    this.props.menu &&
                    <Menu />
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        loggedInUser: state.loggedInUser,
        menu: state.menu,
        infoText: state.infoText.txt
    };
}

export default connect(mapStateToProps, { ActivateMenu })(Home);