import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import './Quote.css';

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  generateQuote: PropTypes.func,
  toggleView: PropTypes.func
};

// Quote.defaultProps = {
//   newQuote: () => {},
//   changeView: () => {},
// };

function Quote(props) {
  return (
    <main className='mainContent1'>
      <AppHeader />
      <div className='wrapper'>
        <p>{props.text}</p>
        <p className='author'>- {props.author}</p>
      </div>
      <div className='controls'>
        <button onClick={props.swapView}>Swap</button>
        <button onClick={props.generateQuote}>New Quote</button>
      </div>
    </main>
  );
};

export default Quote;
