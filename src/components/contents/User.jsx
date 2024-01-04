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
    const { setContextType, setSelectedItems } = useContext(GlobalContext);
    const { userList, handleLoadData, handleSearchData, handleExportData } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Name', 'Email', 'Role', 'Gender', 'Create date'];

    useEffect(() => {
        setContextType('user');
        setSelectedItems([]);
    }, []);

    useEffect(() => {
        console.log('Current data: ', userList)
    }, [userList]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm === '') {
                handleLoadData()
            } else {
                handleSearchData(searchTerm);
            }
        }, 500); // Delay in milliseconds 

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

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
            <DataTable columns={columns} data={userList} />
        </div>
    );
};

export default User;
