import React, { useContext, useRef, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { ArtistContext } from 'contexts/ArtistContext';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';
import SongOfPlaylist from 'components/consts/SongOfPlaylist';
import { toast } from 'react-toastify';

const ModalArtist = ({ onClose }) => {
    const { handleSaveData } = useContext(ArtistContext);
    const { modalMode } = useContext(GlobalContext);

    const imageInputRef = useRef(null);

    const [artistName, setArtistName] = useState('Artist name')
    const [description, setDescription] = useState('Description')
    const [selectedImage, setSelectedImage] = useState(null);

    const listMusic = [
        { musicName: "Có Chắc Yêu Là Đây", author: "Sơn Tùng M-TP", imgUrl: "https://upload.wikimedia.org/wikipedia/vi/3/32/S%C6%A1n_T%C3%B9ng_M-TP_-_C%C3%B3_ch%E1%BA%AFc_y%C3%AAu_l%C3%A0_%C4%91%C3%A2y.jpg", duration: 320 },
        { musicName: "Hai Triệu Năm", author: "Đen Vâu", imgUrl: "https://nld.mediacdn.vn/zoom/700_438/2019/9/9/mv-hai-trieu-nam-15680375075251030477617.jpg", duration: 365 },
        { musicName: "Hoa Hải Đường", author: "Jack", imgUrl: "https://upload.wikimedia.org/wikipedia/vi/9/9f/Jack_-_Hoa_h%E1%BA%A3i_%C4%91%C6%B0%E1%BB%9Dng.png", duration: 345 },
        { musicName: "Đi Đu Đưa Đi", author: "Bích Phương", imgUrl: "https://upload.wikimedia.org/wikipedia/vi/0/06/B%C3%ADch_Ph%C6%B0%C6%A1ng_-_%C4%90i_%C4%91u_%C4%91%C6%B0a_%C4%91i_%28b%C3%ACa_%C4%91%C4%A9a%29.png", duration: 330 },
        { musicName: "Dreamee", author: "Amee", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/DreAMEE_Album_Cover.jpg", duration: 310 }   
    ];

    const onImageChange = (event) => {
        if (event.target.files.length > 0)
            setSelectedImage(event.target.files[0]);
    };

    const handleImageSelection = (event) => {
        event.preventDefault();
        imageInputRef.current.click();
    }

    const handleDeleteMusic = (music) => {

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
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div onClick={onClose} className='fixed inset-0 bg-gray-900 opacity-50'></div>
            <div className='modal-container bg-white h-[90%] overflow-y-auto w-auto rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-center items-center mb-4 gap-2'>
                    <h2 className='text-2xl font-bold'>Artist information</h2>
                    <i className='ri-information-line text-2xl text-blue-600'></i>
                </div>
                <div className='flex justify-between gap-8'>
                    <div>
                        <div className='flex flex-col'>
                            <input type='file'
                                onChange={onImageChange}
                                accept='image/*'
                                style={
                                    { display: 'none' }
                                }
                                ref={imageInputRef} />
                            {!selectedImage ? <div className='flex items-end justify-center w-56 h-56 bg-gradient-to-r from-[#846170] to-[#70929c]'>
                                {modalMode !== 'info' &&
                                    <button
                                        className='mb-4 bg-slate-600 flex rounded-lg items-center px-2 gap-2 py-1'
                                        type='button'
                                        onClick={handleImageSelection}
                                    >
                                        <i className="ri-camera-line text-white"></i>
                                        <p className='text-[14px] text-white'>Upload image</p>
                                    </button>
                                }
                            </div> :
                                <div className='relative w-56 h-56'>
                                    <img src={URL.createObjectURL(selectedImage)} alt="SongImage" className="rounded object-cover h-56 w-56" />
                                    {modalMode !== 'info' &&
                                        <button
                                            className='mb-4 bg-slate-600 flex rounded-lg items-center px-2 gap-2 py-1'
                                            type='button'
                                            onClick={handleImageSelection}
                                        >
                                            <i className="ri-camera-line text-white"></i>
                                            <p className='text-[14px] text-white'>Upload image</p>
                                        </button>
                                    }
                                </div>}
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-1 items-center '>
                                <p className='font-bold text-sm'>Title</p>
                                <span className='text-red-600'>*</span>
                            </div>
                            <input
                                className={`w-full text-base font-normal focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                                placeholder={artistName}
                                value={artistName}
                                onChange={e => { setArtistName(e.target.value) }}
                                required
                                readOnly={modalMode === 'info'}
                            />
                        </div>
                        <div>
                            <div className='flex flex-row gap-0 items-center '>
                                <p className='font-bold text-sm mt-5'>Description</p>
                                <span className='text-red-600 mb-[-17px] ml-1'>*</span>
                            </div>
                            <textarea
                                className={`w-full text-base font-normal focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                                rows={4}
                                placeholder={description}
                                value={description}
                                onChange={e => { setDescription(e.target.value) }}
                                required
                                readOnly={modalMode === 'info'}
                            />
                        </div>
                    </div>

                </div>
                <div className='flex flex-col space-y-1 pb-2 text-white bg-white border border-gray-900 mt-10 rounded-md shadow'>
                    {listMusic.map((music, i) => (
                        <SongOfPlaylist key={music._id}
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
    );
};

export default ModalArtist;
