
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   useColorModeValue,
//   Image,
//   Spacer,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   DrawerFooter,
//   VStack,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import LOGO from "../../src/images/footer/LOGO.svg";
// import NavLinkWithDropdown from "./knowMore/NavLinkWithDropdown";
// import { BiUnderline } from "react-icons/bi";

// const Navbar = () => {
//   const [retailer, setRetailer] = useState(true);
//   const [corporate, setCorporate] = useState(false);
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const handleRetailerClickDrawer = () => {
//     setRetailer(true);
//     setCorporate(false);
//   };

//   const handleCorporateClickDrawer = () => {
//     setRetailer(false);
//     setCorporate(true);
//   };

//   const handleMenuToggle = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <Box
//       alignItems={'center'}
//       bg={useColorModeValue("white", "gray.800")}
//       borderBottom={1}
//       borderStyle={"solid"}
//       borderColor={useColorModeValue("gray.200", "gray.900")}
//     >
//       <Flex
//         align="center"
//         justify="space-between"
//         maxW="95vw"
//         margin="auto"
//         p={4}
//         fontSize="1rem"
//       >
//         <Flex align="center">
//           <Link to="/">
//             <Image src={LOGO} alt="Logo" width={"100px"} />
//           </Link>

//           <Spacer />

//           <Flex
//             className="retailor-corporate"
//             display={{ base: "none", md: "flex" }}
//           >
//             <span onClick={handleRetailerClickDrawer} >
//               <NavLink to="/" className="clicked">Retailer</NavLink>
//             </span>
//             <span onClick={handleCorporateClickDrawer} >
//               <NavLink to="/corporate">Corporate</NavLink>
//             </span>
//           </Flex>
//         </Flex>

//         <Flex align="center">
//           <Flex
//            align="center"
//             className="navfontsize"
//             display={{ base: "none", md: "flex" }}
           
//           >
//             {retailer && (
//               <>
//                 <NavLink to="/products" className="clicked" isSelected fontSize={corporate ? "0.8rem" : "0.6rem"} p="0.2rem" >
//                   Products
//                 </NavLink>
//                 <NavLink to="/distributors">Distributors Program</NavLink>
//                 <NavLink to="/media">Media</NavLink>
//                 <NavLink className={'aboutusnav'} to="/aboutus">About Us</NavLink>
//                 <NavLinkWithDropdown
//                   fontWeight="bold"
//                   title="Know More"
//                   pb="0.5rem"
//                 >
//                   <NavLink to="/blogs">Blogs</NavLink>
//                   <NavLink to="/hpnClub">HPN Club</NavLink>
//                   <NavLink to="/careers">Jobs</NavLink>
//                   <NavLink to="/events">Events</NavLink>
//                   <NavLink to="/faqs">FAQ's</NavLink>
//                 </NavLinkWithDropdown>
//                 <NavLink to="/contactus">Contact Us</NavLink>
//                 <Button as={Link} to="/login" ml={4} colorScheme="blue">
//                   Login
//                 </Button>
//               </>
//             )}

//             {corporate && (
//               <>
//                 <NavLink to="/solution">Solution</NavLink>
//                 <NavLink className={'marketresearch'} to="/marketResearch">Market Research</NavLink>
//                 <NavLink to="/features">Features</NavLink>
//                 <NavLink to="/media">Media</NavLink>
//                 <NavLink className={'aboutusnav'} to="/aboutus">About Us</NavLink>
//                 <NavLinkWithDropdown   className={'knowmorenav'}title="Know More">
//                   <NavLink to="/blogs">Blogs</NavLink>
//                   <NavLink to="/hpnClub">HPN Club</NavLink>
//                   <NavLink to="/careers">Jobs</NavLink>
//                   <NavLink to="/events">Events</NavLink>
//                   <NavLink to="/faqs">FAQ's</NavLink>
//                 </NavLinkWithDropdown>
//                 <NavLink className={'contactusnav'} to="/contactus">Contact Us</NavLink>
//               </>
//             )}
//           </Flex>

//           <Spacer />

//           <IconButton
//             aria-label="Toggle mobile menu"
//             icon={<HamburgerIcon />}
//             display={{ base: "flex", md: "none" }}
//             onClick={handleMenuToggle}
//           />

//           <Drawer
//             placement="right"
//             onClose={() => setDrawerOpen(false)}
//             isOpen={isDrawerOpen}
//           >
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader>Menu</DrawerHeader>
//               <DrawerBody>
//                 <VStack align="start" spacing={4}>
//                   <Flex
//                     className="retailor-corporate"
//                     direction="column"
//                     align="start"
//                   >
//                     <span onClick={handleRetailerClickDrawer}>
//                       <NavLink to="/">Retailer</NavLink>
//                     </span>
//                     <span onClick={handleCorporateClickDrawer}>
//                       <NavLink to="/corporate">Corporate</NavLink>
//                     </span>
//                   </Flex>

//                   {retailer && (
//                     <>
//                       <NavLink to="/products" >Products</NavLink>
//                       <NavLink to="/distributors">Distributors Program</NavLink>
//                       <NavLink to="/media">Media</NavLink>
//                       <NavLink to="/aboutus">About Us</NavLink>
//                       <NavLinkWithDropdown
//                         fontWeight="bold"
//                         title="Know More"
//                         pb="0.5rem"
//                       >
//                         <NavLink to="/blogs">Blogs</NavLink>
//                         <NavLink to="/hpnClub">HPN Club</NavLink>
//                         <NavLink to="/careers">Jobs</NavLink>
//                         <NavLink to="/events">Events</NavLink>
//                         <NavLink to="/faqs">FAQ's</NavLink>
//                       </NavLinkWithDropdown>
//                       <NavLink to="/contactus">Contact Us</NavLink>
//                       <Button as={Link} to="/login" colorScheme="blue">
//                         Login
//                       </Button>
//                     </>
//                   )}

//                   {corporate && (
//                     <>
//                       <NavLink to="/solution">Solution</NavLink>
//                       <NavLink className={'marketresearch'} to="/marketResearch">Market Research</NavLink>
//                       <NavLink to="/features">Features</NavLink>
//                       <NavLink to="/media">Media</NavLink>
//                       <NavLink className={'aboutusnav'} to="/aboutus">About Us</NavLink>
//                       <NavLinkWithDropdown   className={'knowmorenav'}title="Know More">
//                         <NavLink to="/blogs">Blogs</NavLink>
//                         <NavLink to="/hpnClub">HPN Club</NavLink>
//                         <NavLink to="/careers">Jobs</NavLink>
//                         <NavLink to="/events">Events</NavLink>
//                         <NavLink to="/faqs">FAQ's</NavLink>
//                       </NavLinkWithDropdown>
//                       <NavLink className={'contactusnav'} to="/contactus">Contact Us</NavLink>
//                     </>
//                   )}
//                 </VStack>
//               </DrawerBody>
//               <DrawerFooter>
//                 {/* ... (if any additional footer content is needed) */}
//               </DrawerFooter>
//             </DrawerContent>
//           </Drawer>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// const NavLink = ({ to, children, onClick, active }) => (
//   <Text
//     as={Link}
//     to={to}
//     mx={4}
//     fontWeight="bold"
//     color={useColorModeValue("gray.600", "white")}
//     textDecoration="none"
//     borderBottom="2px solid transparent"
//     // _active={{bg:"gray.100"}}
//     _hover={{  bg:"gray.100"}}
//     _active={{ borderBottom: "2px solid blue" }}
//     onClick={onClick}
//     p="0.1rem"
//   >
//     {children}
//     {/* <span className={BiUnderline}></span> */}
//   </Text>
// );

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Image,
  Spacer,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import LOGO from "../../src/images/footer/LOGO.svg";
import NavLinkWithDropdown from "./knowMore/NavLinkWithDropdown";
import { BiUnderline } from "react-icons/bi";

const Navbar = () => {
  const [retailer, setRetailer] = useState(true);
  const [corporate, setCorporate] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleRetailerClickDrawer = () => {
    setRetailer(true);
    setCorporate(false);
  };

  const handleCorporateClickDrawer = () => {
    setRetailer(false);
    setCorporate(true);
  };

  const handleMenuToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      alignItems={'center'}
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="95vw"
        margin="auto"
        p={4}
        fontSize="1rem"
      >
        <Flex align="center">
          <Link to="/">
            <Image src={LOGO} alt="Logo" width={"100px"} />
          </Link>

          <Spacer />

          <Flex
            className="retailor-corporate"
            display={{ base: "none", md: "flex" }}
          >
            <span onClick={handleRetailerClickDrawer}>
              <NavLink to="/" className="clicked">Retailer</NavLink>
            </span>
            <span onClick={handleCorporateClickDrawer}>
              <NavLink to="/corporate">Corporate</NavLink>
            </span>
          </Flex>
        </Flex>

        <Flex align="center">
          <Flex
            align="center"
            className="navfontsize"
            display={{ base: "none", md: "flex" }}
          >
            {retailer && (
              <>
                <NavLink to="/products" >Products</NavLink>
                <NavLink to="/distributors">Distributors Program</NavLink>
                <NavLink to="/media">Media</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLinkWithDropdown   
                      className={'knowmorenav'}
                      title="Know More"
                      >
                  <NavLink to="/blogs">Blogs</NavLink>
                  {/* <NavLink to="/hpnClub">HPN Club</NavLink> */}
                  <NavLink to="/careers">Jobs</NavLink>
                  <NavLink to="/events">Events</NavLink>
                  {/* <NavLink to="/faqs">FAQ's</NavLink> */}
                </NavLinkWithDropdown>
                <NavLink to="/contactus">Contact Us</NavLink>
                <Button as={Link} to="/login" ml={4} colorScheme="blue">
                  Login
                </Button>
              </>
            )}

            {corporate && (
              <>
                {/* <NavLink to="/solution">Solution</NavLink> */}
                <NavLink className={'marketresearch'} to="/marketResearch">Market Research</NavLink>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/media">Media</NavLink>
                <NavLink className={'aboutusnav'} to="/aboutus">About Us</NavLink>
                <NavLinkWithDropdown   
                      className={'knowmorenav'}
                      title="Know More"
                      >
                  <NavLink to="/blogs">Blogs</NavLink>
                  {/* <NavLink to="/hpnClub">HPN Club</NavLink> */}
                  <NavLink to="/careers">Jobs</NavLink>
                  <NavLink to="/events">Events</NavLink>
                  {/* <NavLink to="/faqs">FAQ's</NavLink> */}
                </NavLinkWithDropdown>
                <NavLink className={'contactusnav'} to="/contactus">Contact Us</NavLink>
              </>
            )}
          </Flex>

          <Spacer />

          <IconButton
            aria-label="Toggle mobile menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={handleMenuToggle}
          />

          <Drawer
            placement="right"
            onClose={() => setDrawerOpen(false)}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack align="start" spacing={4}>
                  <Flex
                    className="retailor-corporate"
                    direction="row"
                    align="start"
                  >
                    <span onClick={handleRetailerClickDrawer}>
                      <NavLink to="/">Retailer</NavLink>
                    </span>
                    <span onClick={handleCorporateClickDrawer} >
                      <NavLink to="/corporate">Corporator</NavLink>
                    </span>
                  </Flex>

                  {retailer && (
                    <>
                      <NavLink to="/products">Products</NavLink>
                      <NavLink to="/distributors">Distributors Program</NavLink>
                      <NavLink to="/media">Media</NavLink>
                      <NavLink to="/aboutus">About Us</NavLink>
                      <NavLinkWithDropdown   
                      className={'knowmorenav'}
                      title="Know More"
                      >
                        <NavLink to="/blogs">Blogs</NavLink>
                        {/* <NavLink to="/hpnClub">HPN Club</NavLink> */}
                        <NavLink to="/careers">Jobs</NavLink>
                        <NavLink to="/events">Events</NavLink>
                        {/* <NavLink to="/faqs">FAQ's</NavLink> */}
                      </NavLinkWithDropdown>
                      <NavLink to="/contactus">Contact Us</NavLink>
                      <Button mx={5} as={Link} to="/login" colorScheme="blue">
                        Login
                      </Button>
                    </>
                  )}

                  {corporate && (
                    <>
                      {/* <NavLink to="/solution">Solution</NavLink> */}
                      <NavLink className={'marketresearch'} to="/marketResearch">Market Research</NavLink>
                      <NavLink to="/features">Features</NavLink>
                      <NavLink to="/media">Media</NavLink>
                      <NavLink className={'aboutusnav'} to="/aboutus">About Us</NavLink>
                      <NavLinkWithDropdown   
                      className={'knowmorenav'}
                      title="Know More"
                      >
                        <NavLink to="/blogs">Blogs</NavLink>
                        {/* <NavLink to="/hpnClub">HPN Club</NavLink> */}
                        <NavLink to="/careers">Jobs</NavLink>
                        <NavLink to="/events">Events</NavLink>
                        {/* <NavLink to="/faqs">FAQ's</NavLink> */}
                      </NavLinkWithDropdown>
                      <NavLink className={'contactusnav'} to="/contactus">Contact Us</NavLink>
                    </>
                  )}
                </VStack>
              </DrawerBody>
              <DrawerFooter>
                {/* ... (if any additional footer content is needed) */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children }) => (
  <Text
    as={RouterNavLink}
    to={to}
    mx={4}
    fontWeight="bold"
     color="gray.600"
    textDecoration="none"
    borderBottom="2px solid transparent"
     _hover={{  bg:"gray.200",p:"0.5rem" ,borderBottom:"2px solid black",borderRadius:"0.5rem"}}
     _visited={{bg: "gray.300",p:"0.5rem",borderBottom:"2px solid black", borderRadius:"0.5rem"}}
     _active={{ p:"0.5rem",borderBottom:"2px solid black", borderRadius:"0.5rem"}}
    //_active={{ color: "gray.500", borderBottom: "2px solid gray.500" }}
    // _active={{ color: "gray", borderBottom: "2px solid gray"}}
    py="0.5rem"
    px="5px"
    borderRadius="0.5rem"
    // borderBottom="1px solid black"
  >
    {children}
  </Text>
);

export default Navbar;
