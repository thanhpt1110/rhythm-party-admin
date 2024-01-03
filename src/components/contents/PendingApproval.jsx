import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';
import ButtonApproveList from 'components/controls/buttons/ButtonApproveList';
import { ToastContainer } from 'react-toastify';

const PendingApproval = () => {
    const { setContextType, selectedItems, setSelectedItems } = useContext(GlobalContext);
    const { pendingApprovalList, handleLoadData, isDataChange, setDataChange, handleSearchData, handleExportData } = useContext(PendingApprovalContext);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = ['PendingApproval', 'Artist', 'Genre', 'Likes', 'Comments'];
    const data = [
        { PendingApproval: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '152', Comments: '18' },
        { PendingApproval: 'Thích Em Hơi Nhiều', Artist: 'Wren Evans', Genre: 'Pop', Likes: '178', Comments: '21' },
        { PendingApproval: 'Nàng Thơ', Artist: 'Hoàng Dũng', Genre: 'Pop', Likes: '201', Comments: '25' },
        { PendingApproval: 'My Heart Will Go On', Artist: 'Celine Dion', Genre: 'Pop', Likes: '245', Comments: '30' },
        { PendingApproval: 'Shape of You', Artist: 'Ed Sheeran', Genre: 'Pop', Likes: '300', Comments: '45' },
        { PendingApproval: 'Bad Guy', Artist: 'Billie Eilish', Genre: 'Pop', Likes: '275', Comments: '40' },
        { PendingApproval: 'Blinding Lights', Artist: 'The Weeknd', Genre: 'Pop', Likes: '350', Comments: '50' },
        { PendingApproval: 'Watermelon Sugar', Artist: 'Harry Styles', Genre: 'Pop', Likes: '325', Comments: '48' },
        { PendingApproval: 'Levitating', Artist: 'Dua Lipa', Genre: 'Pop', Likes: '375', Comments: '55' },
        { PendingApproval: 'Peaches', Artist: 'Justin Bieber', Genre: 'Pop', Likes: '400', Comments: '60' }
        // Thêm các đối tượng khác vào đây
    ];

    // setContextType('pendingApproval');
    useEffect(() => {
        setContextType('pendingApproval');
        setSelectedItems([]);
    }, []);

    // Load list after change
    useEffect(() => {
        console.log(pendingApprovalList)
    }, [pendingApprovalList]);

    useEffect(() => {
        if (isDataChange) {
            handleLoadData();
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
                    <ButtonApproveList />
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
