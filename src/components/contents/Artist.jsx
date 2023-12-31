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
    const { isDataChange, setDataChange, handleSearchData, handleExportData } = useContext(ArtistContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Artist', 'Songs', 'Rating', 'MostReplay'];
    const data = [
        { Artist: 'Sơn Tùng M-TP', Songs: '25', Rating: '4.8', MostReplay: 'Có Chắc Yêu Là Đây' },
        { Artist: 'Đen Vâu', Songs: '18', Rating: '4.7', MostReplay: 'Hai Triệu Năm' },
        { Artist: 'Jack', Songs: '15', Rating: '4.6', MostReplay: 'Hoa Hải Đường' },
        { Artist: 'Bích Phương', Songs: '20', Rating: '4.5', MostReplay: 'Đi Đu Đưa Đi' },
        { Artist: 'Amee', Songs: '12', Rating: '4.4', MostReplay: 'Dreamee' },
        { Artist: 'Min', Songs: '16', Rating: '4.3', MostReplay: 'Trên Tình Bạn Dưới Tình Yêu' },
        { Artist: 'JustaTee', Songs: '22', Rating: '4.2', MostReplay: 'Đã Lỡ Yêu Em Nhiều' },
        { Artist: 'Soobin Hoàng Sơn', Songs: '19', Rating: '4.1', MostReplay: 'Phía Sau Một Cô Gái' },
        { Artist: 'Hương Tràm', Songs: '17', Rating: '4.0', MostReplay: 'Em Gái Mưa' },
        { Artist: 'Noah', Songs: '14', Rating: '3.9', MostReplay: 'Gặp Gỡ, Yêu Đương Và Được Bên Em' }
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
                    <ButtonDeleteList />
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
