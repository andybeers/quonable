import React, { Component } from 'react';

function QuoteBody(props) {
  return (
    <div>
      <p>{props.quote}</p>
        <p>- {props.author}</p>
        <button onClick={props.fetchQuote}>New Quote</button>
    </div>
  );
};

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      author: 'Hulk Hogan',
      isLoading: false,
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/quotes')
      .then(res => res.json())
      .then(quote => {
        console.log('this is fetch quote', quote);
        this.setState({
          quotes: quote,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 'Loading!' : <QuoteBody
          quote={this.state.quotes.quoteText}
          author={this.state.author}
          fetchQuote={this.fetchQuote} />}
      </div>
    );
  }
};

export default Quote;
