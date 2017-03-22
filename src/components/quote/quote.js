import React, { Component } from 'react';
import QuoteText from './QuoteText/QuoteText';
import authors from '../../authors';
import quotes from '../../quotes';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      author: '',
      isLoading: false,
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    this.setState({ isLoading: true });
    const author = this.getRandomAuthor();
    const quote = this.getRandomQuote();
    console.log('quote :', quote);
    console.log('author: ', author);
    this.setState({
      quotes: quote,
      author: author,
      isLoading: false,
    });
  }

  getRandomAuthor() {
    const rand = Math.floor(Math.random() * (authors.real.length + 1));
    console.log('auth rand: ', rand);
    return authors.real[rand].name;
  }

  getRandomQuote() {
    const rand = Math.floor(Math.random() * (quotes.length + 1));
    console.log('quote rand: ', rand);
    return quotes[rand].text;
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 'Loading!' : <QuoteText
          quote={this.state.quotes}
          author={this.state.author}
          fetchQuote={this.fetchQuote} />}
      </div>
    );
  }
};

export default Quote;
