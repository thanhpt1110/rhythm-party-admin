import React from 'react'
import ButtonDashboard from './ButtonDashboard'
import BarChart from './BarChart'
import classNames from 'classnames'

const Dashboard = () => {
    const classTitle = 'text-xl font-bold ml-1 py-5'
    const data = [27, 19, 3, 5, 2, 3];
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    return (
        <div>
            <div className='flex-shrink max-w-full w-full'>
                <div className={classTitle}>
                    Statistic
                </div>
                <div className='flex items-center justify-between gap-10'>
                    <ButtonDashboard />
                    <ButtonDashboard />
                    <ButtonDashboard />
                    <ButtonDashboard />
                </div>
                <div className={classNames(classTitle, 'pt-0')}>
                    Charts
                </div>
                <div className='relative'>
                    <div className='absolute text-xl font-bold px-10 py-4'>
                        Bar Chart
                    </div>
                    <BarChart data={data} labels={labels} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard