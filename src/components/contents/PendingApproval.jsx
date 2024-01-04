import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';
import ButtonApproveList from 'components/controls/buttons/ButtonApproveList';

const PendingApproval = () => {
    const { setContextType, setSelectedItems } = useContext(GlobalContext);
    const { pendingApprovalList, handleLoadData, handleSearchData, handleExportData } = useContext(PendingApprovalContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Pending', 'Artist', 'Genre', 'Upload date', 'Upload by'];

    useEffect(() => {
        setContextType('pendingApproval');
        setSelectedItems([]);
    }, []);

    // Load list after change
    useEffect(() => {
        console.log('Current data: ', pendingApprovalList)
    }, [pendingApprovalList]);

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
                    <ButtonApproveList />
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={pendingApprovalList} />
        </div>
    );
};

export default PendingApproval;
