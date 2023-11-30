import React from 'react'

const SearchBox = () => {
    return (
        <div className='relative'>
            <i className="ri-search-line absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-2xl" />
            <input type="text" name="search" id="search"
                placeholder='Search...'
                className='text-md pl-14 py-3 px-5 w-80 focus:outline-none focus:border-violet-950 active:outline-none border border-zinc-400 rounded-lg' />
        </div>
    )
}

export default SearchBox