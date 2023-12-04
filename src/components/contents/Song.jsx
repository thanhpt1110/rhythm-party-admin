import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/DataTable';
import SearchBox from 'components/controls/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { SongContext } from 'contexts/SongContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalSong from 'components/controls/modals/ModalSong';

const Song = () => {
    const { setContextType } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(SongContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Song', 'Artist', 'Genre', 'Likes', 'Comments'];
    const data = [
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'}
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('song');
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
                    <ButtonAdd label={'song'} ModalComponent={ModalSong} />
                    <ButtonExport onClick={handleExportData}/>
                </div>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    );
};

export default Song;
