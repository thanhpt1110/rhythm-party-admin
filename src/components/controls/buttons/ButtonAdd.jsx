import React, { memo, useState } from 'react'

const ButtonAdd = ({ label, ModalComponent}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (    
        <>
            <button onClick={handleOpenModal} className='bg-violet-950 text-white rounded-lg border border-gray-800 px-6 py-3 hover:bg-violet-900'>
                <i className="ri-add-line mr-2" />
                <span className='hidden lg:inline'>Add {label}</span>
            </button>
            {isOpen && <ModalComponent onClose={handleCloseModal}/>}
        </>
    )
}

export default memo(ButtonAdd)