'use client'

import { Flex,Box,FormControl,FormLabel , Input, InputGroup , HStack,InputRightElement, Stack,Button,Heading,Text,useColorMode, Link, useColorModeValue} from '@chakra-ui/react'
import {  useState , useContext } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import axios from 'axios'
import { AuthContext } from '../src/Context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'



export default function SignupCard() {
  const {UserRegister}=useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const setAuthScreenState = useSetRecoilState(authScreenAtom);

  const navigate = useNavigate()
  const [name , setname ]=useState('');
  const [username , setusername ]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  

  const handleSignup = async()=>{
    try {
      

     
      await UserRegister(name , username, email , password);
     navigate('/auth')
    } catch (error) {
      console.log(error);
      
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
                  <Input type="text"  onChange={(e)=>setname(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text"  onChange={(e)=>setusername(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl  isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  onChange={(e)=>setemail(e.target.value)}/>
            </FormControl>
            <FormControl  isRequired>
              <FormLabel >Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setpassword(e.target.value)} />
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
  
              
            