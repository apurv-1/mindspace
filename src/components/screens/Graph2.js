import React from "react";
import Circular from "../Charts/Circular";
import Card from "@material-ui/core/Card";
// import BarChart from "../Charts/BarChart";
import Button from "@material-ui/core/Button";
const Graph2 = ({ setSwitcher, values }) => {
  const handleChange = () => {
    setSwitcher("table");
  };

  return (
    <div>
      <center>
        <h1>WriteYourMood Analysis</h1>
        <Button variant="contained" color="primary" onClick={handleChange}>
          Go Back
        </Button>
      </center>

      <br></br>
      <br></br>
      <Card className="graph-card">
        <Circular values={values} />
      </Card>
      {/* <Circular /> */}
      <br></br>
    </div>
  );
};

export default Graph2;
