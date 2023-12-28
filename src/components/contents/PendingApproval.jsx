import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import { GlobalContext } from 'contexts/GlobalContext';

const PendingApproval = () => {
    const { setContextType, selectedItems } = useContext(GlobalContext);
    const { isDataChange, setDataChange, handleSearchData, handleExportData } = useContext(PendingApprovalContext);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = ['PendingApproval', 'Artist', 'Genre', 'Likes', 'Comments'];
    const data = [
        { PendingApproval: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'Thích Em Hơi Nhiều', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' },
        { PendingApproval: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12' }
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('PendingApproval');
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

    const handleDelete = () => {
        if (selectedItems.length !== 0)
            console.log(selectedItems);
        else 
            alert("Please choose at least one item");
    }

    const handleApprove = () => {
        if (selectedItems.length !== 0)
            console.log(selectedItems);
        else 
            alert("Please choose at least one item");
    }

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center gap-3'>
                    <SearchBox onSearch={setSearchTerm} />
                    <span className='text-3xl font-extra-light text-gray-400'>|</span>
                    <i onClick={handleDelete} className="ri-delete-bin-6-line text-2xl text-red-600 cursor-pointer" />
                    <i onClick={handleApprove} className="ri-checkbox-circle-fill text-2xl text-green-600 cursor-pointer" />
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
