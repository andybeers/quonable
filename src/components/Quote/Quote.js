import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import './Quote.css';

class Quote extends Component {

  render() {
    let QUOTE_VIEW = this.props.showSeriousQuote ? 'quoteReal' : 'quoteGoofy';
    let PICTURE_VIEW = this.props.showSeriousQuote ? 'mainContent2' : 'mainContent1';
    return (
      <main className={PICTURE_VIEW}>
        <AppHeader />
        <div className='wrapper'>
          <p>{this.props[QUOTE_VIEW].quote}</p>
          <p className='author'>- {this.props[QUOTE_VIEW].author}</p>
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
