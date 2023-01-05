import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ProfileNav from "./ProfileNav";

const SidebarV1 = () => {
  return (
    <HStack w="full" h="100vh" bg="" padding={10}>
      <ProfileNav />
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        position="relative"
        borderRadius="3xl"
        boxShadow="0 4px 12px rgba(0,0,0,0.09)"
      >
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
  );
};

export default SidebarV1;