import React, { useState, useEffect } from "react";
// import { useStateValue } from "../StateProvider";
import { Button } from "@material-ui/core";
import firebase from "firebase";
// import { Redirect } from "react-router-dom";

const Profile = ({ history }) => {
  // const [{ user }, dispatch] = useStateValue();
  const [profile, setProfile] = useState({});
  const auth = firebase.auth();
  /* eslint-disable */
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      console.log(values);
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
      console.log(profile);
    }
  }, []);

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem("user-state");
    localStorage.removeItem("user-details");
    history.push("/");
    window.location.reload(false);
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      {/* <div className="row-div">
        <center>
          <img className="user-image" src={user.photoURL} />
        </center>
        <div className="form-div">
          <center>
            <h1> {user.displayName}</h1>
            <h1> {user.email}</h1>
          </center>
        </div>
      </div> */}
      <div className="row-div">
        <center>
          <img className="user-image" src={profile.photoURL} alt="xyz" />
        </center>
        <div className="form-div">
          <center>
            <h1> {profile.displayName}</h1>
            <h1> {profile.email}</h1>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Profile;
