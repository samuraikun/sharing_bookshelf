import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <BookShelf />
        </div>
      </div>
    );
  }
}

export default App;
