import { Container, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <VStack marginTop='20px'>
        <Container 
         padding='2' maxW='container.sm' bg='red.200' color='black' centerContent>
       <Text as='b'> &copy;2024 | All Rights Reserved @ FooDwAy</Text>
  </Container>
  </VStack>
  </div>
  )
}

export default Footer