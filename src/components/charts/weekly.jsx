import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  



  // scales: {
  //   x: {
  //     barPercentage: 0.5, // Adjust width of individual bars (0.0 to 1.0)
  //     categoryPercentage: 0.8, // Adjust spacing between categories (bars in groups)
  //   },
  //   y: {
  //     beginAtZero: true,
  //   },
  // },




  responsive: true,
  plugins: {
    datalabels: {
   display:false
  },
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Total Credits',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
      backgroundColor: 'rgba(45, 96, 255, 1)',
      borderWidth: 2,
      borderRadius: 30,
      barPercentage: 0.45,
      categoryPercentage: 1,
      barThickness: 18, 
    },
    {
      label: 'Earned Credits',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
        backgroundColor:
            'rgba(22, 219, 204, 1)',
      borderWidth: 2,
      borderRadius: 30,
      barPercentage: 0.45,
      categoryPercentage: 1,
      barThickness: 18, 
    },
    {
      label: 'Total Savings',
      data: labels.map(() => faker.number.int({ min: 200, max: 500 })),
        backgroundColor:'#ff6600',
            // '#FF4D00',
      borderWidth: 2,
      borderRadius: 30,
      barPercentage: 0.45,
      categoryPercentage: 1,
      barThickness: 18, 
    },
  ],
};

function WeeklyChart() {
  return <Bar height={150} options={options} data={data} />;
}

export default WeeklyChart;