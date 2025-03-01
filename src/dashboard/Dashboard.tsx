import { Box, Heading } from '@chakra-ui/react';
import { CreateCardComponent } from '../flashCards/createCard';
import { useMedia } from 'react-use';

export const Dashboard = () => {
  const isMobile = useMedia('(max-width: 830px)');

  return (
    <Box minH="calc(100vh - 132px)" m={isMobile ? '0' : '8'}>
      <Heading as="h2">Dashboard</Heading>
      <Box mt="4">
        <CreateCardComponent />
      </Box>
    </Box>
  );
};
