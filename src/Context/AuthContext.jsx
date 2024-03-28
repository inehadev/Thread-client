import React from "react";
import { createContext} from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AuthContext= createContext();


const AuthProvider = ({children})=>{
  const toast = useToast();

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
       const data=  await res.json();
       if(data.error){
        toast({
          title:"Error",
          description:data.error,
          status:"error",
          duration:3000,
          isClosable:true
        })
       
      
      }
    } catch (error) {
        console.log(error.message);
        if(data.error){
          toast({
            title:"Error",
            description:data.error,
            status:"error"
          })
        
    }
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