import React from 'react';
import classes from './Xray.css';

const Xray = (props) => {
    return (
        <div className = {classes.Xray}>
            <img src = {props.baseimage} alt='xray'/>
        </div>
    );
};

export default Xray;