import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const Toolbar = () => {
    return (
        <React.Fragment>
            <ul className = {classes.Toolbar}>
                <Logo />
                <li><a>Developer</a></li>
                <li><a>About</a></li>
                <li><a>Home</a></li>
            </ul>
        </React.Fragment>
    );
};

export default Toolbar;