import { VFC, memo } from 'react';
import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import {User} from '../../../types/api/user'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  
};
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user} = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>User Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>fullname</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>tel</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
