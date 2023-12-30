import React from 'react'
import ButtonDashboard from '../controls/buttons/ButtonDashboard'
import BarChart from '../controls/charts/BarChart'
import PieChart from '../controls/charts/PieChart'
import { DASHBOARD_BUTTON_LINKS } from 'components/consts/DashboardButton'

const Dashboard = () => {
    const classTitle = 'text-xl font-bold ml-1 py-5'
    const labelsBarChart = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataBarChart = [22, 19, 57, 5, 2, 3, 20, 12, 55, 60, 12, 25];

    const labelPieChart = ['Male', 'Female', 'Others'];
    const dataPieChart = [57, 29, 17];

    return (
        <div className='flex-shrink max-w-full w-full '>
            <div className={classTitle}>Statistic</div>
            <div className='flex items-center justify-between gap-10'>
                {DASHBOARD_BUTTON_LINKS.map((link, index) => <ButtonDashboard key={index} link={link}/>)}
            </div>
            <div className={`${classTitle} pt-0`}>Charts</div>
            <div className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:gap-12'>
                <BarChart data={dataBarChart} labels={labelsBarChart} />
                <PieChart data={dataPieChart} labels={labelPieChart} />
            </div>
        </div>
    )
}

export default Dashboard
