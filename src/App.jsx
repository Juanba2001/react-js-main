import React, { useState } from "react";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import {ItemDetailContainer, NavBar} from "./componentes";
import { ItemListContainer} from "./componentes/item";
import {ItemCount} from './componentes';
import {CartWidget} from './componentes/CartWidget'
import MainLayout from "./layouts/MainLayout";
import {Home} from "./pages";
import { MainRouter } from "./router";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./context";


const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const toast = useToast();
  

    const handleAdd = (quantity) => {
    setCartItems(cartItems + quantity);
    toast({
      title: "Item agregado.",
      description: `Has agregado ${quantity} item${quantity > 1 ? 's' : ''} al carrito.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };
  

  return (
    <ChakraProvider>      
      <MainLayout>                   
        <CartProvider>
        <MainRouter /> 
        </CartProvider>
        </MainLayout>
    </ChakraProvider>
  );
};

export default App;





