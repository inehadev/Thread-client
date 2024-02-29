import { Flex, useColorMode, Image , Button } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="center" mt={6} mb="12">
         <Button onClick={toggleColorMode}>
      <Image
        cursor="pointer"
        alt="logo"
        w={6}
        src={colorMode === "dark" ? '/light-logo.svg' : "/dark-logo.svg"} // Corrected access to colorMode
      />
      </Button>
    </Flex>
  );
}