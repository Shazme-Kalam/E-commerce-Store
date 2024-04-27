import React from 'react'
import { Button, Tabs, TabList, Tab, Image, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Box, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../App.css';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/AppContext';
// import { CartContext } from '../context/AppContext';

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        state: { Cart }
    } = CartContext();

    // console.log(dispatch)
    return (
        <>
            <Tabs variant='unstyled'>
                <TabList>
                    <Image
                        boxSize='240px'
                        padding='2px'
                        objectFit='cover'
                        src='https://media.licdn.com/dms/image/C4D03AQHvSHW8ipYg0Q/profile-displayphoto-shrink_800_800/0/1654279927522?e=1716422400&v=beta&t=eB0LC9Xfg6t5d4DgasFznIv97_e0wuac6R6tO6fWutU'
                        alt='logo'
                    />
                    <Button variant='unstyled' color='red' m='60px' ml='20px' p='20px' onClick={onOpen}>
                        <HamburgerIcon boxSize={10} />
                    </Button>

                    {/* <Link to="/"> Home</Link> */}
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }} ml='240px'>
                        <Link to="/product">Menu</Link>
                    </Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/about"> About Us</Link></Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/footer"> Contact</Link></Tab>

                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/signup"><FaRegUser style={{ fontSize: '24px', margin: '6px' }} /> SignUp </Link></Tab>


                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/login"><FaRegUser style={{ fontSize: '24px', margin: '6px' }} /> LogIn</Link></Tab>

                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/cart"><FaShoppingCart style={{ fontSize: '24px', margin: '6px' }} /> Cart<Badge variant='solid' colorScheme='red'>
    {Cart}
  </Badge>{" "}</Link></Tab>

                </TabList>
            </Tabs>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <br />
                    <br />
                    <DrawerHeader borderBottomWidth='2px' p='20px' color='white' backgroundColor='red'>Recipe Menu</DrawerHeader>
                    <DrawerBody p='0px'>

                        <Tabs variant='unstyled'>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Ramzan</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Fried Items</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Biryani & Pulao</Link>
                                </Tab>
                            </Box>

                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Parathas</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Healthy</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Desserts</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Chutney & dips</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Pizzas</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Homemade</Link>
                                </Tab>
                            </Box>

                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/product">Burgers & Sandwiches</Link>
                                </Tab>
                            </Box>
                        </Tabs>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </>
    );
}
export default Header;
