import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import { SongContext } from 'contexts/SongContext';
import { GlobalContext } from 'contexts/GlobalContext';
import { ArtistContext } from 'contexts/ArtistContext';
import { RoomContext } from 'contexts/RoomContext';
import { PlaylistContext } from 'contexts/PlaylistContext';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import { toast } from 'react-toastify';

const contextMap = {
    user: UserContext,
    song: SongContext,
    artist: ArtistContext,
    room: RoomContext, 
    playlist: PlaylistContext,
    pendingApproval: PendingApprovalContext,
};

const ModalDelete = ({ onClose }) => {
    const { contextType } = useContext(GlobalContext);
    const Context = contextMap[contextType];
    const { handleDeleteData } = useContext(Context);

    const handleSave = () => {
        try {
            handleDeleteData();
            toast.success('Delete successful');
        } catch (error) {
            toast.error(error);
        }
        finally {
            onClose();
        }
    };  

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div onClick={onClose} className='fixed inset-0 bg-gray-900 opacity-50'></div>
            <div className='modal-container bg-white w-auto rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold '>Deleting item</h2>
                </div>
                <p className=' font-normal justify-center text-base'>You are about to delete this item. Are you sure?</p>
                <div className='flex items-center justify-center gap-2 mt-16'>
                    <button onClick={handleSave} 
                        className='border border-gray-300 shadow-sm rounded py-2 px-6 bg-blue-700 hover:bg-blue-600 text-white'>Yes</button>
                    <button onClick={onClose}
                        className=' hover:bg-red-500 border bg-red-600 border-red-500 shadow-sm rounded py-2 px-6 text-white'>No</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
