import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchKeywordChange = this.handleSearchKeywordChange.bind(this);
    this.state = { books: this.props.books }
  }

  handleSearchKeywordChange(keyword) {
    if (!keyword) {
      this.setState({ books: this.props.books });
    } else {
      this.searchBook(keyword);
    }
  }

  searchBook(keyword) {
    let books = this.state.books;
    let updated_books = books.filter(book => book.title.toLowerCase().includes(`${keyword.toLowerCase()}`));

    this.setState({ books: updated_books });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm onSearchKeywordChange={this.handleSearchKeywordChange} />
        <div className="App-container">
          <BookShelf books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
