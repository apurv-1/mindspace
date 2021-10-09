import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Link } from "react-router-dom";
import NewDropDown from "./NewDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "70px",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: "white",
    textDecoration: "none",
  },
  height: {
    maxHeight: "100px",
  },
}));

export default function NewNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.height}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.color}>
              MindSpace
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <Link to="/" className={classes.color}>
                <Button className={classes.color}>Home</Button>
              </Link>

              <Link to="/Profile" className={classes.color}>
                <Button className={classes.color}>Profile</Button>
              </Link>

              <Link to="/Analysis" className={classes.color}>
                <Button className={classes.color}>Analytics</Button>
              </Link>
            </>
          ) : (
            <>
              <NewDropDown />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
