import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Book from './Book';

const styles = {
  root: {
    flexGrow: 1,
    padding: '50px'
  }
};

class BookShelf extends Component {
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
      <Grid container className={classes.root} direction="row" justify="flex-start" spacing={40}>
        {this.renderList(this.props.books)}
      </Grid>
    );
  }
}

BookShelf.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookShelf);