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

    this.state = { keyword: '' };
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} justify="center" spacing={16}>
        <Grid item>
          <TextField value={this.state.keyword} />
        </Grid>  
      </Grid>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchForm);