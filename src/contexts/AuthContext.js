import React, {useState, useContext, useEffect} from "react";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}
export const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState(null)
    const logOut = ()=>{
        setAuthUser(null)
    }
    const value = {
        authUser,
        setAuthUser,
        logOut}
    return (
        <AuthContext.Provider value={value}>
            {props.children}
            </AuthContext.Provider>
    )
}
