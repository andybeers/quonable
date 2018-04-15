import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AppHeader from '../AppHeader'
import './Quote.css'

function Quote(props) {
  return (
    <main className={props.goofyQuote ? 'mainContent1' : 'mainContent2'}>
      <AppHeader />
      <div className="w-80-ns mw-4-ns mv4 pa4 center">
        <blockquote className="athelas ml0 mt0 pl4 bl bw2 b--light-blue">
          <p className="f4 f3-m f2-l lh-copy mt0 white">{props.text}</p>
          <cite className="f5 ttu tracked fs-normal authorName">
            - {props.author}
          </cite>
        </blockquote>
      </div>
      <div className="pa4 mt2 sans-serif">
        <button
          className="f6 br3 ph3 pv2 mb3 mr3 dib near-white bg-transparent bw1 b--white pointer"
          onClick={() => props.generateQuote(props.goofyQuote)}
        >
          New Quote
        </button>
        <button
          className="f6 br3 ph3 pv2 mb3 dib near-white bg-transparent bw1 b--near-white pointer"
          onClick={() => {
            props.generateQuote(!props.goofyQuote)
            props.toggleView()
          }}
        >
          Invert Wisdom
        </button>
      </div>
    </main>
  )
}

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  generateQuote: PropTypes.func,
  toggleView: PropTypes.func
}

const mapStateToProps = state => {
  return {
    goofyQuote: state.goofyQuote
  }
}

export default connect(mapStateToProps)(Quote)
