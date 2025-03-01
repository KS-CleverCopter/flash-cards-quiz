import { Box } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './sideBar';
import { useMedia } from 'react-use';
import Heading from './heading';

const Home: React.FC = () => {
  const isMobile = useMedia('(max-width: 830px)');
  return (
    <Box
      display="grid"
      gridTemplateColumns={['1fr', '1fr', 'minmax(230px, 1fr) repeat(1, 6fr)']}
      gridTemplateRows="2"
      w="100%"
      height="100%"
    >
      {!isMobile && <Heading />}
      <Box
        p="4"
        borderRight={isMobile ? 'none' : '1px solid'}
        borderColor={'gray.200'}
      >
        <Sidebar />
      </Box>
      <Box
        p="4"
        gridColumn={isMobile ? 'span 2' : 'default'}
        pt={[12, 12, 12, 4]}
      >
        Content
      </Box>
    </Box>
  );
};

export default Home;
