import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, func, number, string } from 'prop-types'

import AppHeader from '../AppHeader'
import Button from '../Button'
import { actionCreators, selectors } from '../../dux/dux'
import './Quote.css'

class Quote extends Component {
  static propTypes = {
    author: string.isRequired,
    authorIndex: number.isRequired,
    getGoofyQuote: func.isRequired,
    getRealQuote: func.isRequired,
    goofyQuote: bool.isRequired,
    quoteIndex: number.isRequired,
    text: string.isRequired,
    toggleView: func.isRequired,
  }

  componentDidMount() {
    const { getGoofyQuote } = this.props

    getGoofyQuote()
  }

  render() {
    const {
      author,
      authorIndex,
      getGoofyQuote,
      getRealQuote,
      goofyQuote,
      quoteIndex,
      text,
      toggleView,
    } = this.props

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
          <Button onClick={() => fetchQuote({ authorIndex, quoteIndex })}>
            New Quote
          </Button>
          <Button
            className="ml3"
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
}

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
