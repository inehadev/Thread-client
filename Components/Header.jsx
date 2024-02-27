import { Flex, useColorMode, Image } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="center" mt={6} mb="12">
      <Image
        cursor="pointer"
        alt="logo"
        w={6} // Corrected prop name
        src={colorMode === "dark" ? '/light-logo.svg' : "/dark-logo.svg"} // Corrected access to colorMode
      />
    </Flex>
  );
}