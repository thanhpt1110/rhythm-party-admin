import React, { useContext, useEffect, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { UserContext } from 'contexts/UserContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';
import { toast } from 'react-toastify';
import { getUserInformation } from 'api/UserApi';

const ModalUser = ({ onClose }) => {
    const { handleSaveData, handleLoadItemInformation } = useContext(UserContext);
    const { modalMode, currentItem } = useContext(GlobalContext);

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const [status, setStatus] = useState('Available')

    useEffect(() => {
        const fetchUserInformation = async () => {
            const response = await getUserInformation(currentItem.id);
            const userInformation = response.dataRes.data;

            setDisplayName(userInformation.displayName)
            setEmail(userInformation.email)
            setGender(userInformation.gender)
            setStatus(userInformation.isAvailable ? 'Available' : 'Banned')
        };
        fetchUserInformation();
    }, []);
    

    const handleSave = () => {
        try {
            if (displayName === '') {
                toast.error(`Please enter user's display name!`);
                handleLoadItemInformation();
                console.log(currentItem)
                return;
            }
            if (email === '') {
                toast.error(`Please enter user's email!`);
                return;
            }

            const regex = /^[a-zA-Z0-9]+@gmail\.com$/;
            if (!regex.test(email)) {
                toast.error('Email has to be in format @gmail.com');
                return;
            }   

            const user = {displayName: displayName, email: email, gender: gender, isAvailable: status === 'Available' ? true : false}
            handleSaveData(user);
            toast.success('Save data successful!');
            onClose();
        } catch (error) {
            toast.error(error);
        } 
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
                            <p className='font-bold text-sm'>Display name</p>
                            <span className='text-red-600'>*</span>
                        </div>
                        <input
                            className={`w-full text-base font-normal focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            placeholder={'Tuấn Thành'}
                            value={displayName}
                            onChange={e => { setDisplayName(e.target.value) }}
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
                            placeholder={'user@gmail.com'}
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
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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
