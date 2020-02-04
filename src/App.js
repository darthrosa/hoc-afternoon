import React, { Component } from 'react';
import './App.css';
import ExchangeCurrency from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <h2>High Order Component</h2>
        <ExchangeCurrency/>
      </div>
    );
  }
}

export default App;
