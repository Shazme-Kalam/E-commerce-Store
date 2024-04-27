import React from 'react';
import { Box, Card, CardBody, CardFooter, CardHeader, Container, Flex, Grid, GridItem, Text} from '@chakra-ui/react';
import Logo from '../images/images.png';
import Prize from '../images/prizelogo.webp';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  
    return (
      <>
        <Grid
          templateRows={['1fr', '1fr 0.1fr']}
          templateColumns={['1fr', 'repeat(7, 1fr)']}
          gap={0}

        >
          <GridItem className="grid-item-logo" colSpan={[7, 5]} bg='black'>
            <Card color='white' bg='black'>
              <Box mx={0} my={0}>
                <CardHeader>
                  <Flex alignItems='center' flexWrap='wrap'>
                    <img name='Food wAy' src={Logo} width={'98px'} alt='banner' />
                    <Tabs variant="unstyled" isLazy>
                      <TabList color='white' display="flex" flexWrap="wrap">
                        <Tab _focus={{ color: 'red' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                          <Text as='b'>HOME</Text>
                        </Tab>
                        <Tab _focus={{ color: 'red', boxShadow: 'none' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                          <Text as='b'>RECIPES</Text>
                        </Tab>
                        <Tab _focus={{ color: 'red', boxShadow: 'none' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                          <Text as='b'>CONTACT US</Text>
                        </Tab>
                        <Tab _focus={{ color: 'red', boxShadow: 'none' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                          <Text as='b'>ABOUT US</Text>
                        </Tab>
                        <Tab _focus={{ color: 'red', boxShadow: 'none' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
                          <Text as='b'>PRIVACY POLICY</Text>
                        </Tab>
                      </TabList>
                    </Tabs>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text fontSize='16px'>
                    <p>Food Way is all about redefining ‘Cooking’ for you! It’s the solution to that never ending problem of preparing high quality delicious food and curtailing the eating out habits of your loved ones! With modernized and yet simple cooking methods, you are surely in for a flavorsome treat with our recipes that will surely make you the next talk of the  town!</p>
                    <p>Being Pakistan’s first digital food video portal, we understand your difficulty of being unable to execute that perfect dish just by going through those long recipes & ending up with something not as good as the one you see on paper. Hence, we make sure to get this covered by bringing in videos that will help you prepare the same delicious food as you see in our videos.</p>
                  </Text>
                </CardBody>
                <CardFooter
                  justify='space-between'
                  flexWrap='wrap'
                  sx={{
                    '& > button': {
                      minW: '136px',
                    },
                  }}
                >
                </CardFooter>
              </Box>
            </Card>
          </GridItem>

          <GridItem colSpan={[7, 2]} bg='black' display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
            <img name="PrizeGift" src={Prize} alt="logo" width={'140px'} />
            <Text fontSize='20px' color='white' mt={2}>GET SOCIAL WITH US</Text>
            <Flex mt={5} display="flex" flexWrap="wrap">
              <Box borderRadius="50%" p='8px' m='8px' border="2px solid blue" _hover={{ color: 'red' }}>
                <FaFacebookF color="blue" size="24px" />
              </Box>
              <Box borderRadius="50%" p='8px' m='8px' border="2px solid green">
                <FaTwitter color="green" size="24px" _hover={{ color: 'red' }} />
              </Box>
              <Box borderRadius="50%" p='8px' m='8px' border="2px solid red">
                <FaYoutube color="red" size="24px" />
              </Box>
              <Box borderRadius="50%" p='8px' m='8px' border="2px solid purple">
                <FaInstagram color="purple" size="24px" />
              </Box>
            </Flex>
          </GridItem>
        </Grid>

<Container
          padding='2'
          maxW='container.lg'
          color='black'
          centerContent
          >
          <Text> &copy;2024 | All rights of publications are reserved by<Text as='b' color='red.500'> Food wAy</Text>. Reproduction without consent is not allowed. </Text>
          <Tabs variant='unstyled'>
            <Tab textDecoration='none' _focus={{ color: 'red', boxShadow: 'none' }} _hover={{ color: 'red' }} _active={{ color: 'red' }}>
              <Text>PRIVACY POLICY</Text>
            </Tab>
          </Tabs>
        </Container>
      </>
    );
    }
    
  // };

  export default Footer;