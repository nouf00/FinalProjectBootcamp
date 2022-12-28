import React from 'react'
import { Box, Button, Flex, Heading,Text 
    ,Card, CardBody, CardFooter, Image,Stack ,Tooltip, Icon, ButtonGroup, VStack, HStack} from '@chakra-ui/react'
    // import Navbar from './Navbar'
    import {  AddIcon,  DeleteIcon, EditIcon, PlusSquareIcon} from "@chakra-ui/icons"
    import AddNewPost from './Addpost'
    import { AiFillHome } from "react-icons/ai";
export default function Chef() {
  return (
  <div>
        {/* <Navbar/> */}
        {/* ------------------------------------------------------------------------------------------------- */}
        <Flex mt="2%" justifyContent="flex-start">
            <Image src="img/ChfeLogo.png" w="200" h="200"></Image>


            <Flex background="CEDABA"
            width="30%"
            height= "50%"
          fontFamily="Xanh Mono"
          fontSize="2xl"
          borderWidth='1px'
         borderRadius={"100"}
         backgroundColor= "#CEDABA"
         mt="30" 
         justify="space-around">
            <Text mt="5"  mb="5">Welcome  Cook lover  </Text> 
            {/* <Tooltip hasArrow label='Add new item ' bg="gray">
              <Button colorScheme="gray"variant='ghost' mt="30"> <Icon as={ChatIcon} w={8} h={8}  /></Button>
           </Tooltip> */}
             </Flex>
             <ButtonGroup ml="45%" mt="50" >
           

              <AddNewPost/>
           <Tooltip hasArrow label='Exploer another college ' bg="gray">
              <Button  colorScheme="red" variant="ghost" borderRadius="100"> <Icon as={AiFillHome} w={8} h={8} color="black" /></Button>
           </Tooltip>
           </ButtonGroup>
           
        </Flex>
{/*Card all item for one user profile  ---------------------------------------------------------------------------------------------------------------------------- */}

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  borderColor="#788A5C"
ml="30"
mr="50"
mt="10"

>
  <Image
  border="solid"
  borderColor="#788A5C"
 borderWidth='5px'
   objectFit='cover'
    maxW={{ base: '100%', sm: '22%' }}
    src='https://veggiecurean.com/wp-content/uploads/2019/04/Fig-Cake-1.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
    {/* <HStack spacing="150"> */}
    <Flex justifyContent="space-between">
      <Heading size='md' fontFamily="Xanh Mono" >The perfect latte</Heading>
    
  <ButtonGroup> <Tooltip hasArrow label='Delete item' bg="gray">
  <Button  colorScheme="red" variant="ghost" borderRadius="100"> <Icon as={DeleteIcon} w={8} h={8} color="black" /></Button>
</Tooltip>

<Tooltip hasArrow label='Edit item ' bg="gray">
  <Button colorScheme="red" variant="ghost" borderRadius="100"> <Icon as={EditIcon} w={8} h={8} color="black" /></Button>
</Tooltip>
</ButtonGroup>  
      </Flex>
      {/* </HStack> */}
      <Heading size='md'   fontFamily="Xanh Mono">Prise:90 </Heading>
      <Text py='2'   fontFamily="Xanh Mono">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      </Text>
    </CardBody>

    <CardFooter>
     <Text fontFamily="Xanh Mono">City: Riyadh  </Text>
    </CardFooter>
  </Stack>
</Card>



</div>


  )}












