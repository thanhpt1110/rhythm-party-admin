import React, { memo, useContext, useMemo } from 'react'
import ButtonUpdate from './buttons/ButtonUpdate'
import ButtonDelete from './buttons/ButtonDelete'
import ModalUser from './modals/ModalUser'
import ModalSong from './modals/ModalSong'
import ModalDelete from './modals/ModalDelete'
import { GlobalContext } from 'contexts/GlobalContext'

const modalMap = {
    user: ModalUser,
    song: ModalSong, 
    default: ModalUser
};

const DataTable = ({ columns, data }) => {
    const { contextType } = useContext(GlobalContext);    
    const ModalComponent = useMemo(() => {
        return modalMap[contextType] || modalMap.default;
    }, [contextType]);
    
    return (
        <table className='border border-gray-300'>
            <thead>
                <tr className='bg-white'>
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                    <th className='w-36' />
                    <th className='w-40' />
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col, index) => (
                            <td key={index}>{row[col]}</td>
                        ))}
                        <td className='text-right'>
                            <ButtonUpdate ModalComponent={ModalComponent} item={row}/>
                        </td>
                        <td>
                            <ButtonDelete ModalComponent={ModalDelete} item={row}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default memo(DataTable)
