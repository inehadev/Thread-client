import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react";
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from "react-icons/cg";

import React from "react";

export default function UserHeader (){
    
	const toast = useToast();
    const copyURL =()=>{
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(()=>{
        toast({
            title: "Success.",
            status: "success",
            description: "Profile link copied.",
            duration: 3000,
            isClosable: true,
        });
    })

    }
    return (

    <VStack gap={4} alignItems={"start"}>
    <Flex justifyContent={ "space-between"} w={"full"}>
       
    <Box>
        <Text fontSize = {"2xl"} fontWeight={"bold"}>Mark Zuckerberg</Text>
        <Flex gap={2} alignItems={"center"}>
            <Text fontSize = {"sm"}>markzuckeberg</Text>
            <Text fontSize = {"xs"} bg={"gray-dark"} color={"gray"} p={1} borderRadius={"full"}>threads.next</Text>
        </Flex>
    </Box>

    <Box>
    <Avatar
    name="Mark Zuckerberg"
    src="/zuck-avatar.png"
    size={"xl"}
    />
    </Box>

    </Flex>
    <Text>Co founder , executive chairman and CEO  of Meta platform</Text>
    <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
            <Text color={"gray"}>3.2k followers</Text>
            <Box w='1' h='1' bg={"gray"} borderRadius={"full"}></Box>
            <Link color={"gray"}>instagram.com</Link>
        </Flex>
        <Flex>
            <Box className="icon-container">
                <BsInstagram size={24} cursor ={"pointer"} />
                </Box>
                <Box className="icon-container">
                    <Menu>
                        <MenuButton>
                        <CgMoreO size={24} cursor={"pointer"}  />
                        </MenuButton>
                        <Portal>
                            <MenuList bg={"gray-dark"}>
                                <MenuItem bg={"gray-dark"} onClick={copyURL}>Copy link</MenuItem>

                            </MenuList>
                        </Portal>
                    </Menu>

                </Box>
                
           
        </Flex>
    </Flex>
    <Flex w={"full"}>
        <Flex flex={1}borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"} > 
            <Text fontWeight={"bold"}>Threads</Text>
             </Flex>
             <Flex flex={1}borderBottom={"1px solid gray"} justifyContent={"center"} color={"gray"} pb="3" cursor={"pointer"}  > 
            <Text fontWeight={"bold"}>Replies</Text>
             </Flex>
        
      

    </Flex>

</VStack>



    
    )   
   
}