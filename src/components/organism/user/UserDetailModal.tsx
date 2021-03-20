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
  Input
} from '@chakra-ui/react';



type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserDetailModal: VFC<Props> = memo((props) => {
  const {isOpen, onClose} = props;

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
                <Input value='masa' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>fullname</FormLabel>
                <Input value='masato matsukawa' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input value='masa@email.com' isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>tel</FormLabel>
                <Input value='040165000' isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
