import React, { Component } from 'react';
import QuoteText from './QuoteText/QuoteText';
import authors from '../../authors';

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

    fetch('http://localhost:3000/quotes')
      .then(res => res.json())
      .then(quote => {
        console.log('this is fetch quote', quote);
        this.setState({
          quotes: quote,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
    
    this.getRandomAuthor();
  }

  getRandomAuthor() {
    const rand = Math.floor(Math.random() * (authors.goofy.length + 1));
    this.setState({
      author: authors.goofy[rand].name,
    });
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 'Loading!' : <QuoteText
          quote={this.state.quotes.quoteText}
          author={this.state.author}
          fetchQuote={this.fetchQuote} />}
      </div>
    );
  }
};

export default Quote;
