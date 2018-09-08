import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <a className="navbar-brand">clickEach</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link active">Current Score: | Highest Score:  <span class="sr-only">(current)</span></a>
          </div>
        </nav>
        {/* compenent for holding pictures goes here */}
        <footer className="footer bg-warning">
          <div className="container">
            <span className="text-muted">"If at first you don't succeed, try, try, try again"    -William Edwards</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
