import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center
    
    
  } from "@chakra-ui/react";
  import { FiMenu } from 'react-icons/fi'
  import { MoonIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
  import { CartWidget } from "../CartWidget";
  import { useCategory } from "../../Hooks";
  import { Link } from "react-router-dom";
  import { FaHome } from "react-icons/fa";
  import "../../styles/navBar.css"
import { createProductsFirestore } from "../../helpers";
  
  export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { categories } = useCategory();
    return (
      <>
        <Box 
        bg={useColorModeValue("gray.100", "gray.900")} px={8}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Link to="/"> 
            <FaHome size="2rem" /> 
          </Link> </Box>
            
            <Menu>
              
              <MenuButton className="cate"
              as={Button} cursor="pointer" style={{ marginLeft: 130 }}>
                Categorias
              </MenuButton>
              <MenuList height={"300px"} overflowY={"scroll"}>
                {categories.map((category) => (
                  <MenuItem key={category.slug}>
                    <Link to={`/category/${category.slug}`} >{category.name}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Flex alignItems={"center"}>
              <CartWidget />
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPRwk59hmmFaSO2fNvTKelV_6j2h6i5pf0A&s"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPRwk59hmmFaSO2fNvTKelV_6j2h6i5pf0A&s"}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };