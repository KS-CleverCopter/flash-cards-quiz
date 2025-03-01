import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { ChangeEventHandler } from 'react';
import { useMedia } from 'react-use';
import { FlashCardsAtom } from './flashcards.store';
import { Toaster, toaster } from '../components/ui/toaster';

export const CreateCardComponent: React.FC = () => {
  const isMobile = useMedia('(max-width: 830px)');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [getFlashCardsAtom, setFlashCardsAtom] = useAtom(FlashCardsAtom);
  const handleTextOnChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (e) {
      setTitle(e.currentTarget.value);
    }
  };
  const handleTextAreaOnChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    if (e) {
      setContent(e.currentTarget.value);
    }
  };
  const handleSave = () => {
    const nextKey = Date.now().toString();
    console.log(nextKey);
    setFlashCardsAtom(prev => ({ ...prev, [nextKey]: { title, content } }));
    toaster.create({
      title: 'Success',
      description: 'Flash card saved successfully!.',
    });
    handleClear();
  };
  const handleClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <Box
      borderRadius={'16px'}
      w={'100%'}
      maxW="750px"
      height={isMobile ? '400px' : '400px'}
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      p="4"
      flexDir="column"
      display="grid"
      gridTemplateRows={'auto auto auto'}
      gridTemplateColumns="1fr"
    >
      <Heading textAlign="center" as="h2" fontSize="16px" w="100%">
        Create Card
      </Heading>
      <Box>
        <Field.Root>
          <Field.Label fontSize="12px" color="gray.500">
            Enter Title
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="text"
            w="100%"
            value={title}
            onChange={handleTextOnChange}
          />
          <Field.HelperText />
          <Field.ErrorText />
        </Field.Root>
        <Field.Root mt="4" color="gray.500" fontSize="12px">
          <Field.Label>
            Answer
            <Field.RequiredIndicator />
          </Field.Label>
          <Textarea
            h="100%"
            w="100%"
            value={content}
            onChange={handleTextAreaOnChange}
          />
          <Field.HelperText />
          <Field.ErrorText />
        </Field.Root>
      </Box>
      <Flex gap="8px" alignItems="center" justifyContent="center">
        <Button onClick={handleSave} disabled={!title || !content}>
          Save
        </Button>
        <Button
          variant="ghost"
          onClick={handleClear}
          disabled={!title || !content}
        >
          Cancel
        </Button>
      </Flex>
      <Toaster />
    </Box>
  );
};
