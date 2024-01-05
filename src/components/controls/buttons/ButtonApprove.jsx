import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext, useState } from 'react'
import ModalApproval from '../modals/ModalApproval';

const ButtonApprove = ({ item }) => {
    const { setModalMode, setCurrentItem } = useContext(GlobalContext);
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
            <button onClick={handleOpenModal} className='bg-green-700 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-green-600'>
                <i className="ri-checkbox-circle-fill xl:mr-2" />
                <span className='hidden 2xl:inline'>Approve</span>
            </button>
            {isOpen && <ModalApproval onClose={handleCloseModal} />}
        </>
    )
}

export default memo(ButtonApprove)