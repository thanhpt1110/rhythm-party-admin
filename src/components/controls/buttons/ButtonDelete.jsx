import React, { useState } from 'react'

const ButtonDelete = ({ModalComponent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleOpenModal} className='bg-red-600 text-white rounded-lg border border-zinc-100 px-4 py-2 hover:bg-red-700'>
            <i className="ri-delete-bin-6-line mr-2"/> Delete
            </button>
            {isOpen && <ModalComponent onClose={handleCloseModal} />}
        </>
    )
}

export default ButtonDelete