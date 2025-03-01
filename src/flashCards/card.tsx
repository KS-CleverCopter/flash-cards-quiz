import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useMedia } from 'react-use';
import { FlashCardsAtom } from './flashcards.store';
import { useAtom } from 'jotai';

interface CardComponentProps {
  title: string;
  content: string;
  id: string;
}
export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  content,
  id,
}) => {
  const isMobile = useMedia('(max-width: 830px)');
  const [flip, setFlip] = React.useState(false);
  const [, setFlashCardsAtom] = useAtom(FlashCardsAtom);
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this flashcard?')) {
      setFlashCardsAtom(prev => {
        const newFlashCards = { ...prev };
        delete newFlashCards[id];
        return newFlashCards;
      });
    }
  };

  return (
    <Flex
      borderRadius="16px"
      w="100%"
      maxW="750px"
      height={isMobile ? '200px' : '400px'}
      alignItems="center"
      justifyContent="center"
      fontSize="28px"
      boxShadow="lg"
      id={id}
      pos="relative"
      perspective="1000px"
      transform={flip ? 'rotateX(180deg)' : 'rotateX(0deg)'}
      transition="transform 0.8s"
      transformStyle="preserve-3d"
      p="4"
      flexDir="column"
      m="8"
    >
      <Box
        backfaceVisibility="hidden"
        w="100%"
        h="100%"
        textAlign="center"
        justifyContent="center"
        pos="absolute"
        display="grid"
        gridTemplateRows={'min-content auto'}
        gridTemplateColumns={'1fr'}
      >
        <Box w="100%" display="flex" justifyContent="flex-end" p="4">
          <IconButton
            color="gray.600"
            bg="gray.100"
            aria-label="Delete"
            title="Delete Flash Card"
            onClick={handleDelete}
          >
            <RiDeleteBin6Line />
          </IconButton>
        </Box>
        <Box
          onClick={() => setFlip(!flip)}
          alignItems="center"
          display="flex"
          justifyContent="center"
          pos="relative"
          top="-32px"
        >
          {title}
        </Box>
      </Box>
      <Box
        transform={'rotateX(180deg)'}
        backfaceVisibility="hidden"
        w="100%"
        pos="absolute"
        px="4"
        onClick={() => setFlip(!flip)}
      >
        <Heading as="h5" fontSize="12px" color="gray.300" w="100%">
          Answer
        </Heading>
        <Box overflow="auto" h="300px" fontSize="20px" w="100%" mt="4">
          {content}
        </Box>
      </Box>
    </Flex>
  );
};
