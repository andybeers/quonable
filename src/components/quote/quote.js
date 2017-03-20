import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      isLoading: false,
    };
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
        {this.state.quotes.quoteText}
      </div>
    );
  }
};

export default Quote;
