import React, { Component } from 'react';
import classes from './About.css';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import AboutContents from './AboutContents/AboutContents';

class About extends Component {
    render() {
        return (
            <div className = {classes.About}>
                <Navigation />
                <AboutContents />
                <Footer />
            </div>
        );
    }
}

export default About;
