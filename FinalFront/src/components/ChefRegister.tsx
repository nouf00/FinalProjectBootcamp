import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ChefRegister = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [projectName, setProjectName] = React.useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const submiteRegister = async () => {
    try {
      const request = await fetch("/api/v1/auth/chefregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          city,
          projectName,
        }),
      });
      const data = await request.json();
      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Server Error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };
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
          spacing="2rem"
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
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Box>
            {/* <Box>
              <Text>Phone Number</Text>
              <Input type="text" />
            </Box> */}
            <Box>
              <Text>Project Name</Text>
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
              />
            </Box>
            <Box>
              <Text>City</Text>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
              />
            </Box>
            <Box>
              <Text>Password</Text>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Box>
          </VStack>
          <Button w="25%" bg="#788A5C" onClick={submiteRegister}>
            Sign up
          </Button>
          <HStack >
          <Text align="center"> Already a member?</Text>
          <Link to="/login"><Button mr="2% " variant={"ghost"}> Logi</Button></Link>
          </HStack>
        </VStack>
      </Flex>
      <Text textAlign="center" fontFamily="Xanh Mono" mt="-10" mb="6">
        Click ???Sign Up??? to agree to Familyfood station's Terms of Service and{" "}
        acknowledge that <br />
        Familyfood station???s Privacy Policy applies to you.
      </Text>
    </div>
  );
};

export default ChefRegister;