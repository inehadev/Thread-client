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
  
        const axiosheader = {
          headers:{
              "Accept":"application/json",
          }
      } 

      
        const response= await axios.post('http://localhost:5000/login' ,bodyParameter , axiosheader);
        
        if (response.status === 200) {
          localStorage.setItem("x-auth-token",  JSON.stringify(response.data));
          console.log(localStorage.getItem("x-auth-token"));
         
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

// const  UserUpdate= async(name, username, email, bio, password, profilepic,user )=>{
//   try {
//     if (!user || !user._id) {
//       console.log("User object or user._id is undefined.");
//       return;
//     }

//     const bodyparameter =({
//       name:name,
//       username:username,
//       email:email,
//       bio:bio,
//       password:password,
//       profilepic:profilepic


//     })

//     const axiosheader = {
//       headers:{
//           "Accept":"application/json",
//       }
//   } 

  
   
//   const res= await axios.put(`http://localhost:5000/update/${user._id}` , bodyparameter , axiosheader);
//   console.log(res.data);

//   } catch (error) {
//     console.log(error)
//   }
// }



// Assuming you have Axios imported and ready to use

// Update user profile
const updateUserProfile = async (userId, name, username, email, password, bio, profilepic) => {
  try {
    const response = await axios.put(`/api/update/${userId}`, { name, username, email, password, bio, profilepic });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw new Error('Failed to update user profile');
  }


// Example usage:
const userId = 'user_id'; // Your logged-in user's ID
try {
  const updatedProfile = await updateUserProfile(userId, 'New Name', 'new_username', 'new@example.com', 'newpassword', 'New bio', 'profile_pic_url');
  console.log('Updated profile:', updatedProfile);
} catch (error) {
  console.error('Error updating user profile:', error);
}

return <AuthContext.Provider value={{UserRegister , UserLogin, UserLogout , updateUserProfile }} >{children}</AuthContext.Provider>

}



export {AuthContext,AuthProvider};