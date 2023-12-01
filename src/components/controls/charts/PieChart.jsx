import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import ComboBox from '../ComboBox';

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
                    backgroundColor: ['rgb(76, 29, 149)', 'rgb(145, 107, 206)', 'rgb(200, 160, 220)'],
                    borderColor: ['rgb(76, 29, 149)', 'rgb(145, 107, 206)', 'rgb(200, 160, 220)'],
                    borderWidth: 1,
                }]
            },
            options: {  
                responsive: true,
                maintainAspectRatio: false, 
                plugins: {
                    legend: {
                        labels: { font: { size: 16 }, padding: 30, color: 'black'},
                        position: 'bottom'
                    }
                },
            }
        });

        return () => chartInstance.destroy();
    }, [data, labels]);

    return (
        <div className='relative bg-white px-10 py-10 mb-10 rounded-xl shadow-lg h-[400px] 
                        2xl:w-[500px]'>
            <div className='absolute right-10 top-5'>
                <ComboBox options={['2023', '2022']}/>    
            </div>  
            <canvas ref={chartRef} />
        </div>
    )
};

export default PieChart;
