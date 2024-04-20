import { Box, Flex , Avatar , Text , Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Action from './Action'
const Post = ({post , postedBy}) => {
    const[liked, setliked] = useState(false);
   
    useEffect (() =>{
        const getuser = async()=>{
            try {
                
            } catch (error) {
                console.log(error);                
            }

        }

    } , [userId])
  return (
    <>
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
                        <Text fontsize = {"sm"} fontWeinght={"bold"}>
                            markzuckerberg
                        </Text>
                        <Image src='/verified.png' w={4} h={4} ml={1}/>

                        </Flex>
                       
                       <Flex gap={4} alignItems={"center"}>
							<Text fontStyle={"sm"} color={"gray.light"}>
								1d
							</Text>
							<BsThreeDots />
						</Flex>
                        
                </Flex>

                <Text fontSize={"sm"}>{post.text}</Text>
                
                {postIMG && (
                    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray"}>
                    <Image src={post.img} w="full" />
                    </Box> )}

                <Flex gap={3} my={1}>
                 <Action liked={liked} setliked={setliked} />
                </Flex>

                <Flex  gap={3} alignItems={"center"}>
                    <Text color={"gray"} fontSize={"sm"}>{post.replies} replies</Text>
                    <Box w={0.5 } borderRadius={"full"} bg={"gray"}></Box>
                    <Text color={"gray"} fontSize={"sm"}>{post.likes} likes</Text>
                </Flex>
                </Flex>
                </Flex>
               
                
                </Link>





               
            </>
  )
}

export default Post;
