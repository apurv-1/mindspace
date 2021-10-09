import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
const BarChart = ({ sentiments, values }) => {
  useEffect(() => {
    // if (values) {
    //   let new_series = [];
    //   values.mood.map((obj) => {
    //     let info = {
    //       data: obj,
    //     };
    //     new_series.push(info);
    //   });
    //   console.log(new_series);
    // }
  }, []);

  console.log(values);
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Angry",
            "Disgust",
            "Fear",
            "Happy",
            "Neutral",
            "Sad",
            "Surprise",
          ],
          datasets: [
            {
              label: "Mood",
              // data: [0.5, 0.3, 0.13, 0.94, 0.5, 0.6, 0.2],
              data: [
                values.mood["angry"],
                values.mood["disgust"],
                values.mood["fear"],
                values.mood["happy"],
                values.mood["neutral"],
                values.mood["sad"],
                values.mood["surprise"],
              ],
              // data: [values[0], 10, 123, 32],

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

export default BarChart;
