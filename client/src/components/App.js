import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';
import SearchForm from './SearchForm';

import books from '../books_response';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <div className="App-container">
          <BookShelf books={books} />
        </div>
      </div>
    );
  }
}

export default App;
