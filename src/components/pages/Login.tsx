import { Box, Flex, Heading, Divider, Input, Stack } from '@chakra-ui/react';
import { VFC, memo, useState, ChangeEvent } from 'react';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import {useAuth} from '../../hooks/useAuth'



export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const {login, loading} = useAuth()


  const handleLogin = () => {
    login(userId)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>
          User Admin App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='user ID' onChange={handleChange} />
          <PrimaryButton onClick={handleLogin} loading={loading} disabled={userId === ''}>login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
