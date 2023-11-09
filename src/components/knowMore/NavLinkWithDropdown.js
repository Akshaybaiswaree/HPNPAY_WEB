// NavLinkWithDropdown.js
import React, { useState } from 'react';
import { Box, Text, useColorModeValue, Collapse, VStack } from '@chakra-ui/react';

const NavLinkWithDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Uncomment the line below if you want the dropdown to close when leaving
    setIsOpen(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      position='relative'
      
    >
      <Text
        px={1}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {title}
      </Text>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          p={2}
          border={1}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          position='absolute'
          zIndex='1'
          left='0'
          mt='2'
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <VStack align='start' spacing={2} onMouseLeave={handleMouseLeave}>
            {children}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavLinkWithDropdown;
