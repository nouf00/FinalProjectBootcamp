import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Nav from "../navbar/Navbar";

const Login = () => {
  return (
    <Box>
      <Nav />
      <HStack
        bgImage="img2.png"
        objectFit="fill"
        backgroundSize="cover"
        h="95vh"
        w="100%"
        opacity="0.60"
        position="relative"
        dir="rtl"
      >
        <VStack
          fontFamily="Xanh Mono"
          shadow="2xl"
          mr="40%"
          spacing="1.5rem"
          width="25%"
          h="40vh"
          bg="whiteAlpha.700"
          rounded="3xl"
          boxShadow="2xl"
          textAlign="left"
        >
          <Heading fontFamily="Xanh Mono" mt="10">
            Welcom Back
          </Heading>
          <Box w="70%">
            <Text>Username</Text>
            <Input borderColor="blackAlpha.800" type="text" />
          </Box>
          <Box w="70%">
            <Text>password</Text>
            <Input borderColor="blackAlpha.800" type="password" />
          </Box>
          <Button
            w="25%"
            bg="#788A5C"
            border="1px"
            borderColor="blackAlpha.800"
          >
            Login
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Login;
