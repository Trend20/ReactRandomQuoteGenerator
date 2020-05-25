import React, { Component } from 'react';
 
class App extends Component {
  state={
    list:[],
    newQuote:[
      {
        "quote":'hey love',
        "author": 'dimore'
      },
      {
        "quote":'hey mum',
        "author": 'stevo'
      },
      {
        "quote":'hey dad',
        "author": 'eriko'
      },
      {
        "quote":'hey siz',
        "author": 'wifi'
      }
    ],
  }
  addQuote(){
    const newQuote={
      id: 1 + Math.random(),
      value: this.state.newQuote.quote,
    }

    const list=[...this.state.list];

    list.push(JSON.parse(newQuote));

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