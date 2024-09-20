import Chart from 'react-apexcharts';

const BarChart = () => {
    const options = {
        series: [{
            name: 'Inflation',
            data: [2.1, 3.1, 4.0, 2.1],
        }],
        chart: {
            type: 'bar',
            toolbar: {
                tools: {
                    download: false
                }
            },
            borderWidth: 0
        },
        colors: ["#A977E9", "#A977E9", "#5B4BD2", "#A977E9"],
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
                endingShape: "rounded",
                borderRadius: 5,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last"
            },
        },
        dataLabels: {
            enabled: false,
            formatter: function(val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#F0EEFA"]
            }
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: ["18", "19", "20", "21"],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: false,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function(val) {
                    return val + "%";
                }
            },
        },
        title: {
            text: '',
            floating: false,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        },
        tooltip : {
            enabled: false
        }
    };

    return (
        <div id="chart">
            <Chart options={options} series={options.series} type="bar" height={120} />
        </div>
    );
};

export default BarChart;
