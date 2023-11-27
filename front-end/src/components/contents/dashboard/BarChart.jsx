import React, { useEffect, useMemo, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    // Tính toán stepSize
    const stepSize = useMemo(() => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        return Math.round((max - min) / 4);
    }, [data]);
    
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
                        backgroundColor: 'rgb(145, 107, 206)',
                        barThickness: 50, 
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
                                display: false, 
                            },
                        },
                        y: {
                            border: {
                                dash: [10, 12],
                                color: 'black',
                            },
                            ticks: {
                                font: {
                                    size: 20,
                                },
                                stepSize: stepSize,
                            },
                            grid: {
                                display: true,
                                color: 'rgba(0, 0, 0, 0.3)',
                            },
                        },
                    }
                }
            });
    
            return () => newChartInstance.destroy();
        }
    }, [data, labels, stepSize]);    

    // Return value for Component
    return (
        <canvas ref={chartRef} className='bg-white rounded-xl max-h-460px max-w-screen px-10 pt-16 pb-5' />
    );
};

export default BarChart;
