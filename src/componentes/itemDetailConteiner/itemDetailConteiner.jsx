import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
  ChakraProvider

} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ItemCount } from "../itemCount";
import { useContext, useState } from "react";
import { NavBar } from "../navBar";
import { CartWidget } from "../CartWidget";
import { CartContext } from "../../context";

export const ItemDetailContainer = ({item}) => {
  const [count , setCount] = useState(0);
  const {cartState,addItem} = useContext(CartContext)
  const handleAddItem = () => {
    const newCount = count +1
    setCount(newCount);
    addItem(item, newCount);
    toast({
      title: "Item agregado.",
      description: "Has agregado item/s al carrito",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  }
  const handleRemoveItem = () => {
    setCount(count - 1);
    removeItem(item);
  };
  const [cartItems, setCartItems] = useState(0);
  const toast = useToast();
    const handleAdd = () => {
  };
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              item.thumbnail
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {item.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${item.price} USD
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>
                {item.description}
              </Text>
            </VStack>
          </Stack>
          <Text as={"span"} fontWeight={"bold"} fontFamily={"monospace"} fontSize={25}>
                    rating : {item.rating}  ★
                  </Text>
          <Text as={"span"} fontWeight={"bold"} fontFamily={"monospace"} fontSize={25}>
                    stock : {item.stock}
                  </Text>{" "}
          <ChakraProvider>
          </ChakraProvider>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1vh', marginTop:'20px' }}>
        <ItemCount initial={1} stock={5} onAdd={handleAddItem}  />
        <button onClick={handleAdd}></button>
        </div>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
    
  );
};