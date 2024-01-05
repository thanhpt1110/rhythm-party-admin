import React, { useContext, useEffect, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { PlaylistContext } from 'contexts/PlaylistContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';
import SongOfPlaylist from 'components/consts/SongOfPlaylist';
import { toast } from 'react-toastify';
import { getPlaylistInformation } from 'api/PlaylistApi';

const ModalPlaylist = ({ onClose }) => {
    const { handleSaveData } = useContext(PlaylistContext);
    const { modalMode, currentItem } = useContext(GlobalContext);
    const [listMusic, setListMusic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [playlistName, setPlaylistName] = useState('Playlist name')
    const [username, setUsername] = useState('username')
    useEffect(()=>{
        const getCurrentPlaylist = async ()=>{
            try{
                const respone = await getPlaylistInformation(currentItem.id);
                if(respone.status === 200)
                {
                    const playlist = respone.dataRes.data;
                    setUsername(playlist.ownerPlaylistID.displayName)
                    setPlaylistName(playlist.playlistName);
                    setListMusic(playlist.listMusic)
                }
                else
                {
                    console.log(respone.status)
                    alert("Error");
                }
            }
            catch(e)
            {
                console.log(e);
                alert("Error");
            }
            finally{
                setIsLoading(false);
            }
        }
        getCurrentPlaylist();
        console.log(currentItem);
    },[])
    const handleDeleteMusic = (music) => {
        try {

        } catch (error) {
            alert(error);
        } finally {
            onClose();
        }
    }

    const handleSave = () => {
        try {
            handleSaveData();
            toast.success('Save data successful!');
        } catch (error) {
            toast.error(error);
        } finally {
            onClose();
        }
    };

    return (
        !isLoading && (<div className='fixed inset-0 flex items-center justify-center z-50'>
            <div onClick={onClose} className='fixed inset-0 bg-gray-900 opacity-50'></div>
            <div className='modal-container bg-white h-[75%] overflow-y-auto w-auto rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-center items-center mb-4 gap-2'>
                    <h2 className='text-2xl font-bold'>Playlist information</h2>
                    <i className='ri-information-line text-2xl text-blue-600'></i>
                </div>
                <div className='flex justify-between gap-8'>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>Title</p>
                        </div>
                        <input
                            className={`text-base font-normal w-full focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            placeholder={playlistName}
                            value={playlistName}
                            onChange={e => { setPlaylistName(e.target.value) }}
                            required
                            readOnly={modalMode === 'info'}
                        />
                    </div>
                    <div>
                        <div className='flex flex-row gap-1 items-center '>
                            <p className='font-bold text-sm'>User</p>
                        </div>
                        <input
                            className={`text-base font-normal w-full focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                            placeholder={username}
                            value={username}
                            onChange={e => { setUsername(e.target.value) }}
                            required
                            readOnly={modalMode === 'info'}
                        />
                    </div>
                </div>
                <div className='flex flex-col space-y-1 pb-2 text-white bg-white border border-gray-900 mt-10'>
                    {listMusic.map((music, i) => (
                        <SongOfPlaylist key={i}
                            song={music}
                            listOfSong={listMusic}
                            order={i}
                            isOwner={true}
                            onDeleteMusic={() => { handleDeleteMusic(music) }} />
                    ))}
                </div>
                <div className="bg-white mt-6 px-0 flex justify-center gap-2">
                    {modalMode !== 'info' && <ButtonSave onClick={handleSave}>Save</ButtonSave>}
                    {modalMode !== 'info' && <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>}
                    {modalMode === 'info' && <ButtonOk onClick={onClose}>OK</ButtonOk>}
                </div>
            </div>
        </div>
    ));
};

export default ModalPlaylist;
