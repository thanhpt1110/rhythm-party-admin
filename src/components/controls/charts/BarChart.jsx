import React, { useEffect, useMemo, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import ComboBox from '../inputs/ComboBox';

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
                    data: data, 
                    backgroundColor: 'rgb(96, 49, 206)',
                    borderColor: "rgba(0,0,0,0)",
                    barPercentage: 0.8,
                    categoryPercentage: 0.6,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                plugins: {
                    legend: {
                        labels: { font: { size: 20 }, color: 'black'},
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        ticks: { font: { size: 16 }, color: 'black'},
                        grid: { display: false },
                        offset: true,
                    },
                    y: {
                        border: { dash: [10, 12], color: 'black' },
                        ticks: { font: { size: 20 }, color: 'black', stepSize },
                        grid: { display: true, color: 'rgba(0, 0, 0, 0.3)' },
                    },
                }
            }
        });

        return () => chartInstance.destroy();
    }, [data, labels, stepSize]);

    return (
        <div className='relative bg-white px-10 pt-20 pb-5 mb-10 rounded-xl shadow-lg
                        h-[400px] 
                        2xl:w-[1000px]'>
            <div className='absolute right-10 top-5'>
                <ComboBox options={['2023', '2022']}/>    
            </div>                   
            {/* <div className='absolute text-xl text-violet-900 font-bold px-10 py-4'>
                Bar Chart
            </div> */}
            <canvas ref={chartRef}/>
        </div>
    )
};

export default BarChart;
