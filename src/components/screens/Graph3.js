import React from "react";
import Button from "@material-ui/core/Button";
import PieChart from "../Charts/PieChart";
import Card from "@material-ui/core/Card";
const Graph3 = ({ setSwitcher, values }) => {
  const handleChange = () => {
    setSwitcher("table");
  };
  return (
    <div>
      <center>
        <h1>Cognitive Analysis</h1>
        <Button variant="contained" color="primary" onClick={handleChange}>
          Go Back
        </Button>
      </center>
      <br></br>
      <br></br>
      <Card className="graph-card">
        <PieChart values={values} />
      </Card>
      <br></br>
      <br></br>
    </div>
  );
};

export default Graph3;
