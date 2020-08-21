import React from 'react';
import classes from './ValidSamples.css';
import pneu from '../../assets/pneu class.png';
import norm from '../../assets/normal class.png';

const ValidSamples = () => {
    return (
        <div className ={classes.ValidSamples}>
            <h2>SAMPLE VALID X-RAY IMAGES</h2>
            <img src= {norm} alt='img' />
            <img src= {pneu} alt='img' />
        </div>
    );
};

export default ValidSamples;