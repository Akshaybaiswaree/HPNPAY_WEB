// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Text, Link,useColorModeValue } from '@chakra-ui/react';

// const NavLink = ({ to, children, onClick }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;
//   console.log(isActive,location.pathname );

//   return (
//     <Text
//       as={Link}
//       to={to}
//       mx={4}
//       fontWeight="bold"
//       color={useColorModeValue("gray.600", "white")}
//       textDecoration="none"
//       borderBottom={`2px solid ${isActive ? 'blue' : 'transparent'}`}
//       bg={isActive ? 'gray.100' : ''}
//       _hover={{ borderBottom: "2px solid blue", bg: "gray.100" }}
//       _visited={{borderBottom: "2px solid gray.200", bg: "gray.100"}}
//       onClick={onClick}
//       p="1"
//     >
//       {children}
//     </Text>
//   );
// };

// export default NavLink;
