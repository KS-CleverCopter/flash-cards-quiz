import { Box, Heading, HStack, IconButton, Progress } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMedia } from 'react-use';
import { useState } from 'react';
import { PracticeTestCard } from './PracticeTestCard';
import { FlashCardsAtom } from '../flashCards/flashcards.store';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdCheckCircleOutline } from 'react-icons/md';
import { VscError } from 'react-icons/vsc';

export const PracticeCards = () => {
  const [getFlashCardsAtom] = useAtom(FlashCardsAtom);
  const flashCardKeys = Object.keys(getFlashCardsAtom);
  console.log(flashCardKeys);
  const isMobile = useMedia('(max-width: 830px)');
  const [percentage, setPercentage] = useState(0);
  const handleSlideChange = (activeIndex: number) => {
    const percentage = ((activeIndex + 1) / flashCardKeys.length) * 100;
    setPercentage(percentage);
  };
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const handleAnswers = (id: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Box minH="calc(100vh - 132px)" mx="auto">
      <Heading as="h2" mb="4">
        Practice Test
      </Heading>
      <Box alignItems="center" justifyContent="center">
        <Box maxW="sm" margin="auto">
          <Progress.Root defaultValue={percentage} maxW="sm" value={percentage}>
            <HStack gap="5">
              <Progress.Label>Progress</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>
                {Math.min(Math.ceil(percentage), 100)}%
              </Progress.ValueText>
            </HStack>
          </Progress.Root>
        </Box>
      </Box>
      <Box
        gap="2"
        w="300px"
        margin={'auto'}
        display="grid"
        gridTemplateColumns={'repeat(7, 1fr)'}
        bg="gray.100"
        p="1"
      >
        {flashCardKeys.map(key => (
          <Box key={key}>
            {answers[key] === true && (
              <IconButton bg="green">
                <MdCheckCircleOutline />
              </IconButton>
            )}
            {!answers[key] && (
              <IconButton bg="orange">
                <VscError />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>
      <Box w={isMobile ? '100%' : '850px'} mx={isMobile ? '0' : 'auto'}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onPaginationUpdate={e => handleSlideChange(e.activeIndex)}
        >
          {flashCardKeys.map(key => (
            <SwiperSlide key={key}>
              <Box
                display="flex"
                justifyContent="center"
                p={isMobile ? '4' : '0'}
              >
                <PracticeTestCard
                  id={key}
                  title={getFlashCardsAtom[key].title}
                  content={getFlashCardsAtom[key].content}
                  onSubmitCallback={handleAnswers}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
