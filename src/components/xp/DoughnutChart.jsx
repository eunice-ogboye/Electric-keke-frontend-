import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Tooltip, Title);

const DoughnutChart = ({ chartData }) => {
  const labels = chartData.map((item) => item.title);
  const cuts = chartData.map((item) => item.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "income",
        data: cuts,
        backgroundColor: ["#F68D2B", "#344BFD", "#F4A79D"],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={chartOptions} />;
};

export default DoughnutChart;
