// ButtonDashboard.jsx
import React, { memo } from 'react'

const ButtonDashboard = ({ link }) => {
    return (
        <div className='flex-shrink max-w-full px-0 w-full sm:w-1/2 lg:w-1/4 mb-6'>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div className='flex items-center justify-between pt-6 px-6 relative text-sm font-semibold'>
                    {link.label}
                    <div className='ltr:float-right rtl:float-left text-green-500'>
                        {link.percentage}
                    </div>
                </div>
                <div className='flex flex-row justify-between px-6 py-4'>
                    <div className={link.className}>
                        {link.icon}
                    </div>
                    <div className='self-center text-3xl'>
                        {link.number}
                    </div>
                </div>
                <div className='px-6 pb-6'>
                    <a href={link.path} className='hover:text-indigo-500 text-sm'>
                        View more...
                    </a>
                </div>
            </div>
        </div>
    )
}

export default memo(ButtonDashboard)
