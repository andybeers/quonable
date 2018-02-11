import { combineReducers } from 'redux';
import authorData from './authors';
import quoteData from './quotes';

const TOGGLE_VIEW = 'TOGGLE_VIEW';
const GENERATE_QUOTE = 'GENERATE_QUOTE';

const text = (state = '', action) => {
  switch (action.type) {
    case GENERATE_QUOTE:
      return action.text;
    default:
      return state;
  }
};

const author = (state = '', action) => {
  switch (action.type) {
    case GENERATE_QUOTE:
      return action.author;
    default: 
      return state;
  }
};

const goofyQuote = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_VIEW:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  text,
  author,
  goofyQuote
});

export default rootReducer;

function roll(maxRange) {
  return Math.floor(Math.random() * maxRange);
};

export const generateQuote = (goofyQuote) => {
  let quoteIndex,
    authorIndex,
    text,
    author;

  if (goofyQuote) {
    quoteIndex = roll(quoteData.goofy.length);
    authorIndex = roll(authorData.real.length);
    text = quoteData.goofy[quoteIndex].text;
    author = authorData.real[authorIndex].name;
  } else {
    quoteIndex = roll(quoteData.real.length);
    authorIndex = roll(authorData.goofy.length);
    text = quoteData.real[quoteIndex].text;
    author = authorData.goofy[authorIndex].name;
  }

  return {
    type: GENERATE_QUOTE,
    text: text,
    author: author
  };
};

export const toggleView = () => {
  return { type: TOGGLE_VIEW };
};

export const quoteActionCreators = {
  generateQuote,
  toggleView
};
