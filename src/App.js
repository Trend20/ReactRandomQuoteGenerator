import React, { Component } from 'react';
import Quotes from './components/QuotesDatabase';
import QuoteAuthor from './components/QuoteAuthor';
import './App.css'
 
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote: quotes[0].quote,
      author: quotes[0].author,
    }
  }
  render() { 
    return (
      <div>
        <QuoteAuthor />
        <Quotes />
      </div>
    );
  }
}
 
export default App;