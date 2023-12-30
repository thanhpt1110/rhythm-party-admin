import React, { useContext, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { UserContext } from 'contexts/UserContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';

const ModalUser = ({ onClose }) => {
    const { handleSaveData } = useContext(UserContext);
    const { modalMode } = useContext(GlobalContext);

    const [username, setUsername] = useState('username')
    const [email, setEmail] = useState('email@gmail.com')
    const [gender, setGender] = useState('male')
    const [status, setStatus] = useState('Available')

    const handleSave = () => {
        handleSaveData();
        onClose();
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div onClick={onClose} className='fixed inset-0 bg-gray-900 opacity-50'></div>
            <div className='modal-container bg-white w-[25%] rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-center items-center mb-2 gap-2'>
                    <h2 className='text-2xl font-bold'>User information</h2>
                    <i className='ri-information-line text-2xl text-blue-600'></i>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>Username</p>
                            <span className='text-red-600'>*</span>
                        </div>
                        <input
                            className={`w-full text-base font-normal focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            placeholder={username}
                            value={username}
                            onChange={e => { setUsername(e.target.value) }}
                            required
                            readOnly={modalMode === 'info'}
                        />
                    </div>
                    <div>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>Email</p>
                            <span className='text-red-600'>*</span>
                        </div>
                        <input
                            className={`w-full text-base font-normal focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            placeholder={email}
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                            required
                            readOnly={modalMode === 'info'}
                        />
                    </div>
                    <div>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>Gender</p>
                            <span className='text-red-600'>*</span>
                        </div>
                        <select
                            className={`w-full text-base font-normal focus:ring-0 focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            value={gender}
                            onChange={e => { setGender(e.target.value) }}
                            required
                            disabled={modalMode === 'info'}
                        >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>

                    <div>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>Status</p>
                            <span className='text-red-600'>*</span>
                        </div>
                        <select
                            className={`w-full text-base font-normal focus:ring-0 focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            value={status}
                            onChange={e => { setStatus(e.target.value) }}
                            required
                            disabled={modalMode === 'info'}
                        >
                            <option value="Available">Available</option>
                            <option value="Banned">Banned</option>
                        </select>
                    </div>
                </div>
                <div className="bg-white mt-5 flex justify-center gap-2">
                    {modalMode !== 'info' && <ButtonSave onClick={handleSave}>Save</ButtonSave>}
                    {modalMode !== 'info' && <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>}
                    {modalMode === 'info' && <ButtonOk onClick={onClose}>OK</ButtonOk>}
                </div>
            </div>
        </div>
    );
};

export default ModalUser;
