import React from "react";
import { createContext} from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const AuthContext= createContext();


const AuthProvider = ({children})=>{
  const toast = useToast();
  const Navigate= useNavigate();

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
       console.log(res.data)
       

    } catch (error) {
        console.log(error);
        
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
        console.log(token);
        
      } catch (error) {
        console.log(error)
        
      }
}


const UserLogout = async()=>{
  
    try {
      const bodyParameter=({

      })

      const header={
        "Accept":"application/json"
      }

      const res= await axios.post("http://localhost:5000/logout" , header , bodyParameter);
   
    } catch (error) {
      
      console.log(error)
    }

}
return <AuthContext.Provider value={{UserRegister , UserLogin, UserLogout }} >{children}</AuthContext.Provider>

}



export {AuthContext,AuthProvider};