import api from "./Api";

const getAllPendingApproval = async () => {
    return await api.get('/api/music/music-unauthentication');
}

const searchPendingApproval = async (searchTerm) => {
    return await api.get(`/api/music/music-unauthentication/search?input_search=${searchTerm}`)
}

const getAllMusic = async () => {
    return await api.get('/api/music/');
}

const searchAllMusic = async (searchTerm) => {
    return await api.get(`/api/music/search?input_search=${searchTerm}`)
}

const getMusicInformation = async () => {

}

const updateMusicInformation = async () => {

}

const deleteMusicInformation = async () => {

}

const approveSong = async () => {

}

const approveList = async () => {

}

const deleteList = async () => {

}

export {
    getAllPendingApproval,
    searchPendingApproval,
    getAllMusic,
    searchAllMusic,
    getMusicInformation,
    updateMusicInformation,
    deleteMusicInformation,
    approveSong,
    approveList,
    deleteList,
}