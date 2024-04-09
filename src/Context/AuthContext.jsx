import React from "react";
import { createContext} from "react";
import axios, { AxiosHeaders } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from 'recoil'
import userScreenAtom from "../../atoms/userAtom";
// import userScreenAtom from '.'

const AuthContext= createContext();


const AuthProvider = ({children})=>{
  const toast = useToast();
  const navigate= useNavigate();

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
  
        const axiosheader = {
          headers:{
              "Accept":"application/json",
          }
      } 

      
        const response= await axios.post('http://localhost:5000/login' ,bodyParameter , axiosheader);
        
        if (response.status === 200) {
          localStorage.setItem("x-auth-token",  JSON.stringify(response.data));
          console.log(localStorage.getItem("x-auth-token"));
          console.log(response.headers['set-cookie']);
          navigate('/');
      
         
      } else {
         
        
          console.error("Login failed:", response.statusText);
      }

        
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

const  UserUpdate= async(name, username, email, bio, password, profilepic )=>{
  try {
    const token = localStorage.getItem('x-auth-token'); 
    const [user,setuser]= useRecoilState(userScreenAtom);
    const userId=user.userId;

    
    
    console.log("User ID:", userId);

    const bodyparameter =({
      userId:userId,
      name:name,
      username:username,
      email:email,
      bio:bio,
      password:password,
      profilepic:imageurl


    })

    const axiosheader = {
      headers:{
          "Accept":"application/json",
        
      }  
  } 

  
   
  const response = await axios.put(`http://localhost:5000/update/:${user._id}` ,axiosheader , bodyparameter);
  console.log(response);

  } catch (error) {
    console.log(error.response)
  }
}


///api to get user profile

 const GetUser = async ()=>{
  try{
    const username = useSearchParams();
     const bodyparameter = {

     }
     const axiosheader = {
      headers:{
          "Accept":"application/json",
        
      }  
  } 

  const res = await axios.get('/profile/username' , bodyparameter , axiosheader);
  console.log(res);
 }catch(error){
  console.log(error);
 }

     
 }


return <AuthContext.Provider value={{UserRegister , UserLogin, UserLogout , UserUpdate  , GetUser}} >{children}</AuthContext.Provider>

}



export {AuthContext,AuthProvider};