'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,

  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useContext, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import {useParams} from "react-router-dom"
import userScreenAtom from '../atoms/userAtom'
import usePreviewImage from '../Hooks/usePreviewImage'
import { AuthContext } from '../src/Context/AuthContext'
import axios  from "axios";


export default function UpadateProfilePage() {
  const [user,setuser]= useRecoilState(userScreenAtom);
  const {UserUpdate}=useContext(AuthContext)
 
 const fileref=useRef(null)
 const {handleImageChange ,imageurl}=usePreviewImage();
console.log(imageurl);
 
const [inputs ,setinputs]=useState({
  name:user.name,
  username:user.username,
  email:user.email,
  bio:user.bio,
  password:"",
 

})
 





const  handleUpdate= async(name, username, email, bio, password, profilepic )=>{
  try {
 

  //   const bodyparameter =({
  
  //     name:inputs.name,
  //     username:inputs.username,
  //     email:inputs.email,
  //     bio:inputs.bio,
  //     password:password,
  //     profilepic: inputs.imageurl


  //   })

  //   const token= localStorage.getItem('x-auth-user');
  //   console.log("this is the token data:" , token);

  //   const axiosheader = {
  //     headers:{
  //         "Accept":"application/json",
  //         'x-auth-token':token,
          
  //     }  
  // } 

  
   
  // const response = await axios.put(`http://localhost:5000/update/:${user._id}` ,bodyparameter , axiosheader);
  // console.log(response);


 
    const res = await fetch(`http://localhost:5000/update/:${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputs, profilePic: imageurl }),
    });
    const data = await res.json(); 
  } catch (error) {
    console.log(error.response)
  }
}




  return (
    
 
    <Flex
       
      minH={'100vh'}
      align={'center'}
      justify={'center'}
     >
         <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl>
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={ imageurl || user.ProfilePic} />
      
            </Center>
            <Center w="full">
              <Button w="full" onClick={()=>fileref.current.click()}>Change Avtar</Button>
              <Input
            type="file"
             
             hidden
              ref={fileref}
            onChange={(e)=>handleImageChange(e)}
          />
            </Center>
          </Stack>
        </FormControl>
        <FormControl >
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Enter Your name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.name}
            onChange={(e)=>setinputs({...inputs , name:e.target.value})}
          />
          </FormControl>
          <FormControl >
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            value={inputs.username}
            _placeholder={{ color: 'gray.500' }}
            type="text"     onChange={(e)=>setinputs({...inputs , username:e.target.value})}

          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={inputs.email}
            onChange={(e)=>setinputs({...inputs , email:e.target.value})}
          />
        </FormControl>

        <FormControl  >
          <FormLabel>Bio</FormLabel>
          <Input
            placeholder="Bio"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.bio}
            onChange={(e)=>setinputs({...inputs ,bio:e.target.value})}
          />
        </FormControl>
        <FormControl  >
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            value={inputs.password}
            onChange={(e)=>setinputs({...inputs,password:e.target.value})}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
             onClick={handleUpdate}
            >
            Submit
          </Button>
        </Stack>
      </Stack>
      
    </Flex>
    
  )
}