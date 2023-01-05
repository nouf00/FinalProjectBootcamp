import React from 'react'
import { Box, Button, Flex, Heading,Text 
    ,Card, CardBody, CardFooter, Image,Stack ,Tooltip, Icon, ButtonGroup, VStack, HStack,
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
  
    FormControl, FormLabel, IconButton, Input, useToast, Select} from '@chakra-ui/react'
    // import Navbar from './Navbar'
    import {  AddIcon,  DeleteIcon, EditIcon, PlusSquareIcon} from "@chakra-ui/icons"
    // import AddNewPost from './Addpost'

    import { AiFillHome } from "react-icons/ai";
    import { IoIosAddCircle , IoMdClose} from "react-icons/io";
    import { useEffect, useRef, useState } from 'react';
    import { ChevronDownIcon } from "@chakra-ui/icons";
import AddNewPost from './updatepost';
export default function Chef() {
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


    // ---------------------------------------------------------------------------------------- get 

   const fetchItem = async () => {
      const request = await fetch("/api/v1/chefpage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    
      const data = await request.json();
      setItem(data);}
      // --------------------------------------------------------------------post 

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
            method: "POST",
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
      // --------------------------------------------------------------------------------------------------------- start code fetch delet 

      const deleteItem = async (id: string) => {
        console.log(id);
    
        try {
          const request = await fetch(`/api/v1/chefpage/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
          fetchItem();
        } catch (error) {
          console.log(error);
          toast({
            title: "Server Error!",
            status: "error",
            duration: 3000,
            position: "top",
          });
        }
      };


      // ----------------------------------------------------------------------------------------------------------  end code delet fetch  & start code put fetch

      const updateItem = async (id: string) => {
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
          const request = await fetch(`/api/v1/chefpage/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              id:id,
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
      //--------------------------------------------------------------------------------------------------------------- end code put fetch

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
           
             </Flex>
             <ButtonGroup ml="45%" mt="50" >
           <IconButton
    bgColor="black"
    colorScheme="white"
    aria-label='Add new Post '
    onClick={onOpen}
    icon={<IoIosAddCircle/>}
  />
        {/*--------------------------------------------------------------------- start modal for add new item  */}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
           >
            <Box >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader  paddingRight={180}> Add new item</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
              <FormLabel> title of prodect</FormLabel>
              <Input type ={title}  onChange={(e) => setTitle(e.target.value)}
              placeholder = "Add title for your item"/>
              <FormLabel> Discrbtion of prodect</FormLabel>
            <Input type ={description} onChange={(e)=> setDescription(e.target.value)} 
             placeholder="Add description for your item "/>
              <FormLabel> Price </FormLabel>
              <Input type ={price} onChange={(e)=> setPrice(e.target.value)} 
             placeholder="Add Price for your item"  />
            </FormControl>

            <Box paddingTop={5}>
            <Select
                    w="30"
                    placeholder="select   "
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <Button>x</Button>
                    <option value=" Main_dishes"> Main dishes</option>
                    <option value="Entrees">Entrees </option>
                    <option value="Traditional">Traditional</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drink">Drink</option>
                    <option value="Healthy">Healthy</option>
                  </Select>
        
  </Box>
  <Box paddingTop={"10"}>
  <FormLabel> Add image for</FormLabel>
  <Input id="fileupload" type="file" name="image" placeholder='Image' />
  </Box>
            </ModalBody>
  
            <ModalFooter>
            <Button  marginRight="30%" bgColor={"#549A0A"}  paddingRight='10' paddingLeft={'10'} borderRadius="20" color={"white"} onClick={addNewItem}> Add  </Button>
            </ModalFooter>
          </ModalContent>
          </Box>
        </Modal>
                        {/*--------------------------------------------------------------------- end  modal for add new item  */}


           <Tooltip hasArrow label='Exploer another college ' bg="gray">
              <Button  colorScheme="red" variant="ghost" borderRadius="100"> <Icon as={AiFillHome} w={8} h={8} color="black" /></Button>
           </Tooltip>
           </ButtonGroup>
           
        </Flex>

{/*Card all item for one user profile  ---------------------------------------------------------------------------------------------------------------------------- */}



{item.map((item: any) => (

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  borderColor="#788A5C"
ml="30"
mr="50"
mt="10"
key={item.id}

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
      <Heading size='md' fontFamily="Xanh Mono" >{item.title}</Heading>
    
  <ButtonGroup> <Tooltip hasArrow label='Delete item' bg="gray">
  <Button  onClick={() => {deleteItem(item.id)}} colorScheme="red" variant="ghost" borderRadius="100"> <Icon as={DeleteIcon} w={8} h={8} color="black" /></Button>
</Tooltip>

{/* ------------------------------------------------------------------------------------------------------------ update  */}

 <Tooltip hasArrow label='Edit item ' bg="gray">
<IconButton

colorScheme="red" 
variant="ghost"
 borderRadius="100"
    aria-label='Edit item '
    onClick={onOpen}
    key = {item.id}>

    <Icon as={EditIcon} w={8} h={8} color="black" /></IconButton></Tooltip>

        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
           >
            <Box >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader  paddingRight={180}> Add new item</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
              <FormLabel> title of prodect</FormLabel>
              <Input type ={title} value={title}  onChange={(e)=>setTitle(e.target.value)}/>
              <FormLabel> Discrbtion of prodect</FormLabel>
              <Input  type ={description} value={description}  onChange={(e)=>setDescription(e.target.value)} />
              <FormLabel> Price </FormLabel>
              <Input   type ={price} value={price}  onChange={(e)=>setPrice(e.target.value)} />
            </FormControl>
            <Box paddingTop={5}>
        <Select
                    w="30"
                    placeholder="select the type of prodect "
                    value={ type}
                    // type = {type}
                    onChange={(e) => setType(e.target.value)}
                  >
                  
                   
                    <option value=" Main_dishes"> Main dishes</option>
                    <option value="Entrees">Entrees </option>
                    <option value="Traditional">Traditional</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drink">Drink</option>
                    <option value="Healthy">Healthy</option>
                  </Select>
  </Box>
  <Box paddingTop={"10"}>
  <FormLabel> Add image for</FormLabel>
  <Input id="fileupload" type="file" name="image" placeholder='Image' />
  </Box>
            </ModalBody>
  
            <ModalFooter>
            <Button  marginRight="30%" bgColor={"#549A0A"}  paddingRight='10' paddingLeft={'10'} borderRadius="20" color={"white"}     onClick={()=> { updateItem(item.id)}}    > Edit </Button>
            </ModalFooter>
          </ModalContent>
          </Box>
        </Modal>

        </ButtonGroup>  

                {/*--------------------------------------------------------------------- end  modal for update item  */}

      </Flex>
      {/* </HStack> */}
      <Heading size='md'   fontFamily="Xanh Mono">{item.price} </Heading>
      <Text py='2'   fontFamily="Xanh Mono">
      {item.discrbtion}    
        </Text>
    </CardBody>

    <CardFooter>
     <Text fontFamily="Xanh Mono">{item.city}  </Text>
    </CardFooter>
  </Stack>
</Card>

))}

</div>


  )}

// وصلنا بسلام 
