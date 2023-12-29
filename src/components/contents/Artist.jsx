import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalArtist from 'components/controls/modals/ModalArtist';
import { ArtistContext } from 'contexts/ArtistContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';

const Artist = () => {
    const { setContextType, selectedItems, setSelectedItems } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(ArtistContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Image', 'Artist', 'Songs', 'Rating', 'MostReplay'];
    const data = [
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        { Image: '', Artist: 'Wren Evans', Songs: '13', Rating: '4.5', MostReplay: 'Hit maker'},
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('artist');
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
                    <ButtonAdd label={'artist'} ModalComponent={ModalArtist} />
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Artist;
