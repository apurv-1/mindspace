import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Button } from "@material-ui/core";
import { Postdata } from "../../Firebase/writemood";
import Swal from "sweetalert2";
import "../home.css";

const Writeyourmood = () => {
  const [text, setText] = useState();
  const [status, setStatus] = useState(false);
  const [profile, setProfile] = useState({});
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }

    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (e) => {
    let text = e.target.value;
    setText({ text });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let sentiments = ["angry", "emotional", "stressed"];
    let values = [60, 30, 10];
    let date = new Date();
    Postdata(`${profile.uid}`, sentiments, values, date.toISOString());
    console.log(text);
    setStatus(true);

    Swal.fire({
      title: "Wow!",
      text: "Response Submitted",
      icon: "success",
    });
  };
  return (
    <div className="container">
      <center>
        <h1>Write Your Mood</h1>
        <h3>Pen down your soul and calm down your mind.</h3>
        <h2>
          <Moment format="DD MMMM YYYY" withTitle>
            {date}
          </Moment>
        </h2>
      </center>
      <form>
        <center>
          <div class="form-group">
            <textarea
              placeholder="Write Your mood here..."
              onChange={handleChange}
              className="text-box"
              id="exampleFormControlTextarea1"
              rows="15"
              cols="13"
            ></textarea>
          </div>
          <br></br>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={status}
          >
            Submit
          </Button>
        </center>
      </form>
    </div>
  );
};

export default Writeyourmood;
