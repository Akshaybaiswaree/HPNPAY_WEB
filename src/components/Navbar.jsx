// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import LOGO from '../../src/images/footer/LOGO.svg';
import NavLinkWithDropdown from './knowMore/NavLinkWithDropdown';

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex
        align='center'
        maxW='6xl'
        m='auto'
        p={4}
      >
        <Link to='/'>
          <Image src={LOGO} alt='Logo' width={'100px'} />
        </Link>
        <Flex ml='auto' align='center'>
          <NavLink to='/'>Retailer</NavLink>
          <NavLink to='/corporate'>Corporate</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/solution'>Solution</NavLink>
          <NavLink to='/distributors'>Distributors Program</NavLink>
          <NavLink to='/aboutus'>About Us</NavLink>
          <NavLinkWithDropdown title='Know More'>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='#'>HPN Club</NavLink>
            <NavLink to='#'>Jobs</NavLink>
            <NavLink to='#'>Events</NavLink>
            <NavLink to='#'>FAQ's</NavLink>
          </NavLinkWithDropdown>
          <NavLink to='/contactus'>Contact Us</NavLink>
          <Button as={Link} to='/login' ml={4} colorScheme='blue'>
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children }) => (
  <Text as={Link} to={to} mx={4} fontWeight='bold' color={useColorModeValue('gray.600', 'white')} _hover={{ color: 'blue.500' }}>
    {children}
  </Text>
);

// const NavLinkWithDropdown = ({ title, children }) => (
//   <Box position='relative' mx={4} _hover={{ color: 'blue.500' }}>
//     <Text fontWeight='bold'>{title}</Text>
//     <Box position='absolute' top='100%' left={0} mt={2} p={2} bg={useColorModeValue('white', 'gray.800')} boxShadow='md' rounded='md'>
//       {children}
//     </Box>
//   </Box>
// );

export default Navbar;
