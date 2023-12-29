import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext, useState } from 'react'

const ButtonInfo = ({ ModalComponent, item }) => {
    const { setModalMode, setCurrentItem } = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setCurrentItem(item);
        setModalMode('info');
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleOpenModal} className='bg-white-600 text-blue-700'>
                <i className="ri-information-line text-2xl xl:mr-2" />
            </button>
            {isOpen && <ModalComponent onClose={handleCloseModal} />}
        </>
    )
}

export default memo(ButtonInfo)
