import { GlobalContext } from 'contexts/GlobalContext';
import React, { memo, useContext, useState } from 'react'
import Swal from 'sweetalert2';
import ModalDeleteList from '../modals/ModalDeleteList';

const ButtonDeleteList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedItems } = useContext(GlobalContext);

    const handleOpenModal = () => {
        if (selectedItems.length !== 0) {
            setIsOpen(true);
        } else {
            Swal.fire({
                title: "",
                text: "Please choose at least one item to proceed!",
                icon: "error"
            });
        }
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div>
                <i onClick={handleOpenModal} className="ri-delete-bin-6-line text-2xl text-red-600 cursor-pointer" />
            </div>
            {isOpen && <ModalDeleteList onClose={handleCloseModal} />}
        </>
    )
}

export default memo(ButtonDeleteList)
