import { Button, ButtonGroup, FormControl, FormLabel, IconButton, Input,
    Box,
     Stack, 
     Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    MenuButton,
    Menu,
    MenuList,
    MenuItem, } from "@chakra-ui/react"
    import { IoIosAddCircle , IoMdClose} from "react-icons/io";
  import { useEffect, useRef, useState } from 'react';
  import { ChevronDownIcon } from "@chakra-ui/icons";
  
  
   function AddNewPost(){
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    
      const initialRef = useRef(null)
      const finalRef = useRef(null)
  
    return (
      <>
  
        <IconButton
    bgColor="black"
    colorScheme="white"
    aria-label='Add new Post '
    onClick={onOpen}
    icon={<IoIosAddCircle/>}
  />
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
           >
            <Box dir="rtl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader  paddingRight={180}> Add new item</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
              <FormLabel> title of prodect</FormLabel>
              <Input type ="text" />
              <FormLabel> Discrbtion of prodect</FormLabel>
              <Input type ="text" />
              <FormLabel> Price </FormLabel>
              <Input type ="number" />
            </FormControl>
            <Box paddingTop={5}>
            <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
Select     </MenuButton>
    <MenuList>
      <MenuItem>Main dishes</MenuItem>
      <MenuItem>Entrees </MenuItem>
      <MenuItem>Traditional</MenuItem>
      <MenuItem>Dessert</MenuItem>
      <MenuItem>Dreinks</MenuItem>
      <MenuItem>Healthy</MenuItem>
    </MenuList>
  </Menu>
  </Box>
  <Box paddingTop={"10"}>
  <FormLabel> Add image for</FormLabel>
  <Input type="file" name="image" placeholder='Image' />
  </Box>
            </ModalBody>
  
            <ModalFooter>
            <Button  marginRight="30%" bgColor={"#549A0A"}  paddingRight='10' paddingLeft={'10'} borderRadius="20" color={"white"}> نشر </Button>
            </ModalFooter>
          </ModalContent>
          </Box>
        </Modal>
      </>
    )
  }
  export default AddNewPost;