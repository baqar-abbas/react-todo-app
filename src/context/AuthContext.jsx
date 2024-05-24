/* eslint-disable */
import {useState, createContext, useContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState('');
    const login = (username) => {
        setUser(username);
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);