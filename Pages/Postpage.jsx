import React from "react";
import { Avatar, Flex , Image , Text , Box, Divider, Button } from "@chakra-ui/react";
import { BsThreeDots } from 'react-icons/bs'
import Action from "../Components/Action";
import Comment from '../Components/Comment';

import { useState } from "react";
export default function Postpage(){
    const [liked , setliked] = useState(false);
    return (
        <>
        <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
            <Avatar src="/zuck-avatar.png" size={"md"} name="markzuckerberg" />
        
        <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
        <Image src='/verified.png' w="4" h="4" ml={4} />
        </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray"} >1d</Text>
            <BsThreeDots/>
        </Flex>
        <Text my={3}>Let's talk about Threads</Text>
        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray"}>
                    <Image src='/post1.png' w="full" />
                    </Box>

                    <Flex gap={3} my={3}>
                        <Action liked={liked} setliked={setliked} />
                    </Flex>

                    <Flex gap={2} alignItems={"center"} >
                        <Text color={"gray"} fontSize={"SM"}>238 REPLIES</Text>
                        <Box w={0.5}  h={0.5} borderRadius={"full"}  bg={"gray"}></Box>
                        <Text color={"gray"} fontSize={"sm"} >
                            {200 +(liked ? 1:0)} likes
                        </Text>
                    </Flex>
                    <Divider my={4} />

                    <Flex justifyContent={"space-between"} >
                        <Flex gap={2} alignItems={"center"} >
                            <Text fontSize={"2xl"}>👏</Text>
                            <Text color={"gray"} >Get the app to reply and post</Text>
                        </Flex>
                        <Button>Get</Button>
                    </Flex>
                    
                    <Divider my={4} />
               <Comment 
               comment="LookS very good!"
               createAt="2d"
               likes={42}
               userName="SALLYDOE"
               userAvatar='https://bit.ly/dan-abramov'
               />
                <Comment 
               comment="Good!"
               createAt="2d"
               likes={10}
               userName="Mark"
               userAvatar='https://bit.ly/prosper-baba'
               />

             <Comment 
               comment="LookS Awesome!"
               createAt="1d"
               likes={5}
               userName="Saedoe"
               userAvatar='https://bit.ly/code-beast'
               />
              

       
        </>
    )
}