import React, { useState } from 'react'

const ButtonUpdate = ({ModalComponent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleOpenModal} className='bg-blue-600 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-blue-800'>
            <i className="ri-edit-box-line mr-2"/> Edit 
            </button>
            {isOpen && <ModalComponent onClose={handleCloseModal} />}
        </>
    )
}

export default ButtonUpdate