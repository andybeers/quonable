import React, { Component } from 'react';
import './App.css';
import Quote from '../quote/Quote';
import authors from '../../authors';
import quotes from '../../quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSeriousQuote: false,
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState({
      showSeriousQuote: !this.state.showSeriousQuote,
    });
  }

  render() {
    return this.state.showSeriousQuote
      ? (
        <div className='wrapper'>
          <Quote quotes={quotes.real} authors={authors.goofy}/>
          <button onClick={this.changeView}>Change View</button>
        </div>
      )
      : (
        <div className='wrapper'>
          <Quote quotes={quotes.goofy} authors={authors.real}/>
          <button onClick={this.changeView}>Change View</button>
        </div>
      );
  }
}

export default App;
