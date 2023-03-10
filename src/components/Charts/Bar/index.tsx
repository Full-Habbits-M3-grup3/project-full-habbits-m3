import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "./styles";
Chart.defaults.font.family = "Nunito";

// interface iDataChart {
//   chartData: {
//     date: string;
//     hour: number;
//   };
// }

const options = {
  responsive: true,
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
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const BarChart = ({ chartData }) => {
  return (
    // <ChartContainer>
    <Bar data={chartData} options={options} />
    // </ChartContainer>
  );
};
export { BarChart };