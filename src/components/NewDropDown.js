import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "white",
  },
  LinkColor: {
    color: "black",
    textDecoration: "none",
  },
  margin: {
    marginTop: "10",
    backgroundColor: "black",
  },
}));

export default function NewDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.color}
      >
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Button>
      <Menu
        // className={classes.margin}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.LinkColor}>
          <MenuItem className={classes.LinkColor} onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to="/Profile" className={classes.LinkColor}>
          <MenuItem className={classes.LinkColor} onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>
        <Link to="/Analysis" className={classes.LinkColor}>
          <MenuItem onClick={handleClose}>Analytics</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
