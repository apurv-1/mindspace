import React, { useState, useEffect } from "react";
// import InputField from "./InputComponents/InputField";
import { Button } from "@material-ui/core";
import Postdata from "../../Firebase/cognigitiveapi";
import Swal from "sweetalert2";

const Cognitive = () => {
  const initialValues = {
    mood1: "",
    mood2: "",
    mood3: "",
    mood4: "",
    mood5: "",
  };

  const [values, setValues] = useState(initialValues);
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sentence = [
      "I help my mother every day to become technologically independent that makes me happy.",
      "I lost 10000 in some fraud activity and I felt cheated.",
      "I never thought that she would cheat on me. Not after everything I had done for her.",
      "Everyone in my house is vaccinated and safe, including my mother and father. And I am grateful for that.",
      "My friends mock at me for being so thin.",
    ];
    let date = new Date();
    let category = ["Family", "Financial", "Relationship", "Abuse"];
    let sentiment = ["positive", "negative", "negative", "negative"];
    let values = [40, 20, 20, 20];
    Postdata(
      `${profile.uid}`,
      category,
      sentiment,
      values,
      date.toISOString(),
      sentence
    );
    setShow(true);
    Swal.fire({
      title: "Wow!",
      text: "Response Submitted",
      icon: "success",
    });
    console.log(values);
  };
  // const handleReset = (e) => {
  //   e.preventDefault();
  //   const initialValues = {
  //     mood1: "",
  //     mood2: "",
  //     mood3: "",
  //     mood4: "",
  //     mood5: "",
  //   };
  //   setValues(initialValues);
  // };

  return (
    <div className="container back-img">
      <h1>Cognitive Corrections</h1>
      <center>
        <div>
          <img
            className="cog-image"
            alt=" "
            src="https://image.freepik.com/free-vector/employee-working-office-interior-workplace-thinking-about-success_1150-37491.jpg"
          />
        </div>
      </center>
      {/* <InputField /> */}
      <form>
        <div className="input-bars">
          <input
            className="ip-bar"
            placeholder="Enter Your Thought"
            value={values.mood1}
            onChange={handleInputChange}
            name="mood1"
            label="Mood1"
          />
          <input
            className="ip-bar"
            placeholder="Enter Your Thought"
            value={values.mood2}
            onChange={handleInputChange}
            name="mood2"
            label="Mood2"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood3}
            onChange={handleInputChange}
            name="mood3"
            label="Mood3"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood4}
            onChange={handleInputChange}
            name="mood4"
            label="Mood4"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood5}
            onChange={handleInputChange}
            name="mood5"
            label="Mood5"
          />
        </div>
        <br></br>
        <center>
          <Button
            className="cogni-btn"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={show}
          >
            Submit{" "}
          </Button>
        </center>
        {/* <button onCLick={handleReset} type="reset">
          Reset{" "}
        </button> */}
      </form>
      <br></br>
      <br></br>
    </div>
  );
};

export default Cognitive;
