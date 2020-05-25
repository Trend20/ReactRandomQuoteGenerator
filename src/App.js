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
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
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