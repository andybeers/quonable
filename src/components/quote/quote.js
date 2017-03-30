import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {

  render() {
    return (
      <main>
        <div className='wrapper'>
          <p>{this.props.quote}</p>
          <p className='author'>- {this.props.author}</p>
        </div>
        <div className='controls'>
          <div className='svgBox'>here</div>
          <img src={'../../imgs/loop.svg'} alt='Circular arrows'/>
          <button onClick={this.props.newQuote}>NEW QUOTE</button>
        </div>
      </main>
    );
  }
};

export default Quote;
