import React from 'react'

const ButtonDashboard = () => {
    return (
        <div className='flex-shrink max-w-full px-0 w-full sm:w-1/2 lg:w-1/4 mb-6'>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div className='flex items-center justify-between pt-6 px-6 relative text-sm font-semibold'>
                    Total Users
                    <div className='ltr:float-right rtl:float-left text-green-500'>
                        15%
                    </div>
                </div>
                <div className='flex flex-row justify-between px-6 py-4'>
                    <div className='flex items-center justify-center w-14 h-14 rounded-full text-pink-500 bg-pink-100 dark:bg-pink-900 dark:bg-opacity-40 relative text-center'>
                    <i class="ri-user-3-line text-2xl"></i>
                    </div>
                    <div className='self-center text-3xl'>
                        432
                    </div>
                </div>
                <div className='px-6 pb-6'>
                    <a href="#" className='hover:text-indigo-500 text-sm'>
                        View more...
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ButtonDashboard