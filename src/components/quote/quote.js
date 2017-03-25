import React, { Component } from 'react';
import authors from '../../authors';
import quotes from '../../quotes';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Initial',
      author: 'Initial',
      quoteRand: 0,
      authRand: 0,
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    let quoteRand = this.roll(quotes.length);
    let authRand = this.roll(authors.real.length);
    let quote = quotes[quoteRand].text;
    let author = authors.real[authRand].name;
    console.log(quote);
    console.log(author);
    this.setState({
      quoteRand: this.roll(quotes.length),
      authRand: this.roll(authors.real.length),
      quote: quote,
      author: author,
    });
  }

  roll(maxRange) {
    return Math.floor(Math.random() * maxRange);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div>
        <p>{this.state.quote}</p>
        <p className='author'>- {this.state.author}</p>
        <button onClick={this.fetchQuote}>New Quote</button>
      </div>
    );
  }
};

export default Quote;
