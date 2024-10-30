
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Flex,
    Stack,
    Img,} from '@chakra-ui/react'
import "../../styles/itemList.css"

import { Link } from 'react-router-dom';
import { BsArrowUpRight } from "react-icons/bs";
import { color } from 'framer-motion';
export   const ItemList = ({ products }) => {
    return (
    <Flex justify="center" wrap={"wrap"}>
        {products.map((item) => {
        return (
            <Center py={12} key={item.id}>
    <Box 
    className='BoxItem BoxItem:hover'
        role={'group'}
        p={6}
        margin={'40px'}
        maxW={'100%'}
        w={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        overflow={'hidden'}
        overflowX={'hidden'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={0}>
        <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'330px'}
        _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${item.images})`,
            filter: 'blur(15px)',
            zIndex: -1,
        }}
        _groupHover={{
            _after: {
            filter: 'blur(20px)',
            },
        }}>
        <Img
            rounded={'lg'}
            height={300}
            width={282}
            objectFit={'scale-down'}
            src={item.thumbnail}
            alt="#"
        />
        </Box>
        <Stack pt={10} align={'center'}>
        <Text color={'black.500'} fontSize={'sm'} textTransform={'uppercase'} >
            {item.description}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {item.title}
        </Heading>
        <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            {item.price}
            </Text>
            <Text  color={'gray.600'}>
            {item.stock}
            </Text>
            <Link to={`/item/${item.id}`}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            view more
        </Heading>
            </Link>
            <BsArrowUpRight />
        </Stack>
        </Stack>
    </Box>
    </Center>
        );
        })}
    </Flex>
    );
};


