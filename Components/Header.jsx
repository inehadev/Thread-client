import { Flex, useColorMode, Image , Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import userScreenAtom from "../atoms/userAtom";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {RxAvatar} from 'react-icons/rx'
import {Link as RouterLink} from "react-router-dom"

 export default function  Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userScreenAtom);

  return (
    <Flex justifyContent="space-between" mt={6} mb="12">
      {user &&(
        <Link as = {RouterLink} to ='/'>
        <AiFillHome size={24} />
      </Link>
      )}
       
      <Image
        cursor="pointer"
        alt="logo"
        w={6}
        src={colorMode === "dark" ? '/light-logo.svg' : "/dark-logo.svg"} 
        onClick={toggleColorMode}// Corrected access to colorMode
      />

      {user &&(
        <Link as = {RouterLink} to ={`/profile/${user.username}`}>
        <RxAvatar  size={24} />
      </Link>
      )}


     
    </Flex>
  );
}