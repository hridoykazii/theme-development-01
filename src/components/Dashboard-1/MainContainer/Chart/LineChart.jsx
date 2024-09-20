import { Box } from "@mui/material";
import Chart from "chart.js/auto";
import { memo, useEffect, useRef } from "react";

const LineChart = () => {
  const chartRef = useRef(null);

  // Dummy data for demonstration
  const performanceChartData = {
    data: [10, 20, 15, 25, 20, 30],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: performanceChartData.data.map((_, index) => String(index + 1)),
        datasets: [
          {
            label: "Performance",
            tension: 0.4,
            borderWidth: 2,
            borderColor: "#5A4AD2",
            data: performanceChartData.data,
            maxBarThickness: 6,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#9276F1", 
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 3,
            hoverBackgroundColor: '#5A4AD2',
            hoverBorderColor: '#5A4AD2',
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: true,
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "#292D44",
            },
            ticks: {
              display: false,
              padding: 0,
              color: "#B2B9BF",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: true,
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "#292D44",
            },
            ticks: {
              display: false,
              color: "#B2B9BF",
              padding: 0,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="w-[100px] h-[80px]">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default memo(LineChart);
