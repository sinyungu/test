import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  image: {
    width: 128,
    height: 164,
  },

  textArea: {
    width: 390,
  },
};
class BookListItem extends Component {
  render() {
    const { book, classes } = this.props;
    // debugger;
    // book.title = "asdasd";
    // console.log(book.title);
    console.log(classes);
    return (
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.image} src={book.imgUrl} />
          </Grid>

          <Grid item className={classes.textArea}>
            <Typography component="h5" variant="h5">
              {book.title}
            </Typography>

            <Typography gutterBottom>{book.author}</Typography>
            <Typography color="textSecondary">{book.introduce}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(BookListItem);
