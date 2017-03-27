import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'initial',
      author: 'initial',
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    let quoteRand = this.roll(this.props.quotes.length);
    let authRand = this.roll(this.props.authors.length);

    this.setState({
      quote: this.props.quotes[quoteRand].text,
      author: this.props.authors[authRand].name,
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
