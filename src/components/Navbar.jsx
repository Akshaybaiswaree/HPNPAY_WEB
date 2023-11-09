

import React from 'react';

import {
  Box,
  Flex,
  Text,
  Spacer,
  Link,
  Collapse,
  useColorModeValue,
  Button,
  Image,

} from '@chakra-ui/react';
import LOGO from '../../src/images/footer/LOGO.svg';

const Navbar = () => {

  return (
    <Box w="100vw">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}

        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Link to='/'>
          <Text fontSize='2xl' fontWeight='bold'>
            <Image ml={'20px'} src={LOGO} width={'100px'} />
          </Text>
        </Link>

        <Flex display={{ base: 'none', md: 'flex' }} alignItems='center' w='100vw' ml={'1rem'}>

          <NavLink to='/'>Retailer</NavLink>
          <NavLink to='/corporate'>Corporate</NavLink>


          <Spacer />
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/solution'>Solution</NavLink>
          <NavLink to='/distributors'>Distributors Program</NavLink>
          <NavLink to='/'>Media</NavLink>
          <NavLink to='/aboutus'>About Us</NavLink>
          <HoverNavLink title='Know More' style={{ display: 'flex', flexDirection: 'column' }}>
            <NavLink to='/service1'>Blog</NavLink>
            <NavLink to='/service2'>HPN Club</NavLink>
            <NavLink to='/service2'>Jobs</NavLink>
            <NavLink to='/service2'>Event</NavLink>
            <NavLink to='/service2'>FAQ's</NavLink>
          </HoverNavLink>
          <NavLink to='/contactus'>Contact Us</NavLink>
          <Spacer /> {/* Add Spacer */}
          <NavLink to='/about'>Case Studies</NavLink>
          <NavLink to='/contact'>Features</NavLink>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            href={'#'}
            mr={'20px'}
            _hover={{ bg: 'blue.600' }}
            background={'#156DB1'}
          >
            <NavLink to='/login'>
              Login
            </NavLink>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );

};

const NavLink = ({ to, children }) => (
  <Link
    // as={ReactRouterLink}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>
);

const HoverNavLink = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      position='relative'
    >
      <Link px={2} py={1} rounded={'md'}>
        {title}
      </Link>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          border={1}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          position='absolute'
          zIndex='1'
          left='0'
          mt='2'
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
