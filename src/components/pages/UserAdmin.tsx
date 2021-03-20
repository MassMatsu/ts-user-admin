import { VFC, memo, useEffect, useCallback } from 'react';
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';

import { UserCard } from '../organism/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../../components/organism/user/UserDetailModal';

export const UserAdmin: VFC = memo(() => {
  const { fetchUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onClickUser = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
