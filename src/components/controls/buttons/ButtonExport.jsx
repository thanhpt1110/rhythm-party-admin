import React, { memo } from 'react'

const ButtonExport = ({ onClick }) => {
    return (
        <button onClick={onClick}
            className='bg-zinc-100 rounded-lg text-black border border-gray-400 px-[18px] py-3 hover:bg-gray-200'>
            <i className="ri-file-download-line mr-1" /> Export
        </button>
    )
}

export default memo(ButtonExport)