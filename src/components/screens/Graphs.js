import React from "react";
// import Circular from "../Charts/Circular";
import BarChart from "../Charts/BarChart";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
const Graphs = ({ setSwitcher, values }) => {
  const handleChange = () => {
    setSwitcher("table");
  };

  return (
    <div>
      <center>
        <h1>FaceSnap Analysis</h1>
        <Button variant="contained" color="primary" onClick={handleChange}>
          Go Back
        </Button>
      </center>
      <br></br>
      <br></br>
      <Card className="graph-card">
        <BarChart values={values} />
      </Card>
      <br></br>
      <br></br>
      {/* <Circular /> */}
      <br></br>
    </div>
  );
};

export default Graphs;
