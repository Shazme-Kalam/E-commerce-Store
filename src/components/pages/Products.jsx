import React from "react";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CartContext } from "../../context/AppContext";
// import Header from "../Header";


const Products = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartContext();
  console.log("producs", products);
  console.log("cart", cart);
  const handleCart = (product) => {
    const newObj = {...product, qty: 0}
    dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: newObj
    })
  };
  const handleRemoveCart = (product) => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: product
    })
  }

  return (
    <>
      {/* <Header /> */}

      <Heading as="h1" mb="4" color="red" align = 'center'>
        FOOD MENU
      </Heading>
    

      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {products.map((item, index) => (
          <Box key={index} ml='50px' maxWidth="280px">
            <Card>
              <CardBody>
                <Image src={item.image} alt={item.name} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text>{item.cuisine}</Text>
                  <Text color="red.600" fontSize="2xl" align="center">
                    $450
                  </Text>
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="1">
                  <Button onClick={() => handleCart(item)} ml={"-3"} p={"2"} variant="solid" colorScheme="red">
                    Add to cart
                  </Button>
                  <Button onClick={() => handleRemoveCart(item)} variant="solid" colorScheme="red">
                    Remove from cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
