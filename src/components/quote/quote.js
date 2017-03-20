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

    fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en')
      .then(res => res.json())
      .then(quote => {
        this.setState({
          quotes: [...this.state.quotes, quote],
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
        this.state.quotes[0];
      </div>
    );
  }
};

export default Quote;
