import React, { Component } from 'react';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Notable</h2>
        </div>
        <Container />
      </div>
    );
  }
}

export default App;
