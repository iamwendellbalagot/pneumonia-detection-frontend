import React from 'react';
import classes from './AboutContents.css';
import csr from '../../../assets/csr.png';
import cm from '../../../assets/cm.png';
import training from '../../../assets/training.png';
import march from '../../../assets/model arch.png';
import Nothingness from '../../../components/Nothingness/Nothingness';

const AboutContents = () => {
    return (
        <React.Fragment>
            <div className = {classes.AboutContents}>
                <h2>ABOUT AI</h2>
                <div>
                    <h3>Convolutional Neural Network Architecture.</h3>
                    <img className = {classes.march} src={march} alt='img' />
                </div>
                <div>
                    <h3>Training Performance</h3>
                    <img className = {classes.training} src={training} alt='img' />
                </div>
                <div>
                    <h3>Classification Report on Test images</h3>
                    <img className = {classes.images} src={cm} alt='img' />
                    <img className = {classes.images} src={csr} alt='img' />
                </div>
            </div>
            <div className={classes.hidden}>
                <Nothingness />
            </div>
        </React.Fragment>
    );
};

export default AboutContents;