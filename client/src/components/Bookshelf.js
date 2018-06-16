import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <Book key={book.title} book={book} />
      );
    });
  }

  render() {
    return (
      <div>  
        {this.renderList()}
      </div>
    );
  }
}

export default BookShelf;