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
  onClickHome: () => void;
  onClickUserAdmin: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {isOpen, onClose, onClickHome, onClickUserAdmin, onClickSetting} = props
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg={'gray.100'}>
            <Button w='100%' onClick={onClickHome}>Home</Button>
            <Button w='100%' onClick={onClickUserAdmin}>Users</Button>
            <Button w='100%' onClick={onClickSetting}>Setting</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
