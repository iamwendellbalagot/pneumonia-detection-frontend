import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className= {classes.App}>
        <Home />
      </div>
    );
  }
}

export default App;
