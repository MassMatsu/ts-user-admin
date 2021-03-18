import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';

import { VFC, memo } from 'react';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as='nav'
        backgroundColor='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 5 }}
      >
        <Flex as='a' align='center' mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
            User Admin App
          </Heading>
        </Flex>

        <Flex
          align='center'
          fontSize='sm'
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link>User</Link>
          </Box>
          <Box>
            <Link>Setting</Link>
          </Box>
        </Flex>

        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});
