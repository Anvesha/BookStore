import React,{createContext, useState, useContext} from 'react'


export const AuthContext=createContext();
export default function AuthProvider({children}) {
  const iniAuthUser = localStorage.getItem("users")
  const [authUser, setAuthUser] = useState(
    iniAuthUser?JSON.parse(iniAuthUser):undefined
  );
  return(
    <AuthContext.Provider value = {[authUser,setAuthUser]}>
        {children}
        </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);