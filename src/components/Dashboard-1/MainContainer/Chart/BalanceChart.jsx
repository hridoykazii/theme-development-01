import { useState } from "react";
import Chart from "react-apexcharts";

const BalanceChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '70%',
          background: 'transparent',
          labels: {
            show: false,
            name: {
              show: false,
              fontSize: '22px',
              color: '#FFFFFF'
            },
            value: {
              show: true,
              fontSize: '16px',
              color: '#FFFFFF',
            },
            total: {
              show: false,
              label: 'RTP',
              color: '#FFFFFF',
              fontSize: '18px',
              formatter: () => '98%'
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'diagonal1',
        shadeIntensity: 0.5,
        gradientToColors: ['#A4E4FF', '#D29FF9'], 
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 100]
      }
    },
    colors: ['#D29FF9', '#E4E4E7'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['#fff'],
      curve: 'smooth'
    }
  });

  // eslint-disable-next-line no-unused-vars
  const [series, setSeries] = useState([80, 20]);

  return (
    <div className="">
          <Chart
            options={options}
            series={series}
            type="donut"
            width="300"
          />
    </div>
  );
};

export default BalanceChart;
