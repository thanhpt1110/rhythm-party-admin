import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalPlaylist from 'components/controls/modals/ModalPlaylist';
import { PlaylistContext } from 'contexts/PlaylistContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';

const Playlist = () => {
    const { setContextType, setSelectedItems } = useContext(GlobalContext);
    const { playlistList, handleLoadData, handleSearchData, handleExportData } = useContext(PlaylistContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Playlist', 'User', 'No. Songs', 'Privacy', 'View'];

    useEffect(() => {
        setContextType('playlist');
        setSelectedItems([]);
    }, []);

    useEffect(() => {
        console.log('Current data:', playlistList)
    }, [playlistList]);

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
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={playlistList} />
        </div>
    );
};

export default Playlist;
