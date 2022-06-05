import React ,{createContext, useContext} from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export  const CartContext=createContext();


export const CartProvider=({children})=>{
const {isAuthorized}=useContext(AuthContext);
    const [count,setCount]=useState(0);
    const addtocard=()=>{
        setCount(count+1)
    }

    const buy=()=>{
        if(isAuthorized){
            console.log("Super You are Ready to buy")
        }
        else{
            console.log("cannot buy without loggin ")
        }
        //check id user is loggedin
        //if user is logged in than allow him to pay and buy
    }

    return (<CartContext.Provider value={{count, addtocard,buy}}>{children}</CartContext.Provider>
    )
};

