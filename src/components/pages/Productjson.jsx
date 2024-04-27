// import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
// import React, { useState, useEffect } from 'react';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/recipes')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data received from API:', data);
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <>
//       <Heading as="h1" mb="4">Products</Heading>
//       <SimpleGrid columns={[1, 2, 3]} spacing="4">
//         {products.map((item, index) => (
//           <Box key={index} maxWidth="280px">
//             <Card>
//               <CardBody>
//                 <Image src={item.image} alt={item.name} borderRadius="lg" />
//                 <Stack mt="6" spacing="3">
//                   <Heading size="md">{item.name}</Heading>
//                   <Text>{item.cuisine}</Text>
//                   {/* <Heading size="md">Instructions</Heading>
//                   <Text>{item.instructions}</Text> */}
//                   <Text color="red.600" fontSize="2xl" align='center'>$450</Text>
//                   <Button variant="solid" colorScheme="red">
//                     Buy now
//                   </Button>
//                 </Stack>
//               </CardBody>
//               <Divider />
//               <CardFooter>
//                 <ButtonGroup spacing="1">
//                   <Button ml={'-3'} p={'2'} variant="solid" colorScheme="red">
//                     Add to cart
//                   </Button>
//                   <Button  variant="solid" colorScheme="red">
//                     Remove from cart
//                   </Button>
//                 </ButtonGroup>
//               </CardFooter>
//             </Card>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// }

// export default Products;
