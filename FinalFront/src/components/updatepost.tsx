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
    MenuItem,
    useToast, } from "@chakra-ui/react"
    import { IoIosAddCircle , IoMdClose} from "react-icons/io";
  import { useEffect, useRef, useState } from 'react';
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { useNavigate } from "react-router-dom";
 
  
  
   function AddNewPost(){

    
    const [item, setItem] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const toast = useToast();



  
    const { isOpen, onOpen, onClose } = useDisclosure()
    
      const initialRef = useRef(null)
      const finalRef = useRef(null)

      const addNewItem = async () => {
        if (!title && !description && !price && !type) {
          toast({
            title: " all fileds are required ",
            status: "error",
            duration: 3000,
            position: "top",
          });
    
          return;
        }
    
        try {
          const request = await fetch("/api/v1/chefpage", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              title: title,
              discrbtion: description,
              prise: Number(price),
              type: type,
              image: image,
            }),
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
          fetchItem();
          setTitle("");
          setDescription("");
          setPrice("");
          onClose();
    
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchItem();
      }, []);
  
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

function fetchItem() {
  throw new Error("Function not implemented.");
}
