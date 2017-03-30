import React, { Component } from 'react';
import './Quote.css';
import loop from '../../imgs/loop.svg';

class Quote extends Component {

  render() {
    return (
      <main>
        <div className='wrapper'>
          <p>{this.props.quote}</p>
          <p className='author'>- {this.props.author}</p>
        </div>
        <div className='controls'>
          <img src={loop} alt='Circular arrows' />
          <button onClick={this.props.newQuote}>NEW QUOTE</button>
          <button onClick={this.props.changeView}>CHANGE VIEW</button>
        </div>
      </main>
    );
  }
};

export default Quote;
