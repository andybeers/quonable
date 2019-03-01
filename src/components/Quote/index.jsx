import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { bool, func, string } from 'prop-types'
import classNames from 'classnames'

import AppHeader from '../AppHeader'
import Button from '../Button'
import { actionCreators, selectors } from '../../dux/dux'

import './Quote.css'

const propTypes = {
  author: string.isRequired,
  generateQuote: func.isRequired,
  isGoofyQuote: bool.isRequired,
  text: string.isRequired,
  toggleView: func.isRequired,
}

const Quote = ({ author, generateQuote, isGoofyQuote, text, toggleView }) => {
  const [hidden, setHidden] = useState(false)
  const quoteEl = useRef(null)

  const fadeInNewQuote = e => {
    const { classList } = e.target
    // Make sure this only fires after the fadeout animation
    if (classList.contains('o-0')) {
      setHidden(false)
      generateQuote()
    }
  }

  const handleToggleView = () => {
    toggleView()
    generateQuote()
  }

  // Set fadeout event listener
  // Empty array `useEffect` argument tells React to only call this once
  useEffect(() => {
    quoteEl.current.addEventListener('transitionend', fadeInNewQuote)

    // Returning a function from `useEffect` tells react to run on component unmount
    return () => {
      quoteEl.current.removeEventListener('transitionend', fadeInNewQuote)
    }
  }, [])

  // Load initial quote on mount
  useLayoutEffect(() => {
    generateQuote()
  }, [])

  return (
    <main className={`quote-body-${isGoofyQuote ? 'a' : 'b'}`}>
      <AppHeader />
      <div
        id="quote-section"
        ref={quoteEl}
        className={classNames('w-80-ns mw-4-ns mv4 pa4 center', {
          'o-0': hidden,
          'o-100': !hidden,
        })}
      >
        <blockquote className="athelas ml0 mt0 pl4 bl bw2 b--light-blue">
          <p className="f4 f3-m f2-l lh-copy mt0 white">{text}</p>
          <cite className="f5 ttu tracked fs-normal authorName">- {author}</cite>
        </blockquote>
      </div>
      <div className="pa4 mt2 mb2 sans-serif">
        <Button
          className="mr3"
          onClick={() => {
            setHidden(true)
          }}
        >
          New Quote
        </Button>
        <Button onClick={handleToggleView}>Invert Wisdom</Button>
      </div>
    </main>
  )
}

Quote.propTypes = propTypes

const mapStateToProps = store => ({
  author: selectors.getAuthor(store),
  isGoofyQuote: selectors.getIsGoofyQuote(store),
  text: selectors.getQuote(store),
})

const mapDispatchToProps = {
  generateQuote: actionCreators.generateQuote,
  toggleView: actionCreators.toggleView,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quote)
