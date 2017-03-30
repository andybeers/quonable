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
          <img src={'quonable/src/imgs/loop.svg'} alt='Circular arrows'/>
          {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"></path>
            <path d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"></path>
          </svg>*/}
          <button onClick={this.props.newQuote}>NEW QUOTE</button>
        </div>
      </main>
    );
  }
};

export default Quote;
