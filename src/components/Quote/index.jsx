import React from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'

import AppHeader from '../AppHeader'
import Button from '../Button'
import './Quote.css'

const propTypes = {
  text: string.isRequired,
  author: string.isRequired,
  generateQuote: func.isRequired,
  toggleView: func.isRequired,
}

function Quote(props) {
  return (
    <main className={`quote-body-${props.goofyQuote ? 'a' : 'b'}`}>
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
        <Button onClick={() => props.generateQuote(props.goofyQuote)}>
          New Quote
        </Button>
        <Button
          className="ml3"
          onClick={() => {
            props.generateQuote(!props.goofyQuote)
            props.toggleView()
          }}
        >
          Invert Wisdom
        </Button>
      </div>
    </main>
  )
}

const mapStateToProps = state => ({
  goofyQuote: state.goofyQuote,
})

Quote.propTypes = propTypes
export default connect(mapStateToProps)(Quote)
