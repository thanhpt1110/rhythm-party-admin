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

const getMusicInformation = async (id) => {
    return await api.get(`/api/music/${id}`)
}

const updateMusicInformation = async () => {

}

const deleteMusicInformation = async () => {

}

const approveSong = async (id) => {
    return await api.put(`/api/music/music-unauthentication/${id}`, {musicAuthorize: "Authorize"})
}
const approveList = async (listApproveMusic) => {
    const idsToUpdate = listApproveMusic.map(music => music.id);
    return await api.put(`/api/music/music-unauthentication?approve=Authorize`,idsToUpdate);
}
const denySong = async (id) => {
    return await api.put(`/api/music/music-unauthentication/${id}`, {musicAuthorize: "Unauthorize"})
}
const denyList = async (listApproveMusic) => {
    const idsToUpdate = listApproveMusic.map(music => music.id);
    return await api.put(`/api/music/music-unauthentication?approve=Unauthorize`,idsToUpdate);
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
    denyList,
    deleteList,
    denySong,
}