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


const UserLogin = async(username , password)=>{
    try {
        const bodyParameter=({
          username:username,
          password:password
        })
  
        const axiosheader= {
          "Accept":"application/json"
        }
  
        const response= await axios.post('http://localhost:5000/login' ,bodyParameter , axiosheader);
        console.log(response);
        console.log(response.data);
        const token =localStorage.setItem("x-auth-token" , response.data.token);
        const userdata=await response.data.token;
        alert("Login successfull");
        navigate('/')
        
      } catch (error) {
        console.log(error.message)
        
      }
}
return <AuthContext.Provider value={{UserRegister , UserLogin}} >{children}</AuthContext.Provider>

}



export {AuthContext,AuthProvider};