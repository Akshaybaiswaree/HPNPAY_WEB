// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Image,
  Spacer,
} from "@chakra-ui/react";
import LOGO from "../../src/images/footer/LOGO.svg";
import NavLinkWithDropdown from "./knowMore/NavLinkWithDropdown";




const Navbar = () => {
  const [retailer, setRetailer] = useState(true);
  const [corporate, setCorporate] = useState(false);


  const handleRetailerClick = () => {
    setRetailer(true);
    setCorporate(false);
    console.log(retailer, corporate);
  };

  const handleCorporateClick = () => {
    setRetailer(false);
    setCorporate(true);
    console.log(retailer, corporate);
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex align="center" gap={'7rem'} maxW="95vW" margin={'auto'}  p={4} fontSize="1rem"justifyContent="space-between">
        <Flex ml="0.5rem" align="center">
        <Link to="/">
          <Image src={LOGO} alt="Logo" width={"100px"} />
        </Link>
          <span onClick={() => handleRetailerClick()}><NavLink to="/" >
            Retailer
          </NavLink></span>
          <span onClick={() => handleCorporateClick()}><NavLink to="/corporate" >
            Corporate
          </NavLink></span>
        </Flex>
        
        <Flex align="center" gap="0.1rem">
          {retailer && (
            <>
              <NavLink to="/products" p="0">Products</NavLink>
              <NavLink to="/distributors">Distributors Program</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
              <NavLinkWithDropdown  fontWeight= "bold" title="Know More" pb="0.5rem">
                <NavLink to="/blogs"  bg="red">Blogs</NavLink>
                <NavLink to="#">HPN Club</NavLink>
                <NavLink to="#">Jobs</NavLink>
                <NavLink to="#">Events</NavLink>
                <NavLink to="#">FAQ's</NavLink>
              </NavLinkWithDropdown>
              <NavLink to="/contactus">Contact Us</NavLink>
              <Button as={Link} to="/login" ml={4} colorScheme="blue">
                Login
              </Button>
            </>
          )}

          {corporate && 
          <>
            <NavLink to="/solution">Solution</NavLink>
            <NavLink to="/solution">Market Research</NavLink>
            <NavLink to="/solution">Features</NavLink>
            <NavLink to="/solution">Media</NavLink>
            <NavLink to="/solution">About Us</NavLink>
            <NavLinkWithDropdown title="Know More">
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="#">HPN Club</NavLink>
                <NavLink to="#">Jobs</NavLink>
                <NavLink to="#">Events</NavLink>
                <NavLink to="#">FAQ's</NavLink>
              </NavLinkWithDropdown>
            <NavLink to="/solution">Contact Us</NavLink>
          </>}

        </Flex>
        
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children, onClick, active }) => (
  <Text
    as={Link}
    to={to}
    mx={4}
    fontWeight="bold"
    color={useColorModeValue("gray.600", "white")}
    textDecoration="none"
    borderBottom="2px solid transparent"
    _hover={{ borderBottom: "2px solid blue" }}
    _visited={{ borderBottom: "2px solid blue" }}
    borderBottomColor={active ? "blue" : "transparent"}
    onClick={onClick}
  >
    {children}
    <span
      className={`underline ${active ? "active" : ""}`}
    ></span>
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
