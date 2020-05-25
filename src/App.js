import React, { Component } from 'react';
 
class App extends Component {
  state={
    list:[],
    newQuote: '',
  }
  render() { 
    return (
      <div className="App">
      <div className="quote-container">
        <p>{this.state.newQuote}</p>
        <button onClick={() =>this.addQuote()}>New Quote</button>
      </div>
    </div>
    );
  }
}
 
export default App;