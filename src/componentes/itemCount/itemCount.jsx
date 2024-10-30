import React, { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

export  const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    
    return (
            <Button onClick={() => onAdd(count)} size="lg" colorScheme="blue" ml="6">
                Agregar al carrito
            </Button>
            
    );
    
    

}
