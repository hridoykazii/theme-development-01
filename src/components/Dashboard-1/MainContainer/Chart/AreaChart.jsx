
import { Box } from "@mui/material";
import Chart from "chart.js/auto";
import { memo, useEffect, useRef } from "react";

const AreaChart = () => {
  const chartRef = useRef(null);

  // Dummy data for demonstration
  const performanceChartData = {
    data: [0, 50, 20, 70],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    const gradientBorderPlugin = {
      id: 'gradientBorder',
      beforeDatasetsDraw(chart, args, options) {
        const { ctx, chartArea: { left, right, top, bottom }, scales: { x, y } } = chart;
        chart.data.datasets.forEach((dataset) => {
          if (dataset.type === "line" && dataset.borderColor === "#FFB9B7") {
            const gradient = ctx.createLinearGradient(left, top, right, bottom);
            gradient.addColorStop(0, '#FFB9B7'); // Start color
            gradient.addColorStop(1, '#5A4AD2'); // End color

            ctx.save();
            ctx.lineWidth = dataset.borderWidth;
            ctx.strokeStyle = gradient;
            ctx.beginPath();

            dataset.data.forEach((point, index) => {
              const xPos = x.getPixelForValue(index);
              const yPos = y.getPixelForValue(point);
              if (index === 0) {
                ctx.moveTo(xPos, yPos);
              } else {
                ctx.lineTo(xPos, yPos);
              }
            });

            ctx.stroke();
            ctx.restore();
          }
        });
      }
    };

    Chart.register(gradientBorderPlugin);

    new Chart(ctx, {
      type: "line",
      data: {
        labels: performanceChartData.data.map((_, index) => String(index + 1)),
        datasets: [
          {
            label: "Performance",
            tension: 0.4,
            borderWidth: 2,
            borderColor: "#9276F1", // Base color for hover and other effects
            fill: true,
            data: performanceChartData.data,
            maxBarThickness: 6,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#9276F1",
            backgroundColor: function (context) {
              var chart = context.chart;
              var { ctx, chartArea } = chart;

              if (!chartArea) {
                // This case happens on initial chart creation
                return;
              }

              var gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
              gradient.addColorStop(0, 'rgba(90, 74, 210, 0.5)');  // Semi-transparent border color
              gradient.addColorStop(1, 'rgba(138, 112, 237, 0.5)');  // Semi-transparent dark color

              return gradient;
            },
            hoverBackgroundColor: function (context) {
              return context.dataset.borderColor;
            }
          }
        ]
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
            radius: 2,
            hoverRadius: 3,
            hoverBackgroundColor: '#25293D',
            hoverBorderColor: 'transparent',
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
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

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (existingChart) {
        existingChart.destroy();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="w-[100px] h-[80px]">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default memo(AreaChart);
