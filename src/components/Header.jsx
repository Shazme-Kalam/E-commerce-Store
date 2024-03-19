import React, { useState } from 'react'
import { Tabs, TabList, Tab, useColorModeValue, Text, Image, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../App.css';
// import Banner from '../images/images (1).jpeg'


function Header() {
    const colors = useColorModeValue(
        ['red.100', 'blue.50', 'gray.200', 'teal.50', 'yellow.100', 'pink.100'],
        ['red.900', 'blue.900', 'gray.900', 'teal.900', 'yellow.900', 'pink.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]
    return (
        <>
            <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
                <TabList>
                    <Image
                        boxSize='80px'
                        padding='3px'
                        objectFit='cover'
                        // src='https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/278177550_684238192540598_4546628754146138434_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DLb1N10id7wAX_cwRHy&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfC7mbMFWXzPDCB2wqHrRO00jSDhS9CZac2cflC1BLrFnw&oe=65FE37A5'
                        // src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/301594647_155190343848002_1122702714439982025_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NiPLtjIic6IAX-T2Gu7&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCyytvbj7-9hzgF4Ss0cyfqfxiQ_2pjfWqrjHOAnErx-w&oe=65FCDC1F'
                        src='https://media.licdn.com/dms/image/C4D03AQHvSHW8ipYg0Q/profile-displayphoto-shrink_800_800/0/1654279927522?e=1716422400&v=beta&t=eB0LC9Xfg6t5d4DgasFznIv97_e0wuac6R6tO6fWutU'
                        alt='logo'
                    />
                    <Tab> <Link to="/"><Text as='b'> Home</Text></Link></Tab>
                    <Tab> <Link to="/products"><Text as='b'> Products</Text></Link></Tab>
                    <Tab> <Link to="/features"><Text as='b'> Features</Text></Link></Tab>
                    <Tab> <Link to="/signup"><Text as='b'> SignUp</Text></Link></Tab>
                    <Tab> <Link to="/login"><Text as='b'> LogIn</Text></Link></Tab>
                </TabList>
            </Tabs>
            <Text
                bgGradient='linear(to-l,  blue.200,  red.400, teal.300)'
                bgClip='text'
                fontSize='7xl'
                fontWeight='extrabold'
                align='center'
            >
                Welcome
            </Text>
            <Container>
                <img src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/405139012_6659183927512801_8106278907182252361_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lLkzqNWZDgYAX8XNaZv&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDKt8Czx5aJMamRlzZYIaPxHEtsbXd8eoawdkHT_22UcA&oe=65FE9751' alt="Banner" />
            </Container>

        </>
    );
}
export default Header;