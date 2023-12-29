import React, { useState, useEffect, useContext } from 'react';
import DataTable from '../controls/tables/DataTable';
import SearchBox from 'components/controls/inputs/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import { GlobalContext } from 'contexts/GlobalContext';
import ModalRoom from 'components/controls/modals/ModalRoom';
import { RoomContext } from 'contexts/RoomContext';
import ButtonDeleteList from 'components/controls/buttons/ButtonDeleteList';
import ModalSong from 'components/controls/modals/ModalSong';

const Room = () => {
    const { setContextType, selectedItems } = useContext(GlobalContext);
    const {isDataChange, setDataChange, handleSearchData, handleExportData} = useContext(RoomContext);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['Room', 'People', 'Chats', 'CreateDate'];
    const data = [
        { Room: 'Room for Ballad', People: '13', Chats: '45', CreateDate: '11/10/2023 11:10:00 AM'},
        // Thêm các đối tượng khác vào đây
    ];

    useEffect(() => {
        setContextType('room');
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

    const handleDeleteList = () => {
        console.log(selectedItems);
    }

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center gap-3'>
                    <SearchBox onSearch={setSearchTerm} />
                    <span className='text-3xl font-extra-light text-gray-400'>|</span>
                    <ButtonDeleteList onClick={handleDeleteList}/>
                </div>
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'room'} ModalComponent={ModalRoom} />
                    <ButtonExport onClick={handleExportData} />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Room;
