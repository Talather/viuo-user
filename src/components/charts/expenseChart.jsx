import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const defaultData = {
  labels: ["Gas", "Electricity", "Internet", "Others"],
  datasets: [
    {
      label: "% of Payments",
      data: [30, 15, 35, 20],
      backgroundColor: ["#FA00FF", "#1814F3", "#FC7900", "#343C6A"],
      borderColor: "white",
      borderWidth: 12,
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        const total = context.dataset.data.reduce(
          (sum, val) => sum + Number(val),
          0
        );
        const percentage = ((value / total) * 100).toFixed(1) + "%";
        return percentage;
      },
      color: "#fff",
      font: {
        size: 14,
        weight: "bold",
      },
    },
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};

function ExpenseChart({ stats, period }) {
  const chartData = useMemo(() => {
    if (stats?.billsBreakdown) {
      let breakdownData;
      // Choose the data based on the period
      if (period === "month") {
        breakdownData = stats.billsBreakdown.month;
      } else if (period === "year") {
        breakdownData = stats.billsBreakdown.year;
      }

      if (breakdownData?.labels?.length > 0) {
        return {
          labels: breakdownData.labels,
          datasets: [
            {
              label: `% of Payments (${period.value})`,
              data: breakdownData.data,
              backgroundColor: ["#FA00FF", "#1814F3", "#FC7900", "#343C6A"],
              borderColor: "white",
              borderWidth: 12,
            },
          ],
        };
      }
    }
    return defaultData;
  }, [stats, period]);

  return <Pie data={chartData} options={options} />;
}

export default ExpenseChart;
