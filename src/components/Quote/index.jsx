import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, func, string } from 'prop-types'

import AppHeader from '../AppHeader'
import Button from '../Button'
import './Quote.css'
import { quoteActionCreators } from '../../dux'

class Quote extends Component {
  static propTypes = {
    author: string.isRequired,
    generateQuote: func.isRequired,
    goofyQuote: bool.isRequired,
    text: string.isRequired,
    toggleView: func.isRequired,
  }

  componentDidMount() {
    const { generateQuote, goofyQuote } = this.props

    generateQuote(goofyQuote)
  }

  render() {
    const { author, generateQuote, goofyQuote, text, toggleView } = this.props
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
          <Button onClick={() => generateQuote(goofyQuote)}>New Quote</Button>
          <Button
            className="ml3"
            onClick={() => {
              generateQuote(!goofyQuote)
              toggleView()
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
  author: store.author,
  text: store.text,
  goofyQuote: store.goofyQuote,
})

const mapDispatchToProps = {
  generateQuote: quoteActionCreators.generateQuote,
  toggleView: quoteActionCreators.toggleView,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quote)
