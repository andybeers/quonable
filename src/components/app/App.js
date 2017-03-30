import React, { Component } from 'react';
import './App.css';
import Quote from '../Quote/Quote';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import authors from '../../authors';
import quotes from '../../quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSeriousQuote: false,
      quoteRand: 0,
      authRand: 0,
      quote: 'Init',
      author: 'Init',
    };
    this.changeView = this.changeView.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let quoteView = this.state.showSeriousQuote
      ? 'real' : 'goofy';
    let authView = this.state.showSeriousQuote
      ? 'goofy' : 'real';
    let quoteRand = this.roll(quotes[quoteView].length);
    let authRand = this.roll(authors[authView].length);
    let quote = quotes[quoteView][quoteRand].text;
    let author = authors[authView][authRand].name;

    this.setState({
      quoteRand: quoteRand,
      authRand: authRand,
      quote: quote,
      author: author,
    });
  }

  changeView() {
    this.setState({
      showSeriousQuote: !this.state.showSeriousQuote,
    });
    // this.newQuote();
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
          <AppHeader />
          <Quote 
            quote={this.state.quote}
            author={this.state.author}
            newQuote={this.newQuote}
            changeView={this.changeView}
          />
          <AppFooter />
        </div>
    );
  }
}

export default App;
