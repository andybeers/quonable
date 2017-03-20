import React, { Component } from 'react';

function QuoteText(props) {
  return (
    <div>
      <p>{props.quote}</p>
        <p>- {props.author}</p>
        <button onClick={props.fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteText;
