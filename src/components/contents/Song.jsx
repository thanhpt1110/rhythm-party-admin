import React, { useState, useEffect } from 'react';
import DataTable from '../controls/DataTable';
import SearchBox from 'components/controls/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import ModalAddUser from 'components/controls/modals/ModalUser';

const Song = () => {
    const columns = ['Song', 'Artist', 'Genre', 'Likes', 'Comments'];
    const data = [
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'},
        { Song: 'Từng Quen', Artist: 'Wren Evans', Genre: 'Pop', Likes: '125', Comments: '12'}
        // Thêm các đối tượng khác vào đây
    ];

    // function mapUser(user) {
    //     return {
    //         "Username": user.username,
    //         "Password": user.password,
    //         "Email": user.email,
    //         "Gender": user.gender
    //     };
    // }
    // const data = usersFromDatabase.map(mapUser);

    // const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm) {
                // Fetch data here
                // setData(fetchedData) 
                console.log(`Fetched data base on ${searchTerm}`)   
            }
        }, 500); // Delay in milliseconds 

        return () => clearTimeout(timeoutId);   
    }, [searchTerm]);

    const handleExport = () => {
        // Export data
        console.log('Test export button');
    };

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between py-5'>          
                <SearchBox onSearch={setSearchTerm} /> 
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'user'} ModalComponent={ModalAddUser} />
                    <ButtonExport onClick={handleExport} />
                </div>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    );
};

export default Song;
