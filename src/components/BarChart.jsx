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
  return (
    <Bar
      data={{
        labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
        datasets: [
          {
            label: "performance",
            data: [20, 30, 10, 40, 60, 90, 80],
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
                  "#1500",
                  "#3000",
                  "#4500",
                  "#6000",
                  "#7500",
                  "#9000",
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
