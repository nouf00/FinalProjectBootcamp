import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Heading,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import Nav from "../navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [foodyUsername, setFoodyUsername] = React.useState("");
  // const [foodyPassword, setFoodyPassword] = React.useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const submiteLoginChef = async () => {
    try {
      const request = await fetch("/api/v1/auth/cheflogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
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
      navigate("/chef");
    } catch (error) {
      toast({
        title: "Server Error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  const submiteLoginFoody = async () => {
    try {
      const request = await fetch("/api/v1/auth/foodylogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
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
      navigate("/foody");
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
    <Box dir="rtl">
      <Nav />
      <HStack
        bgImage="img2.png"
        objectFit="fill"
        backgroundSize="cover"
        h="95vh"
        w="100%"
        opacity="0.60"
        position="relative"
      >
        <VStack
          fontFamily="Xanh Mono"
          shadow="2xl"
          mr="40%"
          spacing="1.5rem"
          width="25%"
          h="50vh"
          bg="whiteAlpha.700"
          rounded="3xl"
          boxShadow="2xl"
          textAlign="left"
        >
          <Heading fontFamily="Xanh Mono" mt="10" color="blackAlpha.800">
            Welcom Back
          </Heading>
          {/* <SwitchButtonLogin /> */}

          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mr="9">
              <Tab>Chef</Tab>
              <Tab>Foody</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* <p>one!</p> */}
                <VStack spacing={5}>
                  <Box w="90%">
                    <Text color="black">Username</Text>
                    <Input
                      color="black"
                      value={username}
                      borderColor="blackAlpha.800"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Box>
                  <Box w="90%">
                    <Text color="black">password</Text>
                    <Input
                      color="black"
                      value={password}
                      borderColor="blackAlpha.800"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  <Button
                    w="40%"
                    bg="#788A5C"
                    border="1px"
                    borderColor="blackAlpha.800"
                    _hover={{
                      background: "#788A5C",
                      color: "black",
                    }}
                    color="black"
                    onClick={submiteLoginChef}
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                {/* <p>two!</p> */}
                <VStack spacing={5}>
                  <Box w="90%">
                    <Text color="black">Username</Text>
                    <Input
                      color="black"
                      value={username}
                      borderColor="blackAlpha.800"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Box>
                  <Box w="90%">
                    <Text color="black">password</Text>
                    <Input
                      color="black"
                      value={password}
                      borderColor="blackAlpha.800"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  <Button
                    w="40%"
                    bg="#788A5C"
                    border="1px"
                    borderColor="blackAlpha.800"
                    _hover={{
                      background: "#788A5C",
                      color: "black",
                    }}
                    color="black"
                    onClick={submiteLoginFoody}
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Login;