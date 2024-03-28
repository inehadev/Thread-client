import { Button, Toast, useToast } from '@chakra-ui/react';
import {React, useContext} from 'react'
import { useRecoilValue } from 'recoil';
import userScreenAtom from "../atoms/userAtom"
import { AuthContext } from '../src/Context/AuthContext';

const Logout =()=>{
    const {UserLogout}=useContext(AuthContext)
    const setuser = useRecoilValue(userScreenAtom);
    const toast = useToast();
    const handlelogout=async()=>{
        try {
          await UserLogout();
          
        //   const data =await res.json();
        console.log("user logout successfully")
          console.log(data);
          if(data.error){
            toast({
              title:"Error",
              description:data.error,
              status:"error",
              duration:3000,
              isclosed:true
            })

          }

          localStorage.removeItem("x-auth-token");
          setuser(null);
        } catch (error) {
           console.log(error) 
        }
    }

    return (
        <Button position={"fixed"} top={"30px"} size={"sm"} onClick={handlelogout}>
            Logout
        </Button>

    )
}

export default Logout;
