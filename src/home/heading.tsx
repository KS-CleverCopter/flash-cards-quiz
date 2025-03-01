import { Box, Heading as ChakraHeading } from '@chakra-ui/react';
import React from 'react';
import { useMedia } from 'react-use';
import { ColorModeButton } from '../components/ui/color-mode';

const Heading: React.FC = () => {
  const isMobile = useMedia('(max-width: 830px)');
  return (
    <Box
      gridColumn="span 2"
      p="4"
      py={isMobile ? 2 : 4}
      w="100%"
      borderBottom={!isMobile ? '1px solid' : 'none'}
      borderColor="gray.200"
      display="flex"
      justifyContent={isMobile ? 'center' : 'space-between'}
      alignItems="center"
    >
      <ChakraHeading as="h1" size="xl">
        Flash Cards
      </ChakraHeading>
      <ColorModeButton />
    </Box>
  );
};

export default Heading;
