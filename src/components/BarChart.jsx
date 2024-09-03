import React from "react";

import {
  Chart as ChartJs,
  Tooltip,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  // const data = {
  //   labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
  //   datasets: [],
  // };
  return (
    <Bar
      data={{
        labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
        datasets: [
          {
            label: "performance",
            data: [20, 30, 40, 50, 60, 70, 80, "#77"],
            backgroundColor: "#77BB77",
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              callback: function (value, index, values) {
                const labels = [
                  "Low",
                  "Medium",
                  "High",
                  "Very High",
                  "Extreme",
                ];
                return labels[index];
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
