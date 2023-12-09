import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalPlaylist from 'components/controls/modals/ModalPlaylist';
import { PlaylistContext } from 'contexts/PlaylistContext';

const Playlist = () => {
    const { setContextType } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(PlaylistContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Image', 'User', 'Songs', 'Listen', 'MostReplay'];
    const data = [
        { Image: '', User: 'Tuấn Thành', Songs: '13', Listen: '512', MostReplay: 'Hit maker'},
        { Image: '', User: 'Tuấn Thành', Songs: '13', Listen: '512', MostReplay: 'Hit maker'},
        { Image: '', User: 'Tuấn Thành', Songs: '13', Listen: '512', MostReplay: 'Hit maker'},
        { Image: '', User: 'Tuấn Thành', Songs: '13', Listen: '512', MostReplay: 'Hit maker'},
        { Image: '', User: 'Tuấn Thành', Songs: '13', Listen: '512', MostReplay: 'Hit maker'},
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('playlist');
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
                    <ButtonAdd label={'playlist'} ModalComponent={ModalPlaylist} />
                    <ButtonExport onClick={handleExportData}/>
                </div>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    );
};

export default Playlist;
