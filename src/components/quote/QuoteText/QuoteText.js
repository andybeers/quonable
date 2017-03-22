import React, { Component } from 'react';
import './QuoteText.css';

function QuoteText(props) {
  return (
    <div>
      <p>{props.quote}</p>
      <p className='author'>- {props.author}</p>
      <button onClick={props.fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteText;
