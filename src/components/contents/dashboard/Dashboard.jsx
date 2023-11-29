import React from 'react'
import ButtonDashboard from './ButtonDashboard'
import BarChart from './BarChart'
import PieChart from './PieChart'

const Dashboard = () => {
    const classTitle = 'text-xl font-bold ml-1 py-5'
    const data = [27, 19, 57, 5, 2, 3];
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const buttons = [1, 2, 3, 4];

    return (
        <div className='flex-shrink max-w-full w-full '>
            <div className={classTitle}>Statistic</div>
            <div className='flex items-center justify-between gap-10'>
                {buttons.map((_, index) => <ButtonDashboard key={index} />)}
            </div>
            <div className={`${classTitle} pt-0`}>Charts</div>
            <div className='flex flex-row'>
                <div className='flex-1'>
                <BarChart data={data} labels={labels} />

                </div>
                <PieChart data={data} labels={labels} />
            </div>
        </div>
    )
}

export default Dashboard
