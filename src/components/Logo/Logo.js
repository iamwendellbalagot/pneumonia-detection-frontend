import React from 'react';
import classes from './Logo.css';
import xray from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src={xray} alt='xray' />
        </div>
    );
};

export default Logo;