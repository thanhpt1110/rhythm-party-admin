import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/DataTable';
import SearchBox from 'components/controls/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalArtist from 'components/controls/modals/ModalArtist';
import { ArtistContext } from 'contexts/ArtistContext';

const Artist = () => {
    const { setContextType } = useContext(GlobalContext);
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
                    <ButtonAdd label={'song'} ModalComponent={ModalArtist} />
                    <ButtonExport onClick={handleExportData}/>
                </div>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    );
};

export default Artist;
