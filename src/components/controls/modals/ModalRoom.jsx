import React, { useContext, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { RoomContext } from 'contexts/RoomContext';

const ModalRoom = ({ onClose }) => {
    const { handleSaveData } = useContext(RoomContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        handleSaveData();
        onClose();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="mt-2">
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <ButtonSave onClick={handleSave}>Save</ButtonSave>
                        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalRoom;
