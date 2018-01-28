import React, { Component } from 'react';
import './App.css';
import Quote from '../Quote';
import AppFooter from '../AppFooter';
import authors from '../../authors';
import quotes from '../../quotes';

class App extends Component {
  state = {
    showSeriousQuote: false,
    quoteReal: { quote: 'Init', author: 'Init' },
    quoteGoofy: { quote: 'Init', author: 'Init' },
  }

  newQuote = () => {
    let quoteRealRand = this.roll(quotes.real.length);
    let quoteGoofyRand = this.roll(quotes.goofy.length);
    let authRealRand = this.roll(authors.real.length);
    let authGoofyRand = this.roll(authors.goofy.length);
    let quoteReal = {
      quote: quotes.real[quoteRealRand].text,
      author: authors.goofy[authGoofyRand].name
    };
    let quoteGoofy = {
      quote: quotes.goofy[quoteGoofyRand].text,
      author: authors.real[authRealRand].name
    };

    this.setState({
      quoteReal: quoteReal,
      quoteGoofy: quoteGoofy,
    });
  }

  changeView = () => {
    this.setState(prevState => ({ showSeriousQuote: !prevState.showSeriousQuote }));
  }

  roll(maxRange) {
    return Math.floor(Math.random() * maxRange);
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return (
        <div className='flexWrapper'>
          <Quote 
            showSeriousQuote={this.state.showSeriousQuote}
            quoteReal={this.state.quoteReal}
            quoteGoofy={this.state.quoteGoofy}
            newQuote={this.newQuote}
            changeView={this.changeView}
          />
          <AppFooter />
        </div>
    );
  }
}

export default App;
