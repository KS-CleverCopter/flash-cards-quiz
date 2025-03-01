import { Box, Heading, HStack, Progress } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { FlashCardsAtom } from './flashcards.store';
import { CardComponent } from './card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMedia } from 'react-use';
import { useState } from 'react';

export const FlashCards = () => {
  const [getFlashCardsAtom] = useAtom(FlashCardsAtom);
  const flashCardKeys = Object.keys(getFlashCardsAtom);
  const isMobile = useMedia('(max-width: 830px)');
  const [percentage, setPercentage] = useState(0);
  const handleSlideChange = (activeIndex: number) => {
    const percentage = ((activeIndex + 1) / flashCardKeys.length) * 100;
    setPercentage(percentage);
  };

  return (
    <Box minH="calc(100vh - 132px)" mx="auto">
      <Heading as="h2" mb="4">
        Flash Cards
      </Heading>
      <Box alignItems="center" justifyContent="center">
        <Box maxW="sm" margin="auto">
          <Progress.Root defaultValue={percentage} maxW="sm" value={percentage}>
            <HStack gap="5">
              {/* <Progress.Label>Usage</Progress.Label> */}
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
                <CardComponent
                  key={key}
                  id={key}
                  title={getFlashCardsAtom[key].title}
                  content={getFlashCardsAtom[key].content}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
