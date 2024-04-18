import React, { useContext, useEffect, useState } from "react";
import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";
import { useParams } from "react-router-dom";
import { AuthContext } from "../src/Context/AuthContext";
import axios from 'axios';
import { Flex, Spinner } from "@chakra-ui/react";

export default function Userpage (){
  const [user,setuser]=useState(null);
  const {username}=useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [loading ,setloading] = useState(true);
  // const Getuser= useContext(AuthContext);
  useEffect (()=>{
    const getuser = async()=>{
    try {
     
      const res = await axios.get(`http://localhost:5000/profile/${username}`);
      const data = await res.data;
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
      if(res){
        setuser(res
        .data);
      }
      console.log("this is the data of res",res);
        
    } catch (error) {
        console.log(error)
    }finally{
      setloading(false);
    }
    }
    getuser();

  } , [username])

  if(!user && loading) {
    return(
     <Flex justifyContent={'center'}>
       <Spinner size={'xl'}/>
     </Flex>
    )
  }

  if(!user && !loading)
{
  return (
    <h1>user not found</h1>
  )
}
  

    return(
        <>
         <UserHeader user = {user}/>
         <UserPost likes={1200} replies={481} postIMG='/post1.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post2.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post3.png' postTitle={"Let's talk about Threads"}/>
        </>
    )
}