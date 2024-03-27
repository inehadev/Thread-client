'use client'

import { Flex,Box,FormControl,FormLabel , Input, InputGroup , HStack,InputRightElement, Stack,Button,Heading,Text,useColorMode, Link, useColorModeValue} from '@chakra-ui/react'
import {  useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import axios from 'axios'
// import { AuthContext } from '../src/Context/AuthContext'
import { useNavigate } from 'react-router-dom'



export default function SignupCard() {
  // const {UserRegister}=useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const setAuthScreenState = useSetRecoilState(authScreenAtom);

  const navigate = useNavigate()
  const [inputs, setinputs]=useState({
    name:"",
    username:"",
    email:"",
    password:"",
  });
   
  const handleSignup = async ()=>{
    console.log(inputs.username , inputs.name , inputs.email , inputs.password);
    try {
      const bodyParameter=({
        name:inputs.name,
        username:inputs.username,
        email:inputs.email,
        password:inputs.password
      })
console.log("working")
      const axiosheader={
        "Accept":"application/json"
      }
console.log("all ok")
      const response = await axios.post('http://localhost:5000/register' , bodyParameter , axiosheader);
      console.log("till okay")
      console.log(response);
      return response.status;

    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
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
                  <FormLabel> Name</FormLabel>
                  <Input type="text"  onChange={(e)=>setinputs({...inputs, name:e.target.value})}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text"  onChange={(e)=>setinputs({...inputs, username:e.target.value})} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl  isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  onChange={(e)=>setinputs({...inputs, email:e.target.value})}/>
            </FormControl>
            <FormControl  isRequired>
              <FormLabel >Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setinputs({...inputs, password:e.target.value})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg ={ ("gray.600", "gray.700")}
                color={'white'}
                _hover={{
                  
                 
                }} onClick={handleSignup} >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={()=>setAuthScreenState("login")}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )}
  
              
            