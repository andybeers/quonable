import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bool, func, number, string } from 'prop-types'

import AppHeader from '../AppHeader'
import Button from '../Button'
import { actionCreators, selectors } from '../../dux/dux'
import './Quote.css'

const propTypes = {
  author: string.isRequired,
  authorIndex: number.isRequired,
  getGoofyQuote: func.isRequired,
  getRealQuote: func.isRequired,
  goofyQuote: bool.isRequired,
  quoteIndex: number.isRequired,
  text: string.isRequired,
  toggleView: func.isRequired,
}

const Quote = ({
  author,
  authorIndex,
  getGoofyQuote,
  getRealQuote,
  goofyQuote,
  quoteIndex,
  text,
  toggleView,
}) => {
  // Load quote on mount
  // Empty array `useEffect` argument tells React to only call this once
  useEffect(() => {
    getGoofyQuote()
  }, [])

  const fetchQuote = goofyQuote ? getGoofyQuote : getRealQuote
  const fetchOpposite = goofyQuote ? getRealQuote : getGoofyQuote

  return (
    <main className={`quote-body-${goofyQuote ? 'a' : 'b'}`}>
      <AppHeader />
      <div className="w-80-ns mw-4-ns mv4 pa4 center">
        <blockquote className="athelas ml0 mt0 pl4 bl bw2 b--light-blue">
          <p className="f4 f3-m f2-l lh-copy mt0 white">{text}</p>
          <cite className="f5 ttu tracked fs-normal authorName">- {author}</cite>
        </blockquote>
      </div>
      <div className="pa4 mt2 mb2 sans-serif">
        <Button
          className="mr3"
          onClick={() => fetchQuote({ authorIndex, quoteIndex })}
        >
          New Quote
        </Button>
        <Button
          onClick={() => {
            toggleView()
            fetchOpposite()
          }}
        >
          Invert Wisdom
        </Button>
      </div>
    </main>
  )
}

Quote.propTypes = propTypes

const mapStateToProps = store => ({
  author: selectors.getAuthor(store),
  authorIndex: selectors.getAuthorIndex(store),
  goofyQuote: selectors.getQuoteState(store),
  quoteIndex: selectors.getQuoteIndex(store),
  text: selectors.getQuote(store),
})

const mapDispatchToProps = {
  getGoofyQuote: actionCreators.getGoofyQuote,
  getRealQuote: actionCreators.getRealQuote,
  toggleView: actionCreators.toggleView,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quote)
