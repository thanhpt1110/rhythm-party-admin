// DataTable.jsx
import React, { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ButtonUpdate from '../buttons/ButtonUpdate'
import ButtonDelete from '../buttons/ButtonDelete'
import ModalUser from '../modals/ModalUser'
import ModalSong from '../modals/ModalSong'
import ModalDelete from '../modals/ModalDelete'
import { GlobalContext } from 'contexts/GlobalContext'
import ModalArtist from '../modals/ModalArtist'
import ModalRoom from '../modals/ModalRoom'
import ModalPlaylist from '../modals/ModalPlaylist'
import ButtonApprove from '../buttons/ButtonApprove'
import ButtonInfo from '../buttons/ButtonInfo'
import ModalApproval from '../modals/ModalApproval'

const modalMap = {
    user: ModalUser,
    song: ModalSong,
    artist: ModalArtist,
    room: ModalRoom,
    playlist: ModalPlaylist,
    pendingApproval: ModalApproval,
    default: ModalUser
};

const DataTable = ({ columns, data }) => {
    const [selectAll, setSelectAll] = useState(false);
    const [isItemClicked, setIsItemClicked] = useState(false);

    const { contextType, selectedItems, setSelectedItems: setContextSelectedItems } = useContext(GlobalContext);
    const ModalComponent = useMemo(() => {
        return modalMap[contextType] || modalMap.default;
    }, [contextType]);

    const setSelectedItems = useCallback((items) => {
        if (JSON.stringify(items) !== JSON.stringify(selectedItems)) {
            setContextSelectedItems(items);
        }
    }, [selectedItems, setContextSelectedItems]);

    useEffect(() => {
        if (selectAll) {
            setSelectedItems(data.map((_, index) => index));
        } else {
            if (selectedItems.length === data.length && !isItemClicked) {
                setSelectedItems([]);
            } else {
                return
            }
        }
    }, [selectAll, data, setSelectedItems]);

    const handleRowSelection = (index) => {
        setIsItemClicked(true);
        if (selectedItems.length === data.length && selectAll) {
            setSelectAll(false);
        }

        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(i => i !== index));
        } else {
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, index]);
        }
    }

    return (
        <table className='border border-gray-300'>
            <thead>
                <tr className='bg-white'>
                    <th>
                        <input type="checkbox" className='rounded' checked={selectAll} onChange={() => { setSelectAll(!selectAll); setIsItemClicked(false) }} />
                    </th>
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                    <th className='w-8' />
                    <th className='w-32' />
                    <th className='w-40' />
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>
                            <input type="checkbox" className='rounded' checked={selectedItems.includes(index)} onChange={() => handleRowSelection(index)} />
                        </td>
                        {columns.map((col, index) => (
                            <td key={index}>{row[col]}</td>
                        ))}
                        <td className='text-right'>
                            <ButtonInfo ModalComponent={ModalComponent} item={row} />
                        </td>
                        <td className='text-right'>
                            {contextType === 'pendingApproval' ? <ButtonApprove item={row} /> : <ButtonUpdate ModalComponent={ModalComponent} item={row} />}
                        </td>
                        <td>
                            <ButtonDelete ModalComponent={ModalDelete} item={row} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default memo(DataTable);
