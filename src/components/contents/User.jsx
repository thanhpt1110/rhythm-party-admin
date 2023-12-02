import React, { useState, useEffect } from 'react';
import DataTable from '../controls/DataTable';
import SearchBox from 'components/controls/SearchBox';
import ButtonAdd from 'components/controls/buttons/ButtonAdd';
import ButtonExport from 'components/controls/buttons/ButtonExport';
import ModalAddUser from 'components/controls/modals/ModalUser';

const User = () => {
    const columns = ['Username', 'Password', 'Email', 'Gender', 'Status'];
    const data = [
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available'},
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned'},
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available'},
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned'},
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available'},
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned'},
        { Username: 'asghunter', Password: '123456', Email: 'asghunter@gmail.com', Gender: 'Male', Status: 'Available'},
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned'},
        { Username: 'thanhpt110', Password: 'abcxyz', Email: 'thanhpt1110@gmail.com', Gender: 'Male', Status: 'Banned'},
        // Thêm các đối tượng khác vào đây
    ];
    // const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // function mapUser(user) {
    //     return {
    //         "Username": user.username,
    //         "Password": user.password,
    //         "Email": user.email,
    //         "Gender": user.gender
    //     };
    // }
    // const data = usersFromDatabase.map(mapUser);

    const handleCreate = () => {
        console.log('Save data from ModalUser from ButtonAdd');
    }

    const handleUpdate = () => {
        console.log('Save data from ModalUser from ButtonEdit');
    }

    const handleDelete = () => {
        console.log('Delete data success');
    }

    const handleExport = () => {
        console.log('Export file successfully');
    };

    // Handle search 
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm) { 
                // Fetch data here
                // use useState to setData(fetchedData) 
                console.log(`Fetched data base on ${searchTerm}`)
            }
        }, 500); // Delay in milliseconds 

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between py-5'>
                <SearchBox onSearch={setSearchTerm} />
                <div className='flex flex-row gap-5'>
                    <ButtonAdd label={'user'} ModalComponent={ModalAddUser}/>   
                    <ButtonExport onClick={handleExport} />
                </div>
            </div>
            <DataTable columns={columns} data={data} onEdit={handleUpdate} onDelete={handleDelete}/>
        </div>
    );
};

export default User;
