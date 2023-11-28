import React, { useEffect, useMemo, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    const stepSize = useMemo(() => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
        const numSteps = 5; // Number of steps you want on the y-axis

        let step = Math.ceil(range / numSteps / 10) * 10; // Round up to nearest 10

        return step;
    }, [data]);

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: ' Users',
                    data,
                    backgroundColor: 'rgb(145, 107, 206)',
                    borderColor: "rgba(0,0,0,0)",
                    barPercentage: 0.8,
                    categoryPercentage: 0.5,
                }, {
                    label: ' Users',
                    data,
                    backgroundColor: 'rgb(0, 107, 206)',
                    barPercentage: 0.8,
                    categoryPercentage: 0.5,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: { font: { size: 20 } },
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        ticks: { font: { size: 16 } },
                        grid: { display: false },
                        offset: true,
                    },
                    y: {
                        border: { dash: [10, 12], color: 'black' },
                        ticks: { font: { size: 20 }, stepSize },
                        grid: { display: true, color: 'rgba(0, 0, 0, 0.3)' },
                    },
                }
            }
        });

        return () => chartInstance.destroy();
    }, [data, labels, stepSize]);

    return (
        <div className='relative max-w-4xl'>
            <div className='absolute text-xl text-violet-900 font-bold px-10 py-4'>
                Bar Chart
            </div>
            <div className='absolute right-12 top-4 border border-violet-900 rounded-md px-5 py-1 cursor-pointer'>
                <div className='text-violet-900'>
                    2023
                </div>
            </div>
            <canvas ref={chartRef} className='bg-white rounded-xl max-h-460px px-10 pt-16 pb-5' />;
        </div>
    )
};

export default BarChart;
