import React, { memo } from 'react'
import ButtonUpdate from './buttons/ButtonUpdate'
import ButtonDelete from './buttons/ButtonDelete'
import ModalAddUser from './modals/ModalUser'

const DataTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <table className='border border-gray-300'>
            <thead>
                <tr className='bg-white'>
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                    <th className='w-36'/>
                    <th className='w-40'/>
                </tr>   
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col, index) => (
                            <td key={index}>{row[col]}</td> 
                        ))}
                        <td className='text-right'>
                            <ButtonUpdate ModalComponent={ModalAddUser} />
                        </td>
                        <td>
                            <ButtonDelete ModalComponent={ModalAddUser} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default memo(DataTable)