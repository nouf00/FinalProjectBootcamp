import React, { useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Icon,
  Flex,
  Image,
  Text,
  Tooltip

} from '@chakra-ui/react'
import {  ChatIcon} from "@chakra-ui/icons"
export default function ChatFoody() {
 const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
       <Tooltip hasArrow label='Chat withe chif to order ' bg="gray">
      <Button  onClick={onOpen}  colorScheme="gray" variant='ghost' mt="4%">  
        <Icon as={ChatIcon} w={8} h={8} />
      </Button>
      
    </Tooltip>
      {/* --------------------------------------------------------------------------- */} 
      <Drawer
        isOpen={isOpen}               
        placement='right'
        onClose={onClose}
        // finalFocusRef={btnRef}    // why ?
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' bg="#CEDABA">
          <Flex justify="space-around">
        
           <Image src="img/ChfeLogo.png" w="30%" h="30%"  borderRadius='full' ></Image>
           <Text mt="5%">Cook lover</Text>
          </Flex>
          </DrawerHeader>
          <DrawerBody>
            {/* here is get a chat  contents */}
            {/* يعني كيف  */}
            {/* يعني كل الرساله الي بيرسلها المستخدم للاسره تعرض كانه دايركت مسج عادي لكن كيف بتصير نلقاكم الحلقة القادمة  */}
            <p>Some contents...</p>         
           
            
         </DrawerBody>  
          <DrawerFooter bg="#CEDABA">   
    {/*شدعوا شدهوا شدعوا حتى في الكومنت عندي ايرور انا ياربي تعبت  */}
         <Input placeholder='Type a message' />   
        <Button

            bg="#788A5C"              
            type='submit'
            ml="10%"
           
                     >
            ٍSend
          </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   
    </>
    
  )
}



