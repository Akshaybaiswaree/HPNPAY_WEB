// import React, { useState } from "react";
// import { Stack, HStack, VStack, Flex, useBreakpointValue, InputGroup, InputLeftElement, Input, Checkbox, useDisclosure, Container } from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import Solution1 from "../images/solution_img/Solution1.png"
// import Solution2 from "../images/solution_img/Solution2.png"
// import Solution3 from "../images/solution_img/Solution3.png"

// import {
//     Select,
//     FormLabel,
//     FormControl,
//     Box,
//     Image,
//     Heading,
//     Text,
//     Divider,
//     ButtonGroup,
//     Button,


// } from '@chakra-ui/react';
// import { Link } from "react-router-dom";


// const Solution = () => {


//     //code for show page froom top.
//     function scrollToTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'instant',
//         });
//     }

//     return (
//         <Box paddingTop={"2rem"} fontSize={"1.5rem"} margin={'100px'}>
//             <Box style={{ display: "flex", justifyContent: 'space-around' }} className='main=solution-component'>
//                 <Box style={{ flexBasis: "50%" }}>
//                     <h1 style={{ color: "#052B60", fontWeight: "bold", fontSize: '3rem' }}>Our Solutions</h1>
//                     <p>Welcome to HPNPAY – where innovative financial solutions meet the diverse needs of a dynamic global economy. Our platform is designed not just to adapt to the changing financial landscape but to actively shape it. We provide a spectrum of services that empower businesses, enable retailers, and uplift communities with the technology and support they need for financial success and resilience.</p>
//                     <Box marginTop='2rem'>
//                         <Link to={'/solutions'}>
//                             <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Read more</Button>
//                         </Link>
//                     </Box>

//                 </Box>

//                 <Box style={{ background: "#43D5B7", borderRadius: "15px", padding: "2px" }} width={"40%"} height={"20rem"} fontSize={"2rem"} >
//                     <FormControl padding={"2rem"}>
//                         <FormLabel style={{ marginTop: "4px", fontSize: "25px" }}>Choose the right solution by Industry Type</FormLabel>
//                         <Select style={{ background: "white", height: "3.5rem", }} placeholder='Search by Industy'>
//                             <option>chemica/fertiliser</option>
//                             <option>Ecommerce</option>
//                             <option>FMCG & pharma</option>
//                             <option> Food Delivery</option>
//                             <option>Insurance</option>
//                             <option>Network and Marketing</option>
//                             <option>OTT</option>
//                             <option>Payment and Finance</option>
//                         </Select>
//                         <Select style={{ background: "white", height: "3.5rem", marginTop: "1.3rem" }} placeholder='Select Solution' />

//                         <Button style={{ background: "#278DA6", marginTop: "1rem" }}>Submit</Button>
//                     </FormControl>
//                 </Box>
//             </Box>
//             <Card style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} width={"100%"} margin={"auto"} marginTop={"8rem"} boxShadow={"none"}>

//                 <CardBody>
//                     <Image ml={'20px'} src={Solution1} />
//                     <Stack mt='6' spacing='3'>
//                         <Heading size='md'>Digitize cash collection
//                         </Heading>
//                         <Text>
//                             Enable customers and collection agents to deposit cash at HPNPay's extensive last mile network and optimize collection cost by upto 50%
//                         </Text>
//                         <Text color='blue.600' fontSize='2xl'>
//                             <Link to={'/digitalcashcollection'}>
//                                 <Button onClick={scrollToTop}>
//                                     Learn More
//                                 </Button>
//                             </Link>
//                         </Text>

//                     </Stack>
//                 </CardBody>


//                 <CardBody>

//                     <Image ml={'20px'} src={Solution2} />
//                     <Stack mt='6' spacing='3'>
//                         <Heading size='md'>Increase market penetration at the last mile
//                         </Heading>
//                         <Text>
//                             Distribute sachetize content through HPNPay's last mile network and enable digitization of micro cash exchange to digically reach 400 million+ last mile audience
//                         </Text>
//                         <Link to={'/increasemarket'}>
//                             <Button onClick={scrollToTop}>
//                                 Learn More
//                             </Button>
//                         </Link>

//                     </Stack>
//                 </CardBody>


//                 <CardBody>

//                     <Image ml={'20px'} src={Solution3} />
//                     <Stack mt='6' spacing='3'>
//                         <Heading size='md'>Digitize order placement and payment
//                         </Heading>
//                         <Text>
//                             Enable 3X more efficiency in order processing and cash flow by digitizing order placement and payment across the retail value chain
//                         </Text>
//                         <Link to={'/digitalorder'}>
//                             <Button onClick={scrollToTop}>
//                                 Learn More
//                             </Button>
//                         </Link>

//                     </Stack>
//                 </CardBody>
//             </Card>

//         </Box >

//     )
// };

// export default Solution;



import React, { useState } from "react";
import {
  Stack,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Solution1 from "../images/solution_img/Solution1.png";
import Solution2 from "../images/solution_img/Solution2.png";
import Solution3 from "../images/solution_img/Solution3.png";

import {
  Select,
  FormLabel,
  FormControl,
  Box,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Solution = () => {
  //code for show page froom top.
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <Box   margin={"2rem"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
      >
        <Box
          style={{
            // flexBasis: "100%",
            marginBottom: "1rem",
            // textAlign: "center",
          }}
        >
          <h1
            style={{ color: "#052B60", fontWeight: "bold", fontSize: "3rem" }}
          >
            Our Solutions
          </h1>
          <p>
            Think last mile. Think PayNearby. From optimizing cash collection
            processes <br/>to enabling market expansion, businesses of all sizes use
            HPNPay's proprietary<br/> last mile technology and deeply entrenched
            retail network of 50,00,000+ retailers<br /> to grow their business
          </p>
        </Box>
        <Box
        className="choose-solution"
          style={{
            background: "#43D5B7",
            borderRadius: "15px",
            padding: "2px",
            width: { base: "40%", md:"50%" }
          }}
          fontSize={{ base: "1.5rem", md: "3rem" }}
        >
          <FormControl padding={{ base: "1rem", md: "2rem" }}>
            <FormLabel
              style={{
                marginTop: "4px",
                fontSize: { base: "20px", md: "25px" },
              }}
            >
              Choose the right solution by Industry Type
            </FormLabel>
            <Select
              style={{  marginBottom:"1rem" ,background: "white", height: "3.5rem" }}
              placeholder="Search by Industry"
            >
              <option>Chemical/Fertilizer</option>
              <option>E-commerce</option>
              <option>FMCG & Pharma</option>
              <option>Food Delivery</option>
              <option>Insurance</option>
              <option>Network and Marketing</option>
              <option>OTT</option>
              <option>Payment and Finance</option>
            </Select>
            <Select
              style={{
                background: "white",
                height: "3.5rem",
                marginTop: { base: "1rem", md: "1.3rem" },
              }}
              placeholder="Select Solution"
            >
              </Select>
            <Button
              style={{
                background: "#278DA6",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Flex>

      {/* </Box> */}

   





<Card>
  <Flex
    direction={{ base: 'column', md: 'row' }}
    justifyContent="space-evenly"
    alignItems="center"
  >
    <CardBody textAlign="center">
      <Image mb={{ base: '4', md: '0' }} src={Solution1} />
      <Stack spacing="3">
        <Heading size="md">Digitize cash collection</Heading>
        <Text>
          Enable customers and collection agents to deposit cash at HPNPay's
          extensive last mile network and optimize collection cost by up to
          50%
        </Text>
        <Link to={"/digitalcashcollection"}>
          <Button onClick={scrollToTop}>Learn More</Button>
        </Link>
      </Stack>
    </CardBody>

    <CardBody textAlign="center">
      <Image mb={{ base: '4', md: '0' }} src={Solution2} />
      <Stack spacing="3">
        <Heading size="md">Increase market penetration at the last mile</Heading>
        <Text>
          Distribute sachetize content through HPNPay's last mile network and
          enable digitization of micro cash exchange to digitally reach
          400 million+ last mile audience
        </Text>
        <Link to={"/increasemarket"}>
          <Button onClick={scrollToTop}>Learn More</Button>
        </Link>
      </Stack>
    </CardBody>

    <CardBody textAlign="center">
      <Image mb={{ base: '4', md: '0' }} src={Solution3} />
      <Stack spacing="3">
        <Heading size="md">Digitize order placement and payment</Heading>
        <Text>
          Enable 3X more efficiency in order processing and cash flow by
          digitizing order placement and payment across the retail value chain
        </Text>
        <Link to={"/digitalorder"}>
          <Button onClick={scrollToTop}>Learn More</Button>
        </Link>
      </Stack>
    </CardBody>
  </Flex>
</Card>





    </Box>
  );
};

export default Solution;
