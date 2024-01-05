import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { SongContext } from 'contexts/SongContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalSong from 'components/controls/modals/ModalSong';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';

const Song = () => {
    const { setContextType, setSelectedItems } = useContext(GlobalContext);
    const { songList, handleLoadData, handleSearchData, handleExportData } = useContext(SongContext);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = ['Song', 'Artist', 'Genre', 'Privacy', 'Upload date', 'Upload by'];

    useEffect(() => {
        setContextType('song');
        setSelectedItems([]);
    }, []);

    // Load list after change
    useEffect(() => {
        console.log('Current data: ', songList)
    }, [songList]);

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
                    <ButtonDeleteList/>
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={songList} />
        </div>
    );
};

export default Song;
