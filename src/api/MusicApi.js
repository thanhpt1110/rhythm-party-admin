import api from "./Api";

const getAllPendingApproval = async () => {
    return await api.get('/api/music/music-unauthentication');
}

const searchPendingApproval = async (searchTerm) => {
    return await api.get(`/api/music/music-unauthentication/search?input_search=${searchTerm}`)
}

export {getAllPendingApproval, searchPendingApproval}