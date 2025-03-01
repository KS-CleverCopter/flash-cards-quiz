import {
  Box,
  Button,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerCloseTrigger,
  DrawerTitle,
  DrawerFooter,
  DrawerActionTrigger,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { useMedia } from 'react-use';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
}

const SidebarContent = () => (
  <Box>
    <Button
      w="100%"
      variant="ghost"
      size="sm"
      colorPalette={'blue'}
      justifyContent="start"
    >
      Home
    </Button>
    <Button
      w="100%"
      variant="ghost"
      size="sm"
      colorPalette={'blue'}
      justifyContent="start"
    >
      FlashCards
    </Button>
    <Button
      w="100%"
      variant="ghost"
      size="sm"
      colorPalette={'blue'}
      justifyContent="start"
    >
      PracticeTests
    </Button>
  </Box>
);

const Sidebar = () => {
  const isMobile = useMedia('(max-width: 830px)');
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {!isMobile && <SidebarContent />}
      {isMobile && (
        <Box pos="fixed">
          <DrawerRoot
            open={open}
            onOpenChange={e => setOpen(e.open)}
            placement="start"
          >
            <DrawerBackdrop />
            <DrawerTrigger>
              <IconButton aria-label="Burger Menu" variant="subtle">
                <CiMenuBurger />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent offset={'0'}>
              <DrawerBody asChild>
                <SidebarContent />
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
