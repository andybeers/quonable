import React, { Component } from 'react';
import './App.css';
import Quote from '../quote/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRealAuth: true,
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    console.log('changing view');
    this.setState({
      viewRealAuth: !this.state.viewRealAuth,
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Quote view={this.state.viewRealAuth}/>
        <button onClick={this.changeView}>Change View</button>
      </div>
    );
  }
}

export default App;
