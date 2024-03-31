import { Button, Toast, useToast } from '@chakra-ui/react';
import {React, useContext} from 'react'
import { useRecoilState } from 'recoil';
import userScreenAtom from "../atoms/userAtom"
import { AuthContext } from '../src/Context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout =()=>{
    const {UserLogout}=useContext(AuthContext)
    const [user, setUser] = useRecoilState(userScreenAtom);;
    const navigate = useNavigate();
    const handlelogout=async()=>{
        try {
          await UserLogout();
          console.log("user logout successfully")
          localStorage.removeItem("x-auth-token");
          setUser(null);
          navigate('/')
          
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
