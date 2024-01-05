import api from "./Api";

const getAllUser = async () => {
    return await api.get('/api/user/');
}

const searchUser = async (searchTerm) => {
    return await api.get(`/api/user/search?input_search=${searchTerm}`)
}

const getUserInformation = async (id) => {
    return await api.get(`/api/user/${id}`)
}

const createUserInformation = async (user) => {
    return await api.post('/api/user/', user)
}

const updateUserInformation = async (id, user) => {
    return await api.put(`/api/user/${id}`, user)
}

const deleteUserInformation = async (id) => {
    return await api.delete(`/api/user/${id}`)
}

const deleteList = async (data) => {
    return await api.put('/api/user/', data)
}

export {
    getAllUser,
    searchUser,
    getUserInformation,
    createUserInformation,
    updateUserInformation,
    deleteUserInformation,
    deleteList,
}