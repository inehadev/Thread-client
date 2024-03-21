import React from "react";
import SignupCard from "../Components/SignUpCard";
import Login from "../Components/Login";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";


  const  Auth =()=>{
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenAtom);
    return(

        <>
        {authScreenState ==="login" ?  <Login/> : <SignupCard/> }
        </>
    )
}

export default Auth;