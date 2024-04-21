import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerError, setregisterError] = useState(null);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginError, setloginError] = useState(null);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    useEffect(()=>{
        const user = localStorage.getItem("User")

        setUser(JSON.parse(user))
    },[])

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const loginUser = useCallback(async (loginInfo) => {
        setloginError(null);
    
        const response = await postRequest(`${baseUrl}/users/login`, loginInfo);
    
        if (response.error) {
            setloginError(response.message);
            return;
        }
    
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    
        window.location.href = "http://localhost:5173/chat";
    }, []);

    
    
    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setregisterError(null);
    
        const response = await postRequest(`${baseUrl}/users/register`, registerInfo);
    
        if (response.error) {
            setregisterError(response.message);
            return;
        }
    
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    
        
        await loginUser({ email: registerInfo?.email, password: registerInfo?.password });
    }, [registerInfo, loginUser]);
         

    const logoutUser = useCallback(() => {
       
        window.location.href = "http://localhost:5173/";
      
        
        const handleUnload = () => {
          localStorage.removeItem("User");
          setUser(null);
        };
      
        window.addEventListener('unload', handleUnload);
      
        
        return () => {
          window.removeEventListener('unload', handleUnload);
        };
    }, []);
      

    return (
        <AuthContext.Provider value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            loginError,
            updateLoginInfo,
            loginUser,
            loginInfo,
            logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};