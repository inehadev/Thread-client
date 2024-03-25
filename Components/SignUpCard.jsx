'use client'

import { Flex,Box,FormControl,FormLabel , Input, InputGroup , HStack,InputRightElement, Stack,Button,Heading,Text,useColorMode, Link} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import { AuthContext } from '../src/Context/AuthContext'
import { useNavigate } from 'react-router-dom'



export default function SignupCard() {
  const {UserRegister}=useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  const [Name , setName]=useState('');
  const navigate = useNavigate()
  const [inputs, setinputs]=useState({
    name:"",
    username:"",
    email:"",
    password:"",
  });
  const handleSignup = async (e)=>{
    e.preventDefault();
    await UserRegister(inputs.name, inputs.username, inputs.email, inputs.password);
    navigate('/');
    
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
          bg={('white', 'gray.800')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl  isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input type="text"  onChange={(e)=>setName(e.target.value)}/>
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
                  bg: useColorMode("gray.600", "gray.700"),
                 
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
  
              
            