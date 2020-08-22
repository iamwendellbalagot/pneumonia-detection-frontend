import React from 'react';
import classes from './Nothingness.css';

const Nothingness = (props) => {
    return (
        <div className={classes.Nothingness} >
            <h2>Notice</h2>
            <p>This website is only available for device with a screen resolution higher than 720px.</p>
        </div>
    );
};

export default Nothingness;