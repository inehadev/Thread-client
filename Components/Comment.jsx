import { Avatar, Divider, Flex , Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Action from './Action'

const Comment = ({userAvatar , createAt , userName , likes , comment  }) => {
    const [liked,setliked] = useState(false)
  return (
    <>
    <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={userAvatar} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={'center'}>
            <Text fontSize="sm" fontWeight = "bold">{userName}</Text>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"} color ={"gray"} >{createAt}</Text>
                <BsThreeDots/>
            </Flex>
        </Flex>
         <Text>{comment}</Text>
         <Action liked={liked}  setliked={setliked} />
         <Text fontSize={"sm"} color={"gray"} >
            {likes+(liked ? 1: 0)}likes
        </Text>
        </Flex>
    </Flex>

    <Divider />
   
    
    </>
  )
}

export default Comment
