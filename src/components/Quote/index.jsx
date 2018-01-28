import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import './Quote.css';

function Quote(props) {
  let QUOTE_VIEW = props.showSeriousQuote ? 'quoteReal' : 'quoteGoofy';
  let PICTURE_VIEW = props.showSeriousQuote ? 'mainContent2' : 'mainContent1';
  return (
    <main className={PICTURE_VIEW}>
      <AppHeader />
      <div className='wrapper'>
        <p>{props[QUOTE_VIEW].quote}</p>
        <p className='author'>- {props[QUOTE_VIEW].author}</p>
      </div>
      <div className='controls'>
        <button onClick={props.changeView}>SWAP</button>
        <button onClick={props.newQuote}>NEW QUOTE</button>
      </div>
    </main>
  );
};

Quote.propTypes = {
  showSeriousQuote: PropTypes.bool.isRequired,
  quoteReal: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  quoteGoofy: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  newQuote: PropTypes.func,
  changeView: PropTypes.func
};

export default Quote;
