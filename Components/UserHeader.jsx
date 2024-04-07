import { Avatar, Box, Flex, Button, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react";
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from "react-icons/cg";

import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import userScreenAtom from "../atoms/userAtom";
import axios from 'axios'

export default function UserHeader ({user}){
    const currentuser = useRecoilValue(userScreenAtom);
    const [following , setfollowing] = useState(user.followers.includes(currentuser._id));
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

    const handlefollow = async()=>{

        try{
            console.log("working")
        const bodyparameter = {};
        const axiosheader = {
            headers:{
                "Accept":"application/json",
              
            }  
        }
            const res = await axios.post(`http://localhost:5000/follow/${user._id}`, bodyparameter , axiosheader);
             console.log(res);
            const data=await res.data();
    }catch (error){
        console.log(error)
    }
}
    return (

    <VStack gap={4} alignItems={"start"}>
    <Flex justifyContent={ "space-between"} w={"full"}>
       
    <Box>
        <Text fontSize = {"2xl"} fontWeight={"bold"}>{user.name}</Text>
        <Flex gap={2} alignItems={"center"}>
            <Text fontSize = {"sm"}>{user.username}</Text>
            <Text fontSize = {"xs"} bg={"gray-dark"} color={"gray"} p={1} borderRadius={"full"}>threads.next</Text>
        </Flex>
    </Box>

    <Box>
    {user.profilepic &&(
        <Avatar
        name={user.username}
        src={user.ProfilePic}
        size={"xl"}
        />
    )}
    {!user.profilepic &&(
        <Avatar
        name={user.username}
        src={""}
        size={"xl"}
        />
    )}
    </Box>

    </Flex>
    <Text>{user.bio}</Text>
    {currentuser._id==user._id &&(
       
        <Link href="/update">
            <Button size="md">Update Profile</Button>
        
        </Link>
    )}

{currentuser._id!=user._id &&(
       
    //    <Link href="/update">
           <Button size="md" onClick={handlefollow}>{following ?"Unfollow" : "Follow"}</Button>
       
    //    </Link>
   )}
    <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
            <Text color={"gray"}>{user.followers.length} followers</Text>
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