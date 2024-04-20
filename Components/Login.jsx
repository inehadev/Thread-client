// 



import { useState, useEffect, useContext } from 'react';
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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useSetRecoilState } from 'recoil';
import authScreenAtom from '../atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../src/Context/AuthContext';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading , setloading]=useState(false);
  const { UserLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setloading(true);
    try {
     await UserLogin(username, password);
     alert("user login successfully");
       
      
    
      
    } catch (error) {
      console.error('Login failed:', error);
      
    }finally{
      setloading(false);
    }
  };

  

  return (
    <Flex minH={'40vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement h={'full'}>
                      <Button variant={'ghost'} onClick={() => setShowPassword((show) => !show)}>
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
                bg={useColorModeValue('gray.600', 'gray.700')}
                color={'white'}
                _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                onClick={handleLogin}>
                  {/* isloading={loading} */}
                Login
              </Button>

            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Don't have an account{' '}
                <Link color={'blue.400'} onClick={() => setAuthScreenState('signup')}>
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
