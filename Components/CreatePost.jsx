import react, { useRef, useState } from 'react'
import {AddIcon} from "@chakra-ui/icons"
import usePreviewImage from '../Hooks/usePreviewImage'
import {Button , useColorModeValue , FormControl ,CloseButton , Image ,Flex, Modal , ModalBody  , Input, ModalCloseButton , ModalContent , ModalFooter , ModalHeader ,  ModalOverlay , Textarea ,  Text, useDisclosure} from "@chakra-ui/react"
import { BsImageFill } from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import userScreenAtom from '../atoms/userAtom'
import axios from 'axios'


const MAX_CHAR=500
const CreatePost =()=>{
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [postText , setpostText]=useState("");
    const {handleImageChange ,imageurl , setimageurl}=usePreviewImage();
    const [remainingchr , setremainingchr]=useState(MAX_CHAR)
    const imageRef=useRef(null)
    const user = useRecoilValue(userScreenAtom);
    const handletextchange=async(e)=>{
      const inputtext=e.target.value;
      if(inputtext.length>MAX_CHAR){
      const truncatedtext= inputtext.slice(0,MAX_CHAR);
      setpostText(truncatedtext);
      setremainingchr(0)
    }else{
       setpostText(inputtext);
       setremainingchr(MAX_CHAR-inputtext.length)
    }


    }
    const handleCreatePost =async()=>{
     
      // const res= await axios.post('/CreatePost',{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({postedBy:user._id, text:postText , img:imageurl})

      // })
      const bodyparameter={
        postedBy:user._id,
        text:postText,
        img:imageurl
      }

      const token = localStorage.getItem('x-auth-user');
      console.log("this is toke",token);
      const axiosheader = {
        headers:{
            "Accept":"application/json",
            'x-auth-token':token
        }
    } 
      const res= await axios.post("http://localhost:5000/CreatePost" , bodyparameter , axiosheader)
      console.log(res);
     

    
    }

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
            <Text fontSize="sm"
                    fontWeight="bold"
                    textAlign={"right"}
                    m={"1"}
                    color={"gray.800"}
              >{remainingchr}/{MAX_CHAR}</Text>

              <Input  type="file"
                      ref={imageRef}
                      hidden
                      onChange={handleImageChange}
              />

              <BsImageFill  
                style={{marginLeft:"5px" , cursor :"pointer"}}
                size={16}
                onClick={()=>imageRef.current.click()}

              />
           </FormControl>
           
           {imageurl &&(
            <Flex mt={5}  w={"full"} position={"relative"}>
              <Image src={imageurl} alt="selected image" />
              <CloseButton
              onClick={()=>{setimageurl("")}}
              bg={"gray.800"}
              position={"absolute"}
              top={2}
              right={2}
              
              />
            </Flex>
           )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreatePost}>
             Post
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )

}

export  default CreatePost;