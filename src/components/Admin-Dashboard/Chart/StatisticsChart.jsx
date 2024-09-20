import { useTheme } from '@emotion/react';
import Chart from 'react-apexcharts';

const StatisticsChart = () => {
    const theme = useTheme();
  const options = {
    chart: {
      type: 'rangeBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '15px',
        borderRadius: 7,
        colors: {
          ranges: [
            {
              from: 1,
              to: 3,
              color: 'rgba(90,74,210,1)'
            },
            {
              from: 2,
              to: 5,
              color: 'rgba(146,118,241,1)s'
            },
            {
              from: 3,
              to: 6,
              color: 'rgba(90,74,210,1)'
            },
            {
              from: 4,
              to: 7,
              color: 'rgba(146,118,241,1)'
            }
          ]
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'numeric',
      labels: {
        style: {
          colors: `${theme.palette.text.default}` 
        }
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: `${theme.palette.text.default}` 
        }
      },
      axisBorder: {
        show: false
      }
    },
    grid: {
      borderColor: `${theme.palette.primary.grid}` 
    },
  };

  const series = [{
    name: 'Series 1',
    data: [
      { x: 'Fri', y: [1, 3] },
      { x: 'Thu', y: [4, 10] },
      { x: 'Wed', y: [3, 6] },
      { x: 'Tue', y: [4, 7] },
      { x: 'Mon', y: [7, 10] },
    ],
  }];

  return (
    <div>
      <Chart options={options} series={series} type="rangeBar" height={270} />
    </div>
  );
};

export default StatisticsChart;
