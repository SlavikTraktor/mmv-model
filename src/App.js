import React, { Component } from 'react';
import './App.css';
import Left from './parts/left/left-side';
import Right from './parts/right/right-side';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Left/>
        <Right/>
      </div>
    );
  }
}

export default App;
