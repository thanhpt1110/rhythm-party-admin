import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PieChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels,
                datasets: [{
                    label: 'Users',
                    data,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: { font: { size: 20 } },
                        position: 'bottom'
                    }
                },
            }
        });

        return () => chartInstance.destroy();
    }, [data, labels]);

    return (
        <div className='relative max-w-fit'>
            <div className='absolute text-xl text-violet-900 font-bold px-10 py-4'>
                Pie Chart
            </div>
            <div className='absolute right-12 top-4 border border-violet-900 rounded-md px-5 py-1 cursor-pointer'>
                <div className='text-violet-900'>
                    2023
                </div>
            </div>
            <canvas ref={chartRef} className='bg-white rounded-xl max-h-460px px-10 pt-16 pb-5' />
        </div>
    )
};

export default PieChart;
