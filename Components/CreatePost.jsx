import react, { useState } from 'react'
import {AddIcon} from "@chakra-ui/icons"
import {Button , useColorModeValue , FormControl  , Modal , ModalBody , ModalCloseButton , ModalContent , ModalFooter , ModalHeader ,  ModalOverlay , Textarea , useDisclosure} from "@chakra-ui/react"

const CreatePost =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [postText , setpostText]=useState("");
    const handletextchange=()=>{}
    return (
    <>
   <Button 
   position={"fixed"}
   bottom={10}
   right={10}
   leftIcon={<AddIcon/>}
   bg={useColorModeValue("gray.300", "gray.dark")}
   onClick={onOpen}
   >
    Post
   </Button>


   <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CreatePost</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <FormControl>
            <Textarea placeholder='post content goes here' 
            onChange={handletextchange}
            value={postText}>
                
                
            </Textarea>
           </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )

}

export  default CreatePost;