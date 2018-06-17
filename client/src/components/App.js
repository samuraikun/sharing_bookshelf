import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookShelf from './Bookshelf';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchKeywordChange = this.handleSearchKeywordChange.bind(this);
    this.state = { books: this.props.books, keyword: '' }
  }

  handleSearchKeywordChange(keyword) {
    this.setState({keyword});

    this.searchBook();
  }

  searchBook() {
    const books = this.state.books;
    const keyword = this.state.keyword;
    const search_results = books.filter(book => book.title.includes(`${keyword}`));

    if (books.length !== 0) {
      this.setState({ books: search_results });
    } else {
      this.setState({ books: this.props.books });
    }
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
