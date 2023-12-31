import React, { useContext, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { RoomContext } from 'contexts/RoomContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';
import { toast } from 'react-toastify';

const ModalRoom = ({ onClose }) => {
    const { handleSaveData } = useContext(RoomContext);
    const { modalMode } = useContext(GlobalContext);

    const handleSave = () => {
        try {
            handleSaveData();
            toast.success('Save data successful!');
        } catch (error) {
            toast.error(error);
        } finally {
            onClose();
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div onClick={onClose} className='fixed inset-0 bg-gray-900 opacity-50'></div>
            <div className='modal-container bg-white w-auto rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold '>Deleting item</h2>
                </div>
                <p className=' font-normal justify-center text-base'>You are about to delete this item. Are you sure?</p>
                <div className="bg-gray-50 px-4 py-3 flex justify-center gap-2">
                    {modalMode !== 'info' && <ButtonSave onClick={handleSave}>Save</ButtonSave>}
                    {modalMode !== 'info' && <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>}
                    {modalMode === 'info' && <ButtonOk onClick={onClose}>OK</ButtonOk>}
                </div>
            </div>
        </div>
    );
};

export default ModalRoom;
