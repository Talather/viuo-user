import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

function WeeklyChart({ stats }) {
  const data = useMemo(() => {
    if (stats?.chartData) {
      const labels = stats.chartData.labels;
      return {
        labels,
        datasets: [
          {
            label: "Total Credits Earned",
            data: stats?.chartData?.datasets?.totalCreditsEarned,
            backgroundColor: "rgba(45, 96, 255, 1)",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
          {
            label: "Total Savings",
            data: stats?.chartData?.datasets?.totalSavings,
            backgroundColor: "rgba(22, 219, 204, 1)",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
          {
            label: "Total Bill payment",
            data: stats?.chartData?.datasets?.totalBillPayments,
            backgroundColor: "#ff6600",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
        ],
      };
    } else {
      const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      return {
        labels,
        datasets: [
          {
            label: "Total Credits Earned",
            data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
            backgroundColor: "rgba(45, 96, 255, 1)",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
          {
            label: "Total Savings",
            data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
            backgroundColor: "rgba(22, 219, 204, 1)",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
          {
            label: "Total Bill payment",
            data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
            backgroundColor: "#ff6600",
            borderWidth: 2,
            borderRadius: 30,
            barPercentage: 0.45,
            categoryPercentage: 1,
            barThickness: 18,
          },
        ],
      };
    }
  }, [stats]);

  return <Bar height={150} options={options} data={data} />;
}

export default WeeklyChart;
