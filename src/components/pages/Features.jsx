import React from 'react';
import Banner from '../../images/banner.webp';
import { Image, Text, Box } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Features = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image
        width={['100%', '100%', '1500px']} // Adjust width for different screen sizes
        height={['250px', '300px', '350px']} // Adjust height for different screen sizes
        objectFit="cover"
        src={Banner}
        alt="Banner"
      />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -80%)" textAlign="center" lineHeight='1'>
        <Text as="b" fontSize={['24px', '30px', '30px']} color="red">WE ARE HERE TO MAKE </Text>
        <br />
        <Text as="b" fontSize={['30px', '38px', '38px']} color="white">COOKING FUN AGAIN</Text>
      </Box>
      <Box position="absolute" top="60%" left="50%" transform="translate(-50%, -50%)" textAlign="center" borderRadius="50px"
border="1px solid red" bg="white" p="4" pr='28' mt='6'>
        <input
          type="text"
          placeholder="Aaj kya pakana hai?"
          width={['80%', '80%', 'auto']} // Adjust input width for different screen sizes
        />
          <Box
            position="absolute"
            right="10px" // Adjust the position of the icon
            top="50%"
            transform="translateY(-50%)"
            backgroundColor="red"
            borderRadius="24px"
            // marginInline='0px'
            p="3" pr='8' pl='8' // Adjust padding as needed
          >
            <Search2Icon
              color="white"
              boxSize={6}
            />
          </Box>
           </Box>
    </Box>
  );
}

export default Features;