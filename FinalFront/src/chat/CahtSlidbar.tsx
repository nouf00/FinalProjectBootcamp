import { Avatar, Flex,Heading,Text } from '@chakra-ui/react'
import React from 'react'



export default function CahtSlidbar() {
    
  
       
  return (

        <Flex
        //  backgroundColor={"red"}
         h="100vh"
         w="300px"
         borderEnd="solid 1px"
         borderColor={"gray.100"}
         direction={"column"}
       >
           


<Flex 
h="10%" w="100%"
align={"center"}
borderBottom="solid 1px"
borderColor={"gray.100"}

>
<Avatar ml="3"  src='' />
<Text ml="3"> usernamr</Text>

</Flex>
<Heading size={"md"} padding={"3"}  textAlign="center">Chat List </Heading>


{/* ------------------------------------------------------------------------------ list contect  */}
 <Flex overflow={"scroll"} direction="column" >                {/*   sx={{scrollbarwidth:"none"}} is not work */}
<Flex p ="2" _hover={{ bg :"#788A5C"  }} cursor="pointer" align={"center"} >
            <Avatar marginEnd ="3" src=""/>
            <Text> Contect user </Text>
        </Flex>


       
        </Flex>
       </Flex>

  )
}
