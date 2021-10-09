import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Circular = ({ values }) => {
  const [moods, setMoods] = useState();
  const [val, setVal] = useState();
   /* eslint-disable */
  useEffect(() => {
    const change = () => {
      let new_lables = [];
      values.sentiments.map((obj) => {
        let info = obj;
        new_lables.push(info);
        console.log(new_lables);
      });
      setMoods(new_lables);
      let new_datas = [];
      values.values.map((obj) => {
        let info = obj;
        new_datas.push(info);
      });
      setVal(new_datas);
    };
    change();
  }, []);

  return (
    <div>
      <Doughnut
        data={{
          labels: moods,
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

export default Circular;
