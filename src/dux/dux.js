import { combineReducers } from 'redux'
import { roll } from '../utils/quote-helpers'

// DATA FILES
// ------------------------------------
import authorData from '../authors'
import quoteData from '../quotes'

// ACTION CONSTANTS
// ------------------------------------
const TOGGLE_VIEW = 'TOGGLE_VIEW'
const GENERATE_QUOTE = 'GENERATE_QUOTE'

// REDUCERS
// ------------------------------------
const text = (state = '', { text, type }) => {
  switch (type) {
    case GENERATE_QUOTE:
      return text
    default:
      return state
  }
}
const author = (state = '', { author, type }) => {
  switch (type) {
    case GENERATE_QUOTE:
      return author
    default:
      return state
  }
}
const goofyQuote = (state = true, { type }) => {
  switch (type) {
    case TOGGLE_VIEW:
      return !state
    default:
      return state
  }
}
const indexData = (
  state = { authorIndex: 0, quoteIndex: 0 },
  { authorIndex, quoteIndex, type },
) => {
  switch (type) {
    case GENERATE_QUOTE:
      return { authorIndex, quoteIndex }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  author,
  goofyQuote,
  indexData,
  text,
})

export default rootReducer

// ACTION CREATORS
// ------------------------------------
export const getGoofyQuote = ({
  authorIndex: prevAuthIndex,
  quoteIndex: prevQuoteIndex,
} = {}) => {
  const quoteIndex = roll(quoteData.goofy.length, prevQuoteIndex)
  const authorIndex = roll(authorData.real.length, prevAuthIndex)
  const text = quoteData.goofy[quoteIndex].text
  const author = authorData.real[authorIndex].name

  return {
    type: GENERATE_QUOTE,
    author,
    authorIndex,
    quoteIndex,
    text,
  }
}

export const getRealQuote = ({
  authorIndex: prevAuthIndex,
  quoteIndex: prevQuoteIndex,
} = {}) => {
  const quoteIndex = roll(quoteData.real.length, prevQuoteIndex)
  const authorIndex = roll(authorData.goofy.length, prevAuthIndex)
  const text = quoteData.real[quoteIndex].text
  const author = authorData.goofy[authorIndex].name

  return {
    type: GENERATE_QUOTE,
    author,
    authorIndex,
    quoteIndex,
    text,
  }
}

export const toggleView = () => ({ type: TOGGLE_VIEW })

export const actionCreators = {
  getGoofyQuote,
  getRealQuote,
  toggleView,
}

// SELECTORS
// ------------------------------------
const getAuthor = store => store.author
const getAuthorIndex = store => store.indexData.authorIndex
const getQuote = store => store.text
const getQuoteIndex = store => store.indexData.quoteIndex
const getQuoteState = store => store.goofyQuote

export const selectors = {
  getAuthor,
  getAuthorIndex,
  getQuoteIndex,
  getQuoteState,
  getQuote,
}
