import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    // Define useEffect function
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const newChartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: ' Users',
                        data: data,
                        backgroundColor: 'rgb(145, 107, 206)'
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 20,
                                }
                            },
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 16,
                                }
                            },
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 20,
                                }
                            },
                        },
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true

                                }
                            }]
                        }
                    }
                });

            return () => newChartInstance.destroy();
        }
    }, [data, labels]);

    // Return value for Component
    return (
        <canvas ref={chartRef} className='bg-white rounded-xl max-h-460px max-w-screen px-10 pt-16 pb-5' />
    );
};

export default BarChart;
