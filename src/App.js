import React, { Component } from 'react';
 
class App extends Component {
  state={
    list:[],
    newQuote: '',
  }
  addQuote(){
    const newQuote={
      id: 1 + Math.random(),
      value: this.state.newQuote.slice(),
    }

    const list=[...this.state.list];

    list.push(newQuote);

    this.setState({
      list,
      newQuote:'',
    });
  }
  render() { 
    return (
      <div className="App">
      <div className="quote-container">
        {
          this.state.list.map(quote =>{
            return(
              <p key={quote.id}>
                {quote.value}
              </p>
            )
          })
        }
        <button onClick={() =>this.addQuote()}>New Quote</button>
      </div>
    </div>
    );
  }
}
 
export default App;