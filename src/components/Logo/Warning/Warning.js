import React from 'react';
import classes from './Warning.css';
import warning from '../../../assets/warning-icon.png';

const Warning = () => {
    return (
        <div className = {classes.Warning}>
            <img src = {warning} alt='warning' />
        </div>
    );
};

export default Warning;