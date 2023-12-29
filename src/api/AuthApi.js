import api from "./Api"
const loginAdmin = async (username, password) =>{
   const user = {username: username, password: password}
   return await api.post('/auth/login',user);
}
const loginCheckLogin = async()=>{
    return await api.get('/auth/success');
}
export {loginCheckLogin, loginAdmin}