import { combineReducers } from "redux";
import { roll } from "../utils/quote-helpers";

// DATA FILES
// ------------------------------------
import authorData from "../authors";
import quoteData from "../quotes";

// ACTION CONSTANTS
// ------------------------------------
const TOGGLE_VIEW = "TOGGLE_VIEW";
const GENERATE_QUOTE = "GENERATE_QUOTE";

// REDUCERS
// ------------------------------------
const text = (state = "", { text, type }) => {
  switch (type) {
    case GENERATE_QUOTE:
      return text;
    default:
      return state;
  }
};
const author = (state = "", { author, type }) => {
  switch (type) {
    case GENERATE_QUOTE:
      return author;
    default:
      return state;
  }
};
const isGoofyQuote = (state = true, { type }) => {
  switch (type) {
    case TOGGLE_VIEW:
      return !state;
    default:
      return state;
  }
};
const indexData = (
  state = { authorIndex: 0, quoteIndex: 0 },
  { authorIndex, quoteIndex, type }
) => {
  switch (type) {
    case GENERATE_QUOTE:
      return { authorIndex, quoteIndex };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  author,
  isGoofyQuote,
  indexData,
  text,
});

export default rootReducer;

// ACTION CREATORS
// ------------------------------------
export const generateQuote = () => (dispatch, getState) => {
  const {
    isGoofyQuote,
    indexData: { authorIndex: prevAuthorIndex, quoteIndex: prevQuoteIndex },
  } = getState();

  let quoteIndex, authorIndex, text, author;

  if (isGoofyQuote) {
    quoteIndex = roll(quoteData.goofy.length, prevQuoteIndex);
    authorIndex = roll(authorData.real.length, prevAuthorIndex);
    text = quoteData.goofy[quoteIndex].text;
    author = authorData.real[authorIndex].name;
  } else {
    quoteIndex = roll(quoteData.real.length, prevQuoteIndex);
    authorIndex = roll(authorData.goofy.length, prevAuthorIndex);
    text = quoteData.real[quoteIndex].text;
    author = authorData.goofy[authorIndex].name;
  }

  return dispatch({
    type: GENERATE_QUOTE,
    author,
    authorIndex,
    quoteIndex,
    text,
  });
};

export const toggleView = () => ({ type: TOGGLE_VIEW });

export const actionCreators = {
  generateQuote,
  toggleView,
};

// SELECTORS
// ------------------------------------
const getAuthor = (store) => store.author;
const getAuthorIndex = (store) => store.indexData.authorIndex;
const getQuote = (store) => store.text;
const getQuoteIndex = (store) => store.indexData.quoteIndex;
const getIsGoofyQuote = (store) => store.isGoofyQuote;

export const selectors = {
  getAuthor,
  getAuthorIndex,
  getQuoteIndex,
  getIsGoofyQuote,
  getQuote,
};
