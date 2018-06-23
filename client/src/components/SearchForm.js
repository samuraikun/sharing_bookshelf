import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    paddingTop: '30px'
  }
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.onSearchKeywordChange(event.target.value);
  }

  render() {
    const { classes } = this.props;
    const keyword = this.props.keyword;

    return (
      <Grid container className={classes.root} justify="center" spacing={16}>
        <Grid item>
          <TextField
            value={keyword}
            onChange={this.onInputChange}
          />
        </Grid>  
      </Grid>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchForm);