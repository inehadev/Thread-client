import { Box, Flex , Avatar , Text , Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Action from './Action'
const UserPost = ({postIMG , postTitle , likes , replies}) => {
    const[liked, setliked] = useState(false);
  return (
    <Link to={'/markzuckerberg/post/i'}>
        <Flex gap={3} mb={4} py={3}>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar size="md" name="Mark Zuckerberg" src='/zuck-avatar.png' />
                    <Box w="1px" h={"full"} bg={"gray"} my={2} > </Box>
                        <Box position={"relative"} w={"full"}>
                        <Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/dan-abramov'
							position={"absolute"}
							top={"0px"}
							left='15px'
							padding={"2px"}
						/>
                        <Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/sage-adebayo'
							position={"absolute"}
							bottom={"0px"}
							right='-5px'
							padding={"2px"}
						/>
                       <Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/prosper-baba'
							position={"absolute"}
							bottom={"0px"}
							left='4px'
							padding={"2px"}
						/>

                    </Box>

            </Flex>
            <Flex  flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Flex w={"full"} alignItems={"center"}>
                        <Text fontsize = {"sm"} fontweinght={"bold"}>
                            markzuckerberg
                        </Text>
                        <Image src='/verified.png' w={4} h={4} ml={1}/>
                        <Text fontStyle={"sm"} color={"gray"}>
                            1d
                        </Text>
                        <BsThreeDots/>
                        
                    </Flex>
                </Flex>
                <Text fontSize={"sm"}>This is my first post</Text>
                
                    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray"}>
                    <Image src='/post1.png' alt='Post Image' w="full" />
                    </Box>
               

                {/* <Flex gap={3} my={1}>
                    <Actions liked={liked} setliked={setliked} />
                </Flex>
                <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"} fontSize='sm' >
                {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray"}>
                <Text color={"gray"} fontsize='sm'>
                    {likes} likes
                </Text>
            </Box>
                </Flex> */}

                <Flex gap={3} my={1}></Flex>
                {/* <Action/> */}

            </Flex>
        </Flex>

    </Link>
  )
}

export default UserPost
