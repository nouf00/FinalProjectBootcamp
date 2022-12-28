import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const ChefRegister = () => {
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100vw"
        height="100vh"
      >
        <VStack
          fontFamily="Xanh Mono"
          spacing="1rem"
          width="30rem"
          rounded="3xl"
          boxShadow="2xl"
          h="85vh"
        >
          <Heading mt="10" fontFamily="Xanh Mono" mb="5">
            Welcom Chef
          </Heading>
          <VStack align="left" spacing="1rem" width="50%" p="1">
            <Box>
              <Text>Username</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>Phone Number</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>Project Name</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>City</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>Permission Number</Text>
              <Input type="text" />
            </Box>
            <Box>
              <Text>Password</Text>
              <Input type="password" />
            </Box>
          </VStack>
          <Button w="25%" bg="#788A5C">
            Sign up
          </Button>
          <Text align="center" > Already a member? Login</Text>
        </VStack>
      </Flex>
      <Text textAlign="center" fontFamily="Xanh Mono" mt="-10" mb="6">
        Click “Sign Up” to agree to Familyfood station's Terms of Service and{" "}
        acknowledge that <br />
        Familyfood station’s Privacy Policy applies to you.
      </Text>
    </div>
  );
};

export default ChefRegister;
