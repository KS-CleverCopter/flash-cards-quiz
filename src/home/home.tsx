import { Box } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './sideBar';
import { useMedia } from 'react-use';
import Heading from './heading';

export const Home = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMedia('(max-width: 830px)');
  return (
    <Box
      display="grid"
      gridTemplateColumns={
        isMobile ? '1fr' : 'minmax(230px, 1fr) repeat(1, 6fr)'
      }
      gridTemplateRows={isMobile ? '1fr' : '100px auto'}
      w="100%"
      h="100%"
    >
      {!isMobile && <Heading />}
      <Box
        p="4"
        borderRight={isMobile ? 'none' : '1px solid'}
        borderColor={'gray.200'}
        height="100%"
      >
        <Sidebar />
      </Box>
      <Box
        p="4"
        gridColumn={isMobile ? 'span 2' : 'default'}
        pt={isMobile ? '0' : '4'}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Home;
