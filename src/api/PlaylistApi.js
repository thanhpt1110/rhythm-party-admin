import api from "./Api";

const getAllPlaylist = async () => {
    return await api.get('/api/playlist/');
}

const searchPlaylist = async (searchTerm) => {
    return await api.get(`/api/playlist/search?input_search=${searchTerm}`)
}

const getPlaylistInformation = async (id) => {
    console.log(id)
    return await api.get(`/api/playlist/${id}`);
}

const createPlaylistInformation = async () => {
    
}

const updatePlaylistInformation = async () => {

}

const deletePlaylistInformation = async () => {

}

const deleteList = async () => {

}

export {
    getAllPlaylist,
    searchPlaylist,
    getPlaylistInformation,
    createPlaylistInformation,
    updatePlaylistInformation,
    deletePlaylistInformation,
    deleteList,
}