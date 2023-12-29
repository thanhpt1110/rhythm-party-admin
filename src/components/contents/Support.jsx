import React, { useState } from 'react';

const Support = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        // Xử lý dữ liệu title và content ở đây
        setTitle('');
        setContent('');
        alert('Submit support successful');
    }

    return (
        <div className='flex flex-col py-4 h-full'>
            <div className='mb-4 w-full'>
                <div className='text-xl font-semibold mb-2'>
                    Title
                </div>
                <div>
                    <input
                        type="text"
                        name="Title"
                        id="title"
                        className='w-full p-2 border-2 border-gray-300 rounded focus:border-violet-700'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-col mb-4 mt-6 w-full h-full'>
                <div className='text-xl font-semibold mb-2'>
                    Description
                </div>
                <div className='h-full '>
                    <textarea
                        className='w-full h-full p-2 border-2 border-gray-300 rounded resize-none focus:border-violet-700'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div>
                <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Submit"
                    className=' mt-6 px-7 py-3 bg-violet-800 hover:cursor-pointer hover:bg-violet-700 text-white font-bold rounded-lg transition duration-300 ease-in-out'
                />
            </div>
        </div>
    )
}

export default Support;
