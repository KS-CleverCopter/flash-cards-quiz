import { Box, Heading as ChakraHeading } from '@chakra-ui/react';
import React from 'react';

const Heading: React.FC = () => {
  return (
    <Box
      gridColumn="span 2"
      p="4"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <ChakraHeading as="h1" size="xl" m="5">
        Flash Cards
      </ChakraHeading>
    </Box>
  );
};

export default Heading;
