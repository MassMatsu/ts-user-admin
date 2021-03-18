import React, { VFC, memo } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button
} from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {isOpen, onClose} = props
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg={'gray.100'}>
            <Button w='100%'>Home</Button>
            <Button w='100%'>Users</Button>
            <Button w='100%'>Setting</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
