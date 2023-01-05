import React from 'react'
import CahtSlidbar from './CahtSlidbar'
import { Avatar, Box, Flex ,Heading,Text , Input ,Button} from '@chakra-ui/react'

export default function CahtPage() {
  return (
  <Flex h="100hv">
    <CahtSlidbar/>

    {/* ---------------------------------------------------------------------------------- page right section  */}

    <Flex 
    direction={"column"}
    flex={1}
     >
        {/* ------------------------------------------------------------ top bar */}
        <Flex  bg="gray.100"  h="10%" w="100%" align={"center"} borderBottom="solid 1px"
borderColor={"gray.100"} p="5">
            <Avatar src="" marginEnd={"5"}></Avatar>
           <Heading size={"md"}> nouf </Heading>
        </Flex>
        {/* ---------------------------------------------------------------------------- chat  */}
        <Flex flex={1} direction="column" >
         <Flex bg="red"  w="fit-content" borderRadius={"full"} p="3" m="3 ">        {/* الببل  للرسال المستقباله */}   
<Text> nouf</Text>
</Flex>


{/* ببل الرسال المرساله  */}


<Flex bg="yellow" w="fit-content" borderRadius={"full"} p="3" m="3 " alignSelf={"flex-end"}>         
<Text> nouf</Text>
</Flex>

        </Flex>
  {/* ---------------------------------------------------------------------------- bottom bar */}
    <Flex borderTop="solid 1px" borderColor={"gray.100"}
    h="81px" w="100%" align={"center"} p="6">
        <Input placeholder='Type a message'/>   
        <Button type='submit'  ml="50"  bg="#788A5C">
            Send
          </Button>
</Flex>




    </Flex>

  </Flex>
  )
}
