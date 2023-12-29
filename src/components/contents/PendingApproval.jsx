import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';
import ButtonApproveList from 'components/controls/buttons/ButtonApproveList';

const PendingApproval = () => {
    const { setContextType, selectedItems, setSelectedItems } = useContext(GlobalContext);
    const { isDataChange, setDataChange, handleSearchData, handleExportData } = useContext(PendingApprovalContext);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = ['PendingApproval', 'Artist', 'Genre', 'Likes', 'Comments'];
    const data = [
        { PendingApproval: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'Thích Em Hơi Nhiều', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'Nàng Thơ', Artist: 'Hoàng Dũng', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'My Heart Will Go On', Artist: 'Celine Dion', Genre: 'Pop', Likes: '125', Comments: '12' }
        // Thêm các đối tượng khác vào đây
    ];

    // setContextType('pendingApproval');
    useEffect(() => {
        setContextType('pendingApproval');
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
                    <ButtonDeleteList/>
                    <ButtonApproveList/>
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default PendingApproval;
