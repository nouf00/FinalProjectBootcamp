import { Box, VStack,Image, Flex,Text , Grid, GridItem, Input, Button, HStack} from '@chakra-ui/react'
import React from 'react'
// import {ChatEngin} from "react-chat-engine"
export default function Chatlist() {
  return (
    <div>
{/* chat bar  ---------------------------------------------------------------------*/}
   
   
   <Box mt="2%">
 
    <Flex justify="start" borderBottomWidth='1px'
   borderColor="black"
   width={"20%"}
   h='100%'


   bgColor="red">
    
        <Image src="img/user.jpg" w="20%" h="20%" ml="2%"  borderRadius='full' ></Image>
        <Text ml="5%" mt="7%" fontFamily="Xanh Mono">Username</Text>

      
  
       </Flex>
       <Box></Box>
       <HStack  ml="20%" mb="0%">
       <Input placeholder='Type a message'/>   
        <Button

                       
            type='submit'
            ml="10%"
           
                     >
            ٍSend
          </Button>
          </HStack>
       </Box> 
  
       
  
 
  



    </div>
  )
}
