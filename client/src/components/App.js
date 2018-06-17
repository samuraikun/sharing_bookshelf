import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { books: this.props.books }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <div className="App-container">
          <BookShelf books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
