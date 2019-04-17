import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  };

  decrement = () => {
    let { counter } = this.state;
    counter--;
    this.setState({ counter });
  };

  render() {
    return (
      <div className="App">
        <h1> React Counter </h1>
        <h2> Counter: {this.state.counter} </h2>
        <button onClick={() => this.increment()}> Increment </button>
        <button onClick={() => this.decrement()}> Decrement </button>
      </div>
    );
  }
}

export default App;
