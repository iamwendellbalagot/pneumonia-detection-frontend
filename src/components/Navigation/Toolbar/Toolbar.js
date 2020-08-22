import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import {NavLink} from 'react-router-dom';

const Toolbar = (props) => {
    return (
        <React.Fragment>
            <ul className = {classes.Toolbar}>
                <Logo />
                <li><a target={'_blank'} href= 'https://github.com/iamwendellbalagot'>Developer</a></li>
                <li><NavLink to = {{
                    pathname : 'about',
                    hash: 'submit',
                    search: 'quick-submit=true?',
                }} >AboutAI</NavLink></li>
                <li><NavLink to ='/' >Home</NavLink></li>
            </ul>
        </React.Fragment>
    );
};

export default Toolbar;