import { GlobalContext } from 'contexts/GlobalContext';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
const SongOfPlaylist = ({ order, song, listOfSong, isOwner, onDeleteMusic }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { modalMode, contextType } = useContext(GlobalContext);
    // const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
    // const handlePlayIconClick = async() => {
    //     await setListOfSong(listOfSong)
    //     await setMusic(song)
    // };
    // const {music,  setMusic,setListOfSong, isPlaying} = useMusicContext()
    // useEffect(()=>{
    //   if(music && music._id === song._id)
    //     setIsCurrentPlaying(isPlaying);
    //   else
    //     setIsCurrentPlaying(false);

    // },[isPlaying,music])
    const handleDeleteFromPlaylist = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove this song from Playlist?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteMusic();
            }
        });
    };
    return (
        <div className={`text-black pl-12 items-center text-left justify-center rounded py-4 hover:bg-gray-300 ${modalMode === 'info' || contextType === 'artist' ? 'grid grid-cols-2' : 'grid grid-cols-3'}`}>
            <div className='flex items-centers gap-4 '>
                <p className='text-black'>{order + 1}.</p>
                <img className='ml-2 h-14 w-14 rounded object-cover' src={song.imgUrl} alt='' />
                <div>
                    <p className='text-base truncate w-auto'>{song.musicName}</p>
                    <p className='text-[13px] text-gray-600 truncate w-auto'>{song.author}</p>
                </div>
            </div>
            <p className='text-sm text-gray-600 ml-12'>{formatTime(song.duration)}</p>
            {isOwner && modalMode !== 'info' && contextType !== 'artist' && (<i className="ri-delete-bin-6-line text-gray-600 cursor-pointer" onClick={handleDeleteFromPlaylist}></i>)}
        </div>
    );
};

export default SongOfPlaylist;
