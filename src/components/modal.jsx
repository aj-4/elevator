import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--blend-mode", `darken`);
        document.documentElement.style.setProperty("--screen-color", 'black');
    }

    render(){
        return (
            <div>
                
            </div>
        );
    }
}

export default Modal;