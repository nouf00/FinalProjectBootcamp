
import { Button, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Nav from "../navbar/Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <style>
        {" "}
        @import
        url('https://fonts.googleapis.com/css2?family=Waterfall&display=swap');{" "}
      </style>
      <Nav />
      <Heading fontFamily="Xanh Mono" textAlign="center" mt="8">
        Familyfood Station
      </Heading>
      <Text
        ml="150"
        mt="-10"
        opacity="0.60"
        fontFamily="waterfall"
        textAlign="center"
        color="#788A5C"
        fontSize="7xl"
      >
        made with love
      </Text>
      <VStack fontFamily="Xanh Mono" textAlign="center" fontSize="3xl">
        <Text>Craving For Homemade Food? </Text>
        <Text>We Will Find You The Home That Will Make It</Text>
      </VStack>
      <HStack
        bgImage="img/img2.png"
        objectFit="fill"
        backgroundSize="cover"
        h="100vh"
        w="100%"
        opacity="0.60"
        position="relative"
      ></HStack>
      <VStack
        fontFamily="Xanh Mono"
        shadow="2xl"
        mr="40%"
        spacing="1.5rem"
        width="30%"
        h="20vh"
        rounded="3xl"
        boxShadow="2xl"
        ml="35%"
        mt="10"
        fontSize="2xl"
      >
        <VStack mt="5" spacing="1rem">
          <Text>If you are not member Familyfood Station</Text>
          <Text fontSize="20" fontWeight="bold">
            Join with us:
          </Text>
          <Flex>
          <Link to="/foodyregister">  <Button
              mr="10"
              bg="#788A5C"
              border="1px"
              borderColor="blackAlpha.800"
            >
              Foody
            </Button></Link>
          <Link to="/chefregister"> <Button
              p="5"
              ml="10"
              bg="#788A5C"
              border="1px"
              borderColor="blackAlpha.800"
            >
              Chef
            </Button></Link> 
          </Flex>
        </VStack>
      </VStack>
      <Footer />
    </div>
  );
};

export default Homepage;





































































































// import { Button, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
// import Nav from "../navbar/Navbar";
// import Footer from "./Footer";

// const Homepage = () => {
//   return (
//     <div>
//       <style>
//         {" "}
//         @import
//         url('https://fonts.googleapis.com/css2?family=Waterfall&display=swap');{" "}
//       </style>
//       <Nav />
//       <Heading fontFamily="Xanh Mono" textAlign="center" mt="8">
//         Familyfood Station
//       </Heading>
//       <Text
//         ml="150"
//         mt="-10"
//         opacity="0.60"
//         fontFamily="waterfall"
//         textAlign="center"
//         color="#788A5C"
//         fontSize="7xl"
//       >
//         made with love
//       </Text>
//       <VStack fontFamily="Xanh Mono" textAlign="center" fontSize="3xl">
//         <Text>Craving For Homemade Food? </Text>
//         <Text>We Will Find You The Home That Will Make It</Text>
//       </VStack>
//       <HStack
//         bgImage="img/img2.png"
//         objectFit="fill"
//         backgroundSize="cover"
//         h="100vh"
//         w="100%"
//         opacity="0.60"
//         position="relative"
//       ></HStack>
//       <VStack
//         fontFamily="Xanh Mono"
//         shadow="2xl"
//         mr="40%"
//         spacing="1.5rem"
//         width="30%"
//         h="20vh"
//         rounded="3xl"
//         boxShadow="2xl"
//         ml="35%"
//         mt="10"
//         fontSize="2xl"
//       >
//         <VStack mt="5" spacing="1rem">
//           <Text>If you are not member Familyfood Station</Text>
//           <Text fontSize="20" fontWeight="bold">
//             Join with us:
//           </Text>
//           <Flex>
//             <Button
//               mr="10"
//               bg="#788A5C"
//               border="1px"
//               borderColor="blackAlpha.800"
//             >
//               Foody
//             </Button>
//             <Button
//               p="5"
//               ml="10"
//               bg="#788A5C"
//               border="1px"
//               borderColor="blackAlpha.800"
//             >
//               Chef
//             </Button>
//           </Flex>
//         </VStack>
//       </VStack>
//       <Footer />
//     </div>
//   );
// };

// export default Homepage;
