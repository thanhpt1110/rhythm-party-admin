import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext, useState } from 'react'

const ButtonUpdate = ({ ModalComponent, item }) => {
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
            <button onClick={handleOpenModal} className='bg-blue-600 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-blue-800'>
                <i className="ri-edit-box-line xl:mr-2" />
                <span className='hidden xl:inline'>Edit</span>
            </button>
            {isOpen && <ModalComponent onClose={handleCloseModal} />}
        </>
    )
}

export default memo(ButtonUpdate)