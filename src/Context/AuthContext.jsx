import React from "react";
import { createContext} from "react";
import axios from "axios";

const AuthContext= createContext();

const AuthProvider = ({children})=>{
const UserRegister =  async(name , username , email , password)=>{
  
    try {
        const bodyParameter=({
            name:name,
            username:username,
            email:email,
            password:password
        })
        const axiosheader = {
            headers:{
                "Accept":"application/json",
            }
        } 
        const res= await axios.post("http://localhost:5000/register" , bodyParameter , axiosheader);
        console.log(res.data);
    } catch (error) {
        console.log("error");
        
    }
}
return <AuthContext.Provider value={{UserRegister}} >{children}</AuthContext.Provider>

}

export {AuthContext,AuthProvider};