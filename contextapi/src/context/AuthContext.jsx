import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isAuthorized,setIsAuthrized]=useState(false);

    const login =(username,password)=>{
        console.log(username,password)
        if(username&&password){
            //call apit to get access token
            setIsAuthrized(true);
        }

    }
    const logout=()=>{
        //call apit to get ingorm that session is over
        setIsAuthrized(false);
    }
    return <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>
};