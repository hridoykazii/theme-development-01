import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Chart from "chart.js/auto";
import { memo, useEffect, useRef } from "react";

const AnaliticChart = () => {
  const chartRef = useRef(null);
  const theme = useTheme();

  // Dummy data for demonstration
  const performanceChartData = {
    data1: [10, 20, 15, 25, 20, 30, 20],
    data2: [15, 10, 25, 20, 15, 35, 25],
  };

  const customLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: customLabels,
        datasets: [
          {
            label: "Performance 1",
            tension: 0,
            borderWidth: 2,
            borderColor: "#5A4AD2",
            data: performanceChartData.data1,
            maxBarThickness: 6,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#9276F1",
          },
          {
            label: "Performance 2",
            tension: 0,
            borderWidth: 2,
            borderColor: "rgba(146,118,241,1)",
            data: performanceChartData.data2,
            maxBarThickness: 6,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#85C1E9",
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
            display: true,
            position: "top",
            labels: {
              color: `${theme.palette.text.default}`, // Set label text color here
            },
          },
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 3,
            hoverBackgroundColor: (context) => context.dataset.borderColor,
            hoverBorderColor: (context) => context.dataset.borderColor,
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
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: `${theme.palette.primary.grid}`,
            },
            ticks: {
              display: true,
              padding: 0,
              color: `${theme.palette.text.default}`,
            },
          },
          x: {
            grid: {
              drawBorder: true,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: `${theme.palette.primary.grid}`,
            },
            ticks: {
              display: true,
              color: `${theme.palette.text.default}`,
              padding: 0,
            },
          },
        },
      },
    });
  }, []);

  return (
    <Box className="h-[270px]">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default memo(AnaliticChart);
