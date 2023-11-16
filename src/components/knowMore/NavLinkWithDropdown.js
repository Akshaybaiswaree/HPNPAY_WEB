// NavLinkWithDropdown.js
import React, { useEffect, useState } from 'react';
import { Box, Text, useColorModeValue, Collapse, VStack } from '@chakra-ui/react';

// ... (import statements remain unchanged)

// ... (import statements remain unchanged)

const NavLinkWithDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Box
      position='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        px={5}
        fontWeight="bold"
        color="gray.600"
        py={1}
        rounded={'md'}
        _hover={{
          bg:"gray.200",p:"0.5rem" ,borderBottom:"2px solid black",borderRadius:"0.5rem"
        }}
        
        _visited={{bg: "gray.300",p:"0.5rem",borderBottom:"2px solid black", borderRadius:"0.5rem"}}
        _active={{ p:"0.5rem",borderBottom:"2px solid black", borderRadius:"0.5rem"}}
      >
        {title}
      </Text>
      <Collapse in={isOpen} animateOpacity>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          position='absolute'
          zIndex='1'
          left='0'
          bg={useColorModeValue('white', 'gray.800')}
          p={2}
          border={1}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          width="25rem"
        >
          <VStack align='start' spacing={2}>
            {children}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavLinkWithDropdown;

