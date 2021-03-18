import {
  Box,
  Flex,
  Heading,
  Divider,
  Input,
  Stack,
} from '@chakra-ui/react';
import { VFC, memo } from 'react';

import {PrimaryButton} from '../atoms/button/PrimaryButton'

export const Login: VFC = memo(() => {
  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>
          User Admin App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='user ID' />
          <PrimaryButton>login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
