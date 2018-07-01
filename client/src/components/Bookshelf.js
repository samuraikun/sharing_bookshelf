import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import SearchForm from './SearchForm';
import books from '../books_response';

const styles = {
  root: {
    flexGrow: 1,
    padding: '50px'
  }
};

class BookShelf extends Component {
  constructor() {
    super();
    this.state = { books: books }
    this.handleSearchKeywordChange = this.handleSearchKeywordChange.bind(this);
  }

  handleSearchKeywordChange(keyword) {
    if (!keyword) {
      this.setState({ books: books });
    } else {
      this.searchBook(keyword);
    }
  }

  searchBook(keyword) {
    let books = this.state.books;
    let updated_books = books.filter(book => book.title.toLowerCase().includes(`${keyword.toLowerCase()}`));

    this.setState({ books: updated_books });
  }

  renderList(books) {
    return books.map((book) => {
      return (
        <Grid key={book.title} item xs={3}>
          <Book book={book} />
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <SearchForm onSearchKeywordChange={this.handleSearchKeywordChange} />
        <Grid container className={classes.root} direction="row" justify="flex-start" spacing={40}>
          {this.renderList(this.state.books)}
        </Grid>
      </div>
    );
  }
}

BookShelf.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookShelf);