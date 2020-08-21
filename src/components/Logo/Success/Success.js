import React from 'react';
import classes from './Success.css';
import success from '../../../assets/successful-icon.jpg';

const Success = () => {
    return (
        <div className = {classes.Success}>
            <img src={success} alt ='icon'/>
        </div>
    );
};

export default Success;