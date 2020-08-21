import React from 'react';
import classes from './Navigation.css';
import Toolbar from './Toolbar/Toolbar';

const Navigation = (props) => {
    return (
        <nav className = {classes.Navigation}>
            <Toolbar />
        </nav>
    );
};

export default Navigation;