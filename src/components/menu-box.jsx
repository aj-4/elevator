import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({id, icon, text, act}) => {
    return (
        <div>
            <Link to={id}>
            <div 
            onMouseEnter={act}
            className={`menubox ${id}`}>
            <i className={icon}></i>
            {text}</div>    
            </Link>        
        </div>
    );
}