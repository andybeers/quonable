import React from 'react';
import { connect } from 'react-redux';
import { generateQuote, toggleView } from '../../dux';
import './App.css';
import Quote from '../Quote';
import AppFooter from '../AppFooter';

let App = (props) => {
  return (
      <div className='flexWrapper'>
        <Quote 
          text={props.text}
          author={props.author}
          toggleView={props.toggleView}
          generateQuote={props.generateQuote}
        />
        <AppFooter />
      </div>
  );
};

const mapStateToProps = state => {
  return {
    text: state.text,
    author: state.author,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generateQuote: () => {
      dispatch(generateQuote(true));
    },
    toggleView: () => {
      dispatch(toggleView());
    }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
