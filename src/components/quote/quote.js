import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // quote: 'initial',
      // author: 'initial',
    };
    // this.fetchQuote = this.fetchQuote.bind(this);
  }

  // fetchQuote() {
  //   let quoteRand = this.roll(this.props.quotes.length);
  //   let authRand = this.roll(this.props.authors.length);

  //   this.setState({
  //     quote: this.props.quotes[quoteRand].text,
  //     author: this.props.authors[authRand].name,
  //   });
  // }

  // roll(maxRange) {
  //   return Math.floor(Math.random() * maxRange);
  // }

  // componentDidMount() {
  //   this.fetchQuote();
  // }

  render() {
    return (
      <main>
        <div className='wrapper'>
          <p>{this.props.quote}</p>
          <p className='author'>- {this.props.author}</p>
        </div>
        <div className='controls'>
          <button onClick={this.fetchQuote}>NEW QUOTE</button>
        </div>
      </main>
    );
  }
};

export default Quote;
