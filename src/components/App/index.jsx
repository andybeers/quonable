import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quote from '../Quote'
import AppFooter from '../AppFooter'
import { quoteActionCreators } from '../../dux'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.generateQuote(this.props.goofyQuote)
  }

  render() {
    const { text, author, toggleView, generateQuote } = this.props

    return (
      <div>
        <Quote
          text={text}
          author={author}
          toggleView={toggleView}
          generateQuote={generateQuote}
        />
        <AppFooter />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  text: store.text,
  author: store.author,
  goofyQuote: store.goofyQuote
})

const mapDispatchToProps = {
  generateQuote: quoteActionCreators.generateQuote,
  toggleView: quoteActionCreators.toggleView
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
