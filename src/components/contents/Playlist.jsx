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
    const { setContextType, selectedItems, setSelectedItems } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(PlaylistContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Playlist', 'User', 'Songs', 'Listen'];
    const data = [
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        { Playlist: 'Remix', User: 'Tuấn Thành', Songs: '13', Listen: '512'},
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('playlist');
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
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'playlist'} ModalComponent={ModalPlaylist} />
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Playlist;
