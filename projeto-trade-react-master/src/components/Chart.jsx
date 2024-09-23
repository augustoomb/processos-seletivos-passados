/* eslint-disable react/prop-types */
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
import styles from '../styles/Chart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Dataset',
    },
  },
};

function BarChart(props) {
  const { goals } = props;
  const labels = [
    '0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'];

  const generateForGoals = () => {
    const objForGoals = goals.for.minute;
    const teste = Object.keys(objForGoals).map((item) => (
      objForGoals[item].total
    ));
    return teste;
  };

  const generateAgainstGoals = () => {
    const objAgainstGoals = goals.against.minute;
    const teste = Object.keys(objAgainstGoals).map((item) => (
      objAgainstGoals[item].total
    ));
    return teste;
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'A favor',
        data: generateForGoals(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'blue',
        borderWidth: 1,
      },
      {
        label: 'Contra',
        data: generateAgainstGoals(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'red',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={ styles.chartArea }>
      <Bar options={ options } data={ data } />
    </div>
  );
}

export default BarChart;
