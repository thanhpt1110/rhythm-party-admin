import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import ModalUser from 'components/controls/modals/ModalUser';
import { UserContext } from 'contexts/UserContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';

const User = () => {
    const { setContextType, selectedItems, setSelectedItems } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Username', 'Email', 'Gender', 'Status'];
    const data = [
        { Username: 'asghunter', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
        { Username: 'asghunter', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available' },
        { Username: 'thanhpt110', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned' },
    ];

    useEffect(() => {
        setContextType('user');
        setSelectedItems([]);
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
                <div className='flex items-center gap-3'>
                    <SearchBox onSearch={setSearchTerm} />
                    <span className='text-3xl font-extra-light text-gray-400'>|</span>
                    <ButtonDeleteList />
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'user'} ModalComponent={ModalUser} />
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default User;
