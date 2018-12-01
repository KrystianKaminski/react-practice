import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Larry'
    const showHello = true

    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h4>Hello {name.toUpperCase()}</h4>
          : null}
        <h4> 1 + 1 = {1 + 1}</h4>
      </div>
    );
  }
}

export default App;
