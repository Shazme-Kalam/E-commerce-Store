// import React, { useState } from 'react'
import { Button, Tabs, TabList, Tab,  Image, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../App.css';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Search2Icon } from '@chakra-ui/icons';
// import Banner from '../images/banner.webp'
// import Banner from '../images/images (1).jpeg'


function Header() {
    // const colors = useColorModeValue(
    //     ['red.100', 'blue.50', 'gray.200', 'teal.50', 'yellow.100', 'pink.100'],
    //     ['red.900', 'blue.900', 'gray.900', 'teal.900', 'yellow.900', 'pink.900'],
    // )
    // const [tabIndex, setTabIndex] = useState(0)
    // const bg = colors[tabIndex]

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>

            {/* <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
                <TabList variant='unstyled'>
                   <Tab>
                   </Tab>
                </TabList>
            </Tabs> */}

            <Tabs variant='unstyled'>
                <TabList>
                    <Image
                        boxSize='200px'
                        padding='2px'
                        objectFit='cover'
                        src='https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/278177550_684238192540598_4546628754146138434_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DLb1N10id7wAX_cwRHy&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfC7mbMFWXzPDCB2wqHrRO00jSDhS9CZac2cflC1BLrFnw&oe=65FE37A5'
                        // src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/301594647_155190343848002_1122702714439982025_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NiPLtjIic6IAX-T2Gu7&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCyytvbj7-9hzgF4Ss0cyfqfxiQ_2pjfWqrjHOAnErx-w&oe=65FCDC1F'
                        // src='https://media.licdn.com/dms/image/C4D03AQHvSHW8ipYg0Q/profile-displayphoto-shrink_800_800/0/1654279927522?e=1716422400&v=beta&t=eB0LC9Xfg6t5d4DgasFznIv97_e0wuac6R6tO6fWutU'
                        alt='logo'
                    />
                    <Button variant='unstyled' color='red' m='60px' ml='10px' p='20px' onClick={onOpen}>
                        <HamburgerIcon boxSize={10} />
                    </Button>

                    {/*  <Link to="/"> Home</Link></Tab> */}
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }} ml='240px'>
                        <Link to="/ramzan"> RAMZAN</Link>
                    </Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/drinks"> DRINKS</Link></Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/dishtype"> DISHTYPE</Link></Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/breakfast"> BREAKFAST</Link></Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/desserts"> DESSERTS</Link></Tab>
                    <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                        <Link to="/lunch|dinner"> LUNCH/DINNER</Link></Tab>

                    <Search2Icon boxSize={8} mt='80px' ml='20px' color='gray' />
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
                                    <Link to="/ramzan">Ramzan</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/fried">Fried Items</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/biryani">Biryani & Pulao</Link>
                                </Tab>
                            </Box>

                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/parathas">Parathas</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/healthy">Healthy</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/desserts">Desserts</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/chutney">Chutney & dips</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/pizzas">Pizzas</Link>
                                </Tab>
                            </Box>
                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/homemade">Homemade</Link>
                                </Tab>
                            </Box>

                            <Box _hover={{ color: 'white', backgroundColor: 'red', display: 'block' }}>
                                <Tab p='20px'>
                                    <Link to="/fastfood">Burgers & Sandwiches</Link>
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
