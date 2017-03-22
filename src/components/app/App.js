import React, { Component } from 'react';
import './App.css';
import Quote from '../quote/Quote';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Quote />
      </div>
    );
  }
}

export default App;
