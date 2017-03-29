import React, { Component } from 'react';
import './App.css';
import Quote from '../Quote/Quote';
import AppHeader from '../AppHeader/AppHeader';
import authors from '../../authors';
import quotes from '../../quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSeriousQuote: false,
      quoteRand: 0,
      authRand: 0,
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState({
      showSeriousQuote: !this.state.showSeriousQuote,
    });
  }

  render() {
    return (
        <div>
          <AppHeader />
          <Quote quotes={quotes.real} authors={authors.goofy}/>
          <button onClick={this.changeView}>Change View</button>
        </div>
    );
  }
}

export default App;
