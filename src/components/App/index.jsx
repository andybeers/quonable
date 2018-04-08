import React, { Component } from 'react'
import { connect } from 'react-redux'
import { quoteActionCreators } from '../../dux'
import './App.css'
import Quote from '../Quote'
import AppFooter from '../AppFooter'

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

const mapStateToProps = state => {
  return {
    text: state.text,
    author: state.author,
    goofyQuote: state.goofyQuote
  }
}

const mapDispatchToProps = {
  generateQuote: quoteActionCreators.generateQuote,
  toggleView: quoteActionCreators.toggleView
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
