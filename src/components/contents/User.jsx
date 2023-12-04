import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/DataTable';
import SearchBox from 'components/controls/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import ModalUser from 'components/controls/modals/ModalUser';
import { UserContext } from 'contexts/UserContext';
import { GlobalContext } from 'contexts/GlobalContext';

const User = () => {
    const { setContextType } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Username', 'Password', 'Email', 'Gender', 'Status'];
    const data = [
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
    ];

    useEffect(() => {
        setContextType('user');
    }, []);

    useEffect(() => {
        if (isDataChange) {
            // Load userContext.data here ...
            // After loading data, set DataChange back to false
            setDataChange(false);
        } 
    }, [isDataChange, setDataChange]);      

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm) {
                handleSearchData(searchTerm);
            }
        }, 500); // Delay in milliseconds 

        return () => clearTimeout(timeoutId);
    }, [searchTerm, handleSearchData]);

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between py-5'>
                <SearchBox onSearch={setSearchTerm} />
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'user'} ModalComponent={ModalUser} />
                    <ButtonExport onClick={handleExportData}/>
                </div>
            </div>
            {/* Chỗ này truyền data bằng userContext.data */}
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default User;
