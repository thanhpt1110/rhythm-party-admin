import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext } from 'react'

const ButtonApprove = ({ item }) => {
    const { setCurrentItem } = useContext(GlobalContext);

    const handleApproveSong = () => {
        setCurrentItem(item);
    }

    return (
        <button onClick={handleApproveSong} className=' bg-green-600 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-green-700'>
            <i className="ri-checkbox-circle-fill xl:mr-2" />
            <span className='hidden xl:inline'>Approve</span>
        </button>
    )
}

export default memo(ButtonApprove)