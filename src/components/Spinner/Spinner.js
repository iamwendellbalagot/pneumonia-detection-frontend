import React from 'react';
import classes from './Spinner.css';

const Spinner = () => {
    return (
        <React.Fragment>
            <div className={classes.loader}>
                Loading...
            </div>
            <p className={classes.info}>Sending request from the server...</p>
        </React.Fragment>
    );
};

export default Spinner;