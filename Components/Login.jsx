'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Alert,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
   const setAuthScreenState= useSetRecoilState(authScreenAtom);
   const [username ,setusername]=useState('');
   const [password , setpassword]=useState('');
   const navigate = useNavigate();

   const handlelogin = async()=>{

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

  return (
    <Flex
      minH={'40vh'}
      align={'center'}
      justify={'center'}
    
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
           Login
          </Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl  isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" onChange={(e)=>setusername(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=> setpassword(e.target.value)} />
                  
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                  </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
           
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg ={ useColorModeValue("gray.600", "gray.700")}
                color={'white'}
                _hover={{
                  bg: useColorModeValue("gray.600", "gray.700")
                
                }}    onClick={handlelogin}>
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Don't have an account <Link color={'blue.400'} onClick={()=> setAuthScreenState("signup")}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
