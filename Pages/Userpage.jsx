import React from "react";
import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";
import Home from "./Home";
import { useRecoilValue } from "recoil"
import { Navigate } from "react-router-dom";
export default function Userpage (){
  
    return(
        <>


      
    
         <UserHeader/>
         
         <UserPost likes={1200} replies={481} postIMG='/post1.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post2.png' postTitle={"Let's talk about Threads"}/>
         <UserPost likes={1200} replies={481} postIMG='/post3.png' postTitle={"Let's talk about Threads"}/>
        </>
    )
}