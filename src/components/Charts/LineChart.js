import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["Neutral", "Happy", "Sad", "Angry", "TBD", "TBD"],
          datasets: [
            {
              label: "Mood",
              data: [12, 19, 3, 4, 5, 6],
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

export default LineChart;
