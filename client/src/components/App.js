import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <Router>
          <div className="App-container">
            <Route exact={true} path='/' component={BookShelf} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
