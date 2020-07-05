import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.home}
            color="inherit"
            aria-label="menu"
          >
            <a href="/" alt="" className="nava">
              <HomeIcon style={{ fontSize: 30 }} />
            </a>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <a href="/" alt="" className="nava">
              {" "}
              <h3>Genex Future Work</h3>{" "}
            </a>
          </Typography>
          <Button color="inherit" to="/signin">
            <a href="/signin" alt="" className="nava">
              Sign in
            </a>
          </Button>
          <Button color="inherit" to="/signin">
            <a href="/signup" alt="" className="nava">
              Sign up
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
