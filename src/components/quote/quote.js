import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {

  render() {
    let QUOTE_VIEW = this.props.showSeriousQuote ? 'quoteReal' : 'quoteGoofy';
    let AUTH_VIEW = this.props.showSeriousQuote ? 'quoteGoofy' : 'quoteReal';
    return (
      <main>
        <div className='wrapper'>
          <p>{this.props[QUOTE_VIEW].quote}</p>
          <p className='author'>- {this.props[AUTH_VIEW].author}</p>
        </div>
        <div className='controls'>
          <button onClick={this.props.newQuote}>NEW QUOTE</button>
          <button onClick={this.props.changeView}>CHANGE VIEW</button>
        </div>
      </main>
    );
  }
};

export default Quote;
