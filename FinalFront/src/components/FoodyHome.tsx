
import { Box , Button, Divider, Flex, Grid, GridItem, HStack, Image , Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import Navbar from './Navbar'

export default function FoodyHome() {
  return (
  <Box>
    {/* <Navbar/> */}

    {/* section one */}

    <Box>
  <Grid templateColumns='repeat(3, 1fr)' gap={1}>
  
  <GridItem w='100%' h='50'  borderColor="#788A5C">
    <Image src='img/Main Dishes RmBg.png' height="350" width="350" mb="-30" mt="-30"></Image>
    <Button fontSize={"2xl"} ml="170" mt="-40" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Main dishes </Button>
    <Divider orientation="vertical" borderColor="black" />
  </GridItem>
  
           
         
 
  <GridItem w='100%' h='50'  borderColor="#788A5C">
    <Image src='img/Entrees.png' height="300" width="300" mb="-30"></Image>
    <Button  fontSize={"2xl"} ml="170" mt="-40" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Entrees </Button>
  </GridItem>
  <GridItem w='100%' h='50'  borderColor="#788A5C">
    <Image src='img/Traditional.png' height="300" width="300" mb="-30"></Image>
    <Button  fontSize={"2xl"} ml="170" mt="-40" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Traditional </Button>
  </GridItem>
 </Grid>
 </Box>

 {/* _______________________________________________________________________________________________________ */}



 <VStack
        bgImage="img/cook.png"
           marginTop={200}
        objectFit="fill"
        backgroundSize="cover"
        h="50vh"
        // opacity="0.60"
        w="100%"
         position="relative"
      >
     
         <Box background={"white"}
         pt="15"
         paddingBottom={"15"} 
         pr="20"
         pl="20"
         mt="150"
         fontFamily="Xanh Mono"
         fontSize="2xl"
         borderWidth='1px'
         borderColor="#788A5C">Food Section </Box>

 </VStack>

 {/* ---------------------------------------------------------------------------------------------- */}
 

 <Grid templateColumns='repeat(3, 1fr)' alignItems={"center"} >
  <GridItem w='100%' h='50' >
    <Image src='img/Dessert.png' height="350" width="350" mt="-10"></Image>
    <Button fontSize={"2xl"} ml="200"  mt="-210" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Dessert </Button>
  </GridItem>
  <GridItem w='100%' h='50'  borderColor="#788A5C">
    <Image src='img/Dreinks.png' height="250" width="250" mb="-30"></Image>
    <Button  fontSize={"2xl"} ml="170" mt="-50" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Dreinks </Button>
  </GridItem>
  <GridItem w='100%' h='50'  borderColor="#788A5C">
    <Image src='img/Helthy.png' height="250" width="250" mb="-30"></Image>
    <Button fontSize={"2xl"} ml="170" mt="-50" fontFamily="Xanh Mono" colorScheme="gray" textColor="black"  variant='ghost'>Healthy </Button>
  </GridItem>
 </Grid>
    
  </Box>
  )
}
