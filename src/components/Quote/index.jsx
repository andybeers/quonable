import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import './Quote.css';

function Quote(props) {
  return (
    <main className={props.goofyQuote ? 'mainContent1' : 'mainContent2'}>
      <AppHeader />
      <div className='wrapper'>
        <p>{props.text}</p>
        <p className='author'>- {props.author}</p>
      </div>
      <div className='controls'>
        <button
          onClick={() => {
            props.generateQuote(!props.goofyQuote);
            props.toggleView();
          }}>
          Swap
        </button>
        <button onClick={() => props.generateQuote(props.goofyQuote)}>New Quote</button>
      </div>
    </main>
  );
};

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  generateQuote: PropTypes.func,
  toggleView: PropTypes.func
};

const mapStateToProps = state => {
  return {
    goofyQuote: state.goofyQuote,
  };
};

export default connect(mapStateToProps)(Quote);
