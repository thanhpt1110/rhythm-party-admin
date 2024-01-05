import React, { useContext, useEffect, useRef, useState } from 'react';
import ButtonSave from '../buttons/ButtonSave';
import ButtonCancel from '../buttons/ButtonCancel';
import { GlobalContext } from 'contexts/GlobalContext';
import ButtonOk from '../buttons/ButtonOk';
import Select from 'react-select'
import { SongContext } from 'contexts/SongContext';
import { toast } from 'react-toastify';
import { getMusicInformation } from 'api/MusicApi';

const ModalSong = ({ onClose }) => {
    const { handleSaveData } = useContext(SongContext);
    const { modalMode, currentItem } = useContext(GlobalContext);
    const musicInputRef = useRef(null);
    const imageInputRef = useRef(null);

    const [selectedMusic, setSelectedMusic] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [audioLink, setAudioLink] = useState('https://www.google.com');
    const [musicName, setMusicName] = useState('1');
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedPrivacy, setSelectedPrivacy] = useState('Private');
    const [musicGenre, setMusicGenre] = useState([]);
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [musicImage, setMusicImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getMusic = async () => {
            try {
                const respone = await getMusicInformation(currentItem.id);
                if (respone.status === 200) {
                    const music = respone.dataRes.data;
                    const data = []
                    music.genre.map((genre, index) => {
                        data.push({ label: genre, value: genre })
                    })
                    setSelectedPrivacy(music.musicPrivacyType);
                    setMusicName(music.musicName);
                    setMusicGenre(data);
                    setArtist(music.author);
                    setMusicImage(music.imgUrl)
                    setDescription(music.description);
                    setLyrics(music.lyrics);
                    setAudioLink(music.url);
                }
                else {
                    console.log(respone.status)
                    alert("error")
                }
            }
            catch (e) {
                console.log(e);
                alert("error")
            }
            finally {
                setIsLoading(false)
            }
        }
        if (currentItem)
            getMusic();
    }, [])

    const onImageChange = (event) => {
        if (event.target.files.length > 0)
            setSelectedImage(event.target.files[0]);
    };

    const handleImageSelection = (event) => {
        event.preventDefault();
        imageInputRef.current.click();
    }

    const colorStyles = {
        control: (styles) => {
            return {
                ...styles,
                backgroundColor: 'white',
                paddingTop: '4px',
                paddingBottom: '4px',
                border: '1px solid', // Set the default border style
                borderColor: 'black', // Set the default border color
                ':hover': {
                    borderColor: 'gray' // Set the border color to white on focus
                },
            };
        },
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return { ...styles, color: '#181818' };
        },
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: '#555555',
                color: "#fff",
            };
        },
        multiValueLabel: (styles) => {
            return {
                ...styles,
                color: "#fff",
            };
        },
        multiValueRemove: (styles) => {
            return {
                ...styles,
                color: "black",
                cursor: "pointer",
                ":hover": {
                    color: "black",
                },
            };
        },
    };

    const handleInputGenreChange = (inputValue, actionMeta) => {
        // Handle trc khi đưa vô
    };

    const handleGenreChange = (selectedOption, actionMeta) => {
        if (selectedOption.length <= 3) {
            setMusicGenre(selectedOption);
        }
        setShowOtherInput(selectedOption.some(option => option.value === 'other'));
    };

    const handleRadioChange = (event) => {
        setSelectedPrivacy(event.target.id);
    };

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
            <div className='modal-container bg-white w-auto h-[90%] overflow-y-auto rounded-lg p-6 z-50 text-black'>
                <div className='flex justify-center items-center mb-4 gap-2'>
                    <h2 className='text-2xl font-bold'>Song information</h2>
                    <i className='ri-information-line text-2xl text-blue-600'></i>
                </div>
                <form className='flex flex-col border border-gray-800 rounded shadow'>
                    <div className='flex flex-row justify-between mt-6 md:px-16 gap-8'>
                        <div className='flex flex-col'>
                            <input type='file'
                                onChange={onImageChange}
                                accept='image/*'
                                style={
                                    { display: 'none' }
                                }
                                ref={imageInputRef} />
                            <div className='relative w-56 h-56 mt-2'>
                                <img src={selectedImage ? URL.createObjectURL(selectedImage) : musicImage} alt="SongImage" className="rounded object-cover h-56 w-56" />
                            </div>
                            {modalMode !== 'info' &&
                                <button
                                    className='mb-4 mt-4 w-max bg-slate-600 flex rounded-lg items-center px-2 gap-2 py-1'
                                    type='button'
                                    onClick={handleImageSelection}
                                >
                                    <i className="ri-camera-line text-white"></i>
                                    <p className='text-[14px] text-white'>Upload image</p>
                                </button>
                            }
                            <div className='text-left mt-0 text-base font-normal'>
                                Audio link:
                            </div>
                            <a href={`${audioLink}`} target='blank' className='text-left text-blue-500 text-base hover:underline'>
                                {musicName}
                            </a>
                        </div>

                        <div className='w-3/4 flex flex-col'>
                            <div className='flex flex-row gap-1 items-center '>
                                <p className='font-bold text-sm'>Title</p>
                                <span className='text-red-600'>*</span>
                            </div>
                            <input
                                className={`text-base font-normal w-full focus:outline-blue-500 border border-gray-500 mt-0 px-2 rounded py-2 ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                                placeholder={musicName}
                                value={musicName}
                                onChange={e => { setMusicName(e.target.value) }}
                                required
                                readOnly={modalMode === 'info'}
                            />
                            <div className='my-2'>
                                <div className='flex flex-row gap-1 items-center '>
                                    <p className='font-bold text-sm'>Artist</p>
                                    <span className='text-red-600'>*</span>
                                </div>
                                <input
                                    type="text"
                                    className={`text-base font-normal border outline-gray-600 px-2 rounded mt-0 py-2 w-full ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}
                                    value={artist}
                                    onChange={e => { setArtist(e.target.value) }}
                                    required
                                    readOnly={modalMode === 'info'}
                                />
                            </div>
                            <div className=''>
                                <div className='flex flex-row gap-1 items-center '>
                                    <p className='font-bold text-sm'>Genre</p>
                                    <span className='text-red-600'>*</span>
                                </div>
                                <div className={`text-left text-base ${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}>
                                    <Select
                                        isMulti
                                        options={options}
                                        styles={colorStyles}
                                        placeholder="Pick your genre"
                                        onInputChange={handleInputGenreChange}
                                        onChange={handleGenreChange}
                                        value={musicGenre}
                                        isDisabled={modalMode === 'info'}
                                    />
                                    {showOtherInput && <input className='mt-4 border px-2 rounded py-2 w-full' type="text" placeholder="Please fill your other genre" />}
                                </div>
                            </div>
                            <p className='font-bold text-sm mt-4 text-left'>Description</p>
                            <textarea
                                readOnly={modalMode === 'info'}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                name="descriptionSong" id="descriptionSong"
                                className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''} text-base font-normal resize-none h-28 border px-2 rounded mt-2 py-1`}
                                placeholder='Describe your track' cols='20' rows="10"></textarea>
                            <p className='font-bold text-sm mt-4 text-left'>Lyrics</p>
                            <textarea
                                readOnly={modalMode === 'info'}
                                value={lyrics}
                                onChange={e => setLyrics(e.target.value)}
                                name="lyricSong" id="lyricSong"
                                className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''} text-base font-normal h-60 border px-2 rounded py-1 mt-2`}
                                cols="30" rows="10"></textarea>
                            <p className='font-bold text-sm mt-4 text-left'>Privacy</p>
                            <div className="flex mt-2 flex-col gap-1 text-left text-base">
                                <div className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}>
                                    <input type="radio" name="visibility" id="Public"
                                        disabled={modalMode === 'info'}
                                        checked={selectedPrivacy === 'Public'}
                                        onChange={handleRadioChange} />
                                    <label htmlFor="Public" className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''} py-2 px-4 rounded`}>Public</label>
                                </div>
                                <div className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''}`}>
                                    <input type="radio" name="visibility" id="Private"
                                        disabled={modalMode === 'info'}
                                        checked={selectedPrivacy === 'Private'}
                                        onChange={handleRadioChange} />
                                    <label htmlFor="Private" className={`${modalMode === 'info' ? 'cursor-not-allowed' : ''} py-2 px-4 rounded`}>Private</label>
                                </div>
                                <p className=' text-xs text-gray-400'>Only you and people share a secret link with will be able to listen to this track</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-4 px-16 py-2 items-center border-gray-800 border-t-[1px]'>
                        <div className='flex items-center gap-1'>
                            <span className='text-red-600'>*</span>
                            <p className='text-xs font-bold'>Require field
                            </p>
                        </div>
                    </div>
                </form>
                <div className="bg-white px-4 py-3 flex justify-center gap-2">
                    {modalMode !== 'info' && <ButtonSave onClick={handleSave}>Save</ButtonSave>}
                    {modalMode !== 'info' && <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>}
                    {modalMode === 'info' && <ButtonOk onClick={onClose}>OK</ButtonOk>}
                </div>
            </div>
        </div>
        ));
};

export default ModalSong;
