import React, { useContext, useEffect, useState } from "react";
import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../src/Context/AuthContext";

export default function Userpage (){
  const [user,setuser]=useState(null);
  const {username}=useSearchParams()
  const Getuser= useContext(AuthContext);
  // useEffect (()=>{
  //   const getuser = async()=>{
  //   try {
  //     console.log("heloo")
  //       // const res = await fetch(`/profile/${username}`)
  //       // const  data = await res.json()
  //       // console.log(data);
        
  //   } catch (error) {
  //       console.log(error)
  //   }
  //   }
  //   getuser();

  // } , [username])

  // if(!user) return null;

  const getuser  =async()=>{
   const data= Getuser()
    console.log(data);

  }
    return(
        <>


      
          getuser();
         <UserHeader user = {user}/>
         
         <UserPost likes={1200} replies={481} postIMG='/post1.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post2.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post3.png' postTitle={"Let's talk about Threads"}/>
        </>
    )
}