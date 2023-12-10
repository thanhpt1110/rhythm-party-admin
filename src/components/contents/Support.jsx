import React from 'react';

const Support = () => {
  return (
    <div className='flex flex-col py-4'>
        <div className='mb-4 w-full'>
            <div className='text-lg font-bold mb-2'>
                Title
            </div>
            <div>
                <input type="text" name="Title" id="title" className='w-full p-2 border-2 border-gray-300 rounded' />
            </div>
        </div>
        <div className='flex-1 mb-4 w-full'>
            <div className='text-lg font-bold mb-2'>
                Content
            </div>
            <div>
                <textarea className='w-full h-full p-2 border-2 border-gray-300 rounded'></textarea>
            </div>
        </div>
        <div>
            <input type="submit" value="Submit" className=' w-40 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out' />
        </div>
    </div>
  )
}

export default Support;
