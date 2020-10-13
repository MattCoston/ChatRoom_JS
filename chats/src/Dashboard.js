import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
      <Typography variant="h3" component="h3">
        Chat App
      </Typography>
      <Typography component="h">
        Topic placeholder
      </Typography>
      </Paper>
    </div>
  );
}
