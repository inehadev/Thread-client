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
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import userScreenAtom from '../atoms/userAtom'

export default function UpadateProfilePage() {
  const [user,setuser]= useRecoilState(userScreenAtom);
  const [inputs ,setinputs]=useState({
    name:user.name,
    username:user.username,
    email:user.email,
    bio:user.bio,
    password:user.password,
    ProfilePic:user.ProfilePic
  })
  console.log(inputs);

  const handleUpdate = ()=>{

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
              <Avatar size="xl" src="" />
      
            </Center>
            <Center w="full">
              <Button w="full">Change Avtar</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl  isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Enter Your name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e)=>setinputs({...inputs , name:e.target.value})}
          />
          </FormControl>
          <FormControl isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"     onChange={(e)=>setinputs({...inputs , username:e.target.value})}

          />
        </FormControl>
        <FormControl  isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={(e)=>setinputs({...inputs , email:e.target.value})}
          />
        </FormControl>

        <FormControl  isRequired>
          <FormLabel>Bio</FormLabel>
          <Input
            placeholder="Bio"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e)=>setinputs({...inputs ,bio:e.target.value})}
          />
        </FormControl>
        <FormControl  isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={(e)=>setinputs(...password)}
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
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}