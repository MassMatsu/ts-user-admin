import { VFC, memo, useEffect } from 'react';
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';

import { UserCard } from '../organism/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserAdmin: VFC = memo(() => {
  const { fetchUsers, users, loading } = useAllUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
