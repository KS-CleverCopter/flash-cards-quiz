import {
  Box,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { PageRoutes } from '../common';
import Heading from './heading';

const SidebarContent = ({
  setOpen,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    if (setOpen) {
      setOpen(false);
    }
    navigate(route);
  };

  return (
    <Box>
      <Button
        w="100%"
        variant="ghost"
        size="sm"
        colorPalette={'blue'}
        justifyContent="start"
        onClick={() => handleClick(PageRoutes.Home)}
      >
        Home
      </Button>
      <Button
        w="100%"
        variant="ghost"
        size="sm"
        colorPalette={'blue'}
        justifyContent="start"
        onClick={() => handleClick(PageRoutes.FlashCards)}
      >
        FlashCards
      </Button>
      <Button
        w="100%"
        variant="ghost"
        size="sm"
        colorPalette={'blue'}
        justifyContent="start"
        onClick={() => handleClick(PageRoutes.PracticeTests)}
      >
        PracticeTests
      </Button>
    </Box>
  );
};

const Sidebar = () => {
  const isMobile = useMedia('(max-width: 830px)');
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {!isMobile && <SidebarContent />}
      {isMobile && (
        <>
          <Heading />
          <Box pos="fixed" top="16px" left="16px">
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
                  <SidebarContent setOpen={setOpen} />
                </DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
