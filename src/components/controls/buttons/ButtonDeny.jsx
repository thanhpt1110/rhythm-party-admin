import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext, useState } from 'react'
import ModalDeny from '../modals/ModalDeny';

const ButtonDeny = ({ item }) => {
    const { setCurrentItem, setModalMode } = useContext(GlobalContext)
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setCurrentItem(item);
        setModalMode('update');
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleOpenModal} className=' bg-red-700 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-red-600'>
                <i className="ri-indeterminate-circle-fill xl:mr-2" />
                <span className='hidden 2xl:inline'>Deny</span>     
            </button>
            {isOpen && <ModalDeny onClose={handleCloseModal} />}
        </>
    )
}

export default memo(ButtonDeny)