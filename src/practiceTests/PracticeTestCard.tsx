import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { ChangeEventHandler, useEffect } from 'react';
import { useMedia } from 'react-use';
import { MdCheckCircleOutline } from 'react-icons/md';

interface PracticeTestsProps {
  id: string;
  title: string;
  content: string;
  onSubmitCallback: (id: string, value: boolean) => void;
}

export const PracticeTestCard: React.FC<PracticeTestsProps> = ({
  id,
  title,
  content,
  onSubmitCallback,
}) => {
  const isMobile = useMedia('(max-width: 830px)');
  const [answer, setAnswer] = React.useState('');
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState<boolean | null>(
    null
  );
  const handleTextAreaOnChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    if (e) {
      setAnswer(e.currentTarget.value);
    }
  };
  const handleClear = () => {
    setAnswer('');
  };
  const compareText = (textOne: string, textTwo: string): number => {
    const text1 = textOne.toLocaleLowerCase();
    const text2 = textTwo.toLocaleLowerCase();
    const longerText = text1.length > text2.length ? text1 : text2;
    const shorterText = text1.length > text2.length ? text2 : text1;
    let matches = 0;
    for (let i = 0; i < longerText.length; i++) {
      if (longerText[i] === shorterText[i % shorterText.length]) {
        matches++;
      }
    }
    return (matches / longerText.length) * 100;
  };
  const handleSubmit = () => {
    const match = compareText(answer, content);
    if (match > 90) {
      setCorrectAnswer(true);
      onSubmitCallback(id, true);
      return;
    }
    if (answer !== content) {
      setCorrectAnswer(false);
      onSubmitCallback(id, false);
    }
  };
  const getBgColor = () => {
    if (correctAnswer !== null && correctAnswer) {
      return 'green.700';
    }
    if (correctAnswer !== null && !correctAnswer) {
      return 'red.600';
    }
    if (!answer) {
      return 'blue.600';
    }
  };
  const getButtonText = () => {
    if (correctAnswer !== null && correctAnswer) {
      return 'Correct';
    }
    if (correctAnswer !== null && !correctAnswer) {
      return 'Try again';
    }

    return 'Check';
  };
  useEffect(() => {
    if (correctAnswer !== null) {
      // resetting correct answer when user changes the answer
      setCorrectAnswer(null);
    }
  }, [answer]);
  return (
    <>
      <Box
        borderRadius="16px"
        w="100%"
        maxW="750px"
        height={isMobile ? '550px' : '500px'}
        alignItems="center"
        justifyContent="center"
        fontSize="28px"
        boxShadow="lg"
        id={id}
        pos="relative"
        p="4"
        flexDir="column"
        m="8"
      >
        <Box
          backfaceVisibility="hidden"
          w="calc(100% - 32px)"
          h="calc(100% - 32px)"
          textAlign="center"
          justifyContent="center"
          pos="absolute"
          display="grid"
          gridTemplateRows={'min-content fit-content auto'}
          gridTemplateColumns={'1fr'}
        >
          <Box textAlign="left" fontSize={'16px'} fontWeight="bold">
            <Heading as="h5" fontSize="12px" color="gray.300" w="100%">
              Question
            </Heading>
            What is {title} ?
          </Box>
          <Field.Root mt="4" color="gray.500" fontSize="12px">
            <Field.Label>
              Answer
              <Field.RequiredIndicator />
            </Field.Label>
            <Textarea
              h="100%"
              w="100%"
              value={answer}
              onChange={handleTextAreaOnChange}
            />
            <Field.HelperText />
            <Field.ErrorText />
          </Field.Root>
          <Box textAlign="left">
            <Button
              variant="subtle"
              color="blue.700"
              size="xs"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              Show Answer
            </Button>
            {showAnswer && (
              <Text
                fontSize="sm"
                bg="green.50"
                color="green"
                p="2"
                maxH="80px"
                overflow={'auto'}
              >
                {content}
              </Text>
            )}
          </Box>
          {!correctAnswer && correctAnswer !== null && (
            <Text
              fontSize="xs"
              bg="red.50"
              color="red.700"
              px="2"
              h="auto"
              display="flex"
              alignItems="center"
            >
              Incorrect answer, click on "Show Answer" to see the correct
              answer.
            </Text>
          )}
          <Flex gap="8px" alignItems="center" justifyContent="center">
            <Button onClick={handleSubmit} disabled={!answer} bg={getBgColor()}>
              {correctAnswer !== null && correctAnswer && (
                <MdCheckCircleOutline />
              )}
              {getButtonText()}
            </Button>
            <Button variant="ghost" onClick={handleClear} disabled={!answer}>
              Cancel
            </Button>
          </Flex>
        </Box>
      </Box>
      {/* <Toaster /> */}
    </>
  );
};
