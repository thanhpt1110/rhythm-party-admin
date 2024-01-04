import api from "./Api";

const getAllUser = async () => {
    return await api.get('/api/user/');
}

const searchUser = async (searchTerm) => {
    return await api.get(`/api/user/search?input_search=${searchTerm}`)
}

const getUserInformation = async () => {

}

const createUserInformation = async () => {
    
}

const updateUserInformation = async () => {

}

const deleteUserInformation = async () => {

}

const deleteList = async () => {

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