import React from 'react';

const Support = () => {
  return (
    <div className='flex flex-col py-4 h-full'>
        <div className='mb-4 w-full'>
            <div className='text-xl font-bold mb-2'>
                Title
            </div>
            <div>
                <input type="text" name="Title" id="title" className='w-full p-2 border-2 border-gray-300 rounded focus:border-violet-700' />
            </div>
        </div>
        <div className='flex flex-col mb-4 w-full h-full'>
            <div className='text-xl font-bold mb-2'>
                Content
            </div>
            <div className='h-full '>
                <textarea className='w-full h-full p-2 border-2 border-gray-300 rounded resize-none focus:border-violet-700'></textarea>
            </div>
        </div>
        <div>
            <input type="submit" value="Submit" className='px-7 py-3 bg-violet-800 hover:cursor-pointer hover:bg-violet-700 text-white font-bold rounded-lg transition duration-300 ease-in-out' />
        </div>
    </div>
  )
}

export default Support;
