import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 385,
    maxHeight: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}

const Book = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.book.imageLinks.smallThumbnail}
        title="book image"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.book.title}
        </Typography>
        <Typography component="p">
          {props.book.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

Book.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Book);