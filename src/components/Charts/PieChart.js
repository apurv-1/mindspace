import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
const PieChart = ({ values }) => {
  const [val, setVal] = useState();
  const [category, setCategory] = useState();
  // const [moods, setMoods] = useState();
   /* eslint-disable */
  useEffect(() => {
    const change = () => {
      let new_lables = [];
      values.catgegory.map((obj) => {
        let info = obj;
        new_lables.push(info);
        console.log(new_lables);
      });
      setCategory(new_lables);
      let new_datas = [];
      values.value.map((obj) => {
        let info = obj;
        new_datas.push(info);
      });
      setVal(new_datas);
    };
    change();
  }, []);

  return (
    <div>
      <Pie
        data={{
          labels: category,
          datasets: [
            {
              label: "Mood",
              data: val,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PieChart;
