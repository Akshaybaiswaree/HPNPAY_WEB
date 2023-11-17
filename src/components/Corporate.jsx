// 'use client'

// import {
//     Container,
//     Stack,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     Button,
//     Image,
//     Icon,
//     IconButton,
//     createIcon,
//     IconProps,
//     useColorModeValue,
//     Input,
//     Checkbox,
//     FormLabel,
//     SimpleGrid,
//     useBreakpointValue,
//     Center,
// } from '@chakra-ui/react'

// import reCaptchaImage from "../images/corporate_img/RecaptchaLogo.svg.png"
// import digitalCash from "../images/corporate_img/corporate_cashcullection_img.jpg"
// import increaseIndia from "../images/corporate_img/increasemarket.png"
// import digitalOrder from "../images/corporate_img/corporate_digital_img.jpg"
// import trustednetwork from "../images/corporate_img/trustednetwork.png"
// import bajajImage from "../images/corporate_img/corporate_img1.jpg"
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import goldLoan from '../images/footer/goldinvestment.jpg';
// import infrastructure from "../images/corporate_img/infrastructure.svg.png";
// import largestNetwork from "../images/corporate_img/largestnetwork.png";
// import agentincorner from "../images/corporate_img/agentIncorner.png";
// import communities from "../images/corporate_img/community.png";
// import largestAgent from "../images/corporate_img/largetagent.png";
// import retailer from "../images/corporate_img/largestRetailer.png";
// import { Link } from 'react-router-dom'

// const Corporate = () => {

//     //code for show page froom top.
//     function scrollToTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'instant',
//         });
//     }


//     return (
//         <>

//             <Container maxW={'7xl'}>
//                 <Stack
//                     align={'center'}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 20, md: 28 }}
//                     direction={{ base: 'column', md: 'row' }}>
//                     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
//                         <Heading
//                             lineHeight={1.1}
//                             fontWeight={600}
//                             fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
//                             <Text
//                                 as={'span'}
//                                 position={'relative'}
//                                 _after={{
//                                     content: "''",
//                                     width: 'full',
//                                     height: '20%',
//                                     position: 'absolute',
//                                     bottom: 1,
//                                     left: 0,
//                                     color: '#1c539e'
//                                 }}>
//                                 HPNPAY's Last Mile Infrastructure
//                             </Text>
//                             <br />
//                             <Text as={'span'} color={'#1c539e'}>
//                                 for Businesses
//                             </Text>
//                         </Heading>
//                         <Text color={'black'}>
//                             HPNPAY's last mile infrastructure is specifically engineered to bridge the gap between businesses and their end customers. We offer a robust framework that extends the reach of your services directly to the doorstep of consumers, no matter how remote. This infrastructure is crucial for businesses looking to expand their presence and provide uninterrupted, quality service to every corner of the market.
//                         </Text>
//                         <Link to={'/infrastructure'}>
//                             <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Read more</Button>
//                         </Link>
//                         <Stack spacing={{ base: 4, sm: 1 }} direction={{ base: 'column', sm: 'row' }}>
//                             <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
//                             <Button width='150px' height='75px'
//                                 _hover={{ bg: 'blue.600' }}
//                                 background={'#156DB1'}
//                                 color={'white'}
//                                 position={'absoulte'}
//                                 left={"1rem"}>Get in touch</Button>
//                         </Stack>
//                         <Stack border={'1px solid #d3d3d3'} width={'25rem'} direction={'row'} height={'5rem'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
//                             <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
//                             <Image src={reCaptchaImage} width={'50px'} height='50px' />
//                         </Stack>
//                     </Stack>
//                     <Flex
//                         flex={1}
//                         justify={'center'}
//                         align={'center'}
//                         position={'relative'}
//                         w={'full'}>

//                         <Box
//                             position={'relative'}
//                             height={'410px'}
//                             rounded={'2xl'}
//                             boxShadow={'2xl'}
//                             width={'full'}
//                             overflow={'hidden'}>
//                             <Image
//                                 alt={'Hero Image'}
//                                 fit={'cover'}
//                                 align={'center'}
//                                 w={'100%'}
//                                 h={'100%'}
//                                 src={infrastructure}
//                             />
//                         </Box>
//                     </Flex>
//                 </Stack>
//                 <Text fontSize='xl'>our solutions</Text>
//                 <Text fontSize='4xl'>Think Last Mile, Think HPNPAY</Text>
//                 <SimpleGrid
//                     bg='gray.50'
//                     columns={{ sm: 2, md: 3 }}
//                     spacing='8'
//                     p='10'
//                     textAlign='center'
//                     rounded='lg'
//                     color='gray.400'
//                 >
//                     <Card maxW='sm' >
//                         <Image
//                             src={digitalCash}
//                             alt='digital-cash-image'
//                             borderRadius='lg'
//                             height={"18rem"}
//                             width={"25rem"}
//                         />
//                         <CardHeader>
//                             <Heading size='md'>Digitize cash collection</Heading>
//                             <br />
//                         </CardHeader>
//                         {/* <CardBody>
//                             <Text>At HPNPAY, we've built a single, cohesive network that customers and partners alike can rely on. Trust is the cornerstone of our operations, with every member, from agents to retailers, upholding the highest standards of service and integrity. We bring together a myriad of services, delivering a seamless financial experience that solidifies our position as a leading trusted network in digital transactions.</Text>
//                         </CardBody> */}
//                         <CardFooter display={'flex'} justifyContent={'center'}>
//                             <Link to={'/digitalcashcollection'}>
//                                 <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
//                             </Link>
//                         </CardFooter>
//                     </Card>
//                     <Card maxW='sm' >
//                         <Image
//                             src={increaseIndia}
//                             alt='digital-india-image'
//                             borderRadius='lg'
//                             height={"18rem"}
//                             width={"25rem"}
//                         />
//                         <CardHeader>
//                             <Heading size='md'>Increase market penetration at the last mile</Heading>
//                         </CardHeader>

//                         <CardFooter display={'flex'} justifyContent={'center'}>
//                             <Link to={'/increasemarket'}>
//                                 <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
//                             </Link>
//                         </CardFooter>
//                     </Card>
//                     <Card maxW='sm' >
//                         <Image
//                             src={digitalOrder}
//                             alt='digital-order-image'
//                             borderRadius='lg'
//                             height={"18rem"}
//                             width={"25rem"}
//                         />
//                         <CardHeader>
//                             <Heading size='md'>Digitize order placement and payment</Heading>
//                         </CardHeader>

//                         <CardFooter display={'flex'} justifyContent={'center'}>
//                             <Link to={'/digitalorder'}>
//                                 <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
//                             </Link>
//                         </CardFooter>
//                     </Card>
//                 </SimpleGrid>
//                 <Box margin={"50px"} display={"flex"} justifyContent={"center"}>
//                 </Box>
//                 <Box position={'relative'} height={'600px'} width={'100%'} margin='auto' mb={'3rem'} h={'full'} overflow={'hidden'} boxShadow={'dark-lg'}>
//                     <Image src={goldLoan} />
//                 </Box>
//                 <Center>
//                     <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
//                         <Text fontSize='3xl' as='b'>Why HPNPAY</Text><br />
//                         <Text fontSize='4xl' as='b' color={'#1c539e'}>Technology driven, customer first approach to last mile connectivity and solution</Text>
//                         <SimpleGrid
//                             bg='gray.50'
//                             columns={{ sm: 2, md: 3 }}
//                             spacing='8'
//                             p='10'
//                             textAlign='center'
//                             rounded='lg'
//                             color='gray.400'
//                         >
//                             <Card maxW='sm' >
//                                 <Image
//                                     src={trustednetwork}
//                                     alt='digital-cash-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>One Trusted Network:</Heading>

//                                 </CardHeader>
//                                 <CardBody>
//                                     <Text>
//                                         At HPNPAY, we've built <span><b>a single, cohesive network that customers and partners alike can rely on.</b></span> Trust is the cornerstone of our operations, with every member, from agents to retailers, upholding the highest standards of service and integrity. We bring together a myriad of services, delivering a seamless financial experience that solidifies our position as a leading trusted network in digital transactions.
//                                     </Text>
//                                 </CardBody>

//                             </Card>

//                             <Card maxW='sm' >
//                                 <Image
//                                     src={largestNetwork}
//                                     alt='digital-india-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>Largest  Network:</Heading>
//                                 </CardHeader>

//                                 <CardBody>
//                                     <Text>
//                                         Our vast network is unparalleled, making HPNPAY <span><b>the most extensive financial services network available today.</b></span> Spanning urban centers to remote areas, our reach ensures financial inclusivity for all. With the most extensive network at your fingertips, you're connected to a world of possibilities that transcends physical and financial barriers.
//                                     </Text>
//                                 </CardBody>
//                             </Card>
//                             <Card maxW='sm' >
//                                 <Image
//                                     src={agentincorner}
//                                     alt='digital-order-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>Agent in Every Corner:</Heading>
//                                 </CardHeader>

//                                 <CardBody>
//                                     <Text>
//                                         <span><b>HPNPAY's promise is accessibility,</b></span> and we fulfill this through our agents, strategically located to serve you no matter where you are. Our agents are local pillars in their communities, providing a personal touch and understanding to every transaction. With an HPNPAY agent always within reach, financial empowerment is never far away.

//                                     </Text>
//                                 </CardBody>
//                             </Card>
//                             <Card maxW='sm' >
//                                 <Image
//                                     src={communities}
//                                     alt='digital-order-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>Empowering Communities:</Heading>
//                                 </CardHeader>

//                                 <CardBody>
//                                     <Text>
//                                         <span><b>HPNPAY is dedicated to the socioeconomic upliftment of every community we touch.</b></span> Our services are designed to empower individuals and communities by providing easy access to financial services, fostering self-reliance, and fuelling local economies. We're more than a network; we're a partner in progress, investing in the future of the communities we serve.
//                                     </Text>

//                                 </CardBody>
//                             </Card>
//                             <Card maxW='sm' >
//                                 <Image
//                                     src={largestAgent}
//                                     alt='digital-order-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>Largest Agent Network:</Heading>
//                                 </CardHeader>

//                                 <CardBody>
//                                     <Text>
//                                         Our agent network is the heartbeat of our service delivery,<span><b> the largest of its kind,</b></span> and committed to excellence. Each agent is equipped with the tools and knowledge to navigate the financial landscape, ensuring that every customer interaction is handled with expertise and care. HPNPAY's agents are your trusted advisors in the financial world.
//                                     </Text>
//                                 </CardBody>
//                             </Card>

//                             <Card maxW='sm' >
//                                 <Image
//                                     src={retailer}
//                                     alt='digital-order-image'
//                                     borderRadius='lg'
//                                     height={"18rem"}
//                                     width={"25rem"}
//                                 />
//                                 <CardHeader>
//                                     <Heading size='md'>Largest Retailers Network:</Heading>
//                                 </CardHeader>

//                                 <CardBody>
//                                     <Text>
//                                         <span><b>The HPNPAY retailers' network stands as the largest in the sector,</b></span> offering an extensive portfolio of financial products and services. Each retailer in our network is a gateway to financial convenience, ensuring that wherever you find an HPNPAY retailer, you find a solution tailored to your needs. Our network is a testament to our mission of providing accessible financial services on a grand scale.
//                                     </Text>
//                                 </CardBody>
//                             </Card>
//                         </SimpleGrid>
//                     </Box>
//                 </Center>

//             </Container>
//         </>
//     );
// };

// export default Corporate;



"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Input,
  Checkbox,
  FormLabel,
  SimpleGrid,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";

import reCaptchaImage from "../images/corporate_img/RecaptchaLogo.svg.png";
import digitalCash from "../images/corporate_img/corporate_cashcullection_img.jpg";
import increaseIndia from "../images/corporate_img/increasemarket.png";
import digitalOrder from "../images/corporate_img/corporate_digital_img.jpg";
import trustednetwork from "../images/corporate_img/trustednetwork.png";
import bajajImage from "../images/corporate_img/corporate_img1.jpg";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import goldLoan from "../images/footer/goldinvestment.jpg";
import infrastructure from "../images/corporate_img/infrastructure.svg.png";
import largestNetwork from "../images/corporate_img/largestnetwork.png";
import agentincorner from "../images/corporate_img/agentIncorner.png";
import communities from "../images/corporate_img/community.png";
import largestAgent from "../images/corporate_img/largetagent.png";
import retailer from "../images/corporate_img/largestRetailer.png";
import { Link } from "react-router-dom";

const Corporate = () => {
  //code for show page froom top.
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
        // marginLeft={'2rem'}
          align={"center"}
          spacing={{ base: 4, md: 10 }}
          py={{ base: 10, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          {/* <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '20%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    color: '#1c539e',
                                }}>
                                HPNPAY's Last Mile Infrastructure
                            </Text>
                            <br />
                            <Text as={'span'} color={'#1c539e'}>
                                for Businesses
                            </Text>
                        </Heading>
                        <Text color={'black'}>
                            HPNPAY's last mile infrastructure is specifically engineered to bridge the gap between businesses and their end customers. We offer a robust framework that extends the reach of your services directly to the doorstep of consumers, no matter how remote. This infrastructure is crucial for businesses looking to expand their presence and provide uninterrupted, quality service to every corner of the market.
                        </Text>
                        <Link to={'/infrastructure'}>
                            <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Read more</Button>
                        </Link>
                        <Stack spacing={{ base: 4, sm: 1 }} direction={{ base: 'column', sm: 'row' }}>
                            <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                            <Button width='150px' height='75px'
                                _hover={{ bg: 'blue.600' }}
                                background={'#156DB1'}
                                color={'white'}
                                position={'absoulte'}
                                left={"1rem"}>Get in touch</Button>
                        </Stack>
                        <Stack border={'1px solid #d3d3d3'} width={'25rem'} direction={'row'} height={'5rem'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
                            <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                            <Image src={reCaptchaImage} width={'50px'} height='50px' />
                        </Stack>
                    </Stack> */}

          <Stack
          className="hpnpay-last-mile"
           flex={1}
            spacing={{ base: 5, md: 5 }}
            >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "1xl", sm: "1xl", md: "2xl", lg: "4xl"  , xl: '5xl', }}
            >
              <Text
             fontSize={{ base: "2xl", sm: "1xl", md: "2xl", lg: "4xl"  , xl: '5xl', }}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "5%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  color: "#1c539e",
                }}
              >
                HPNPAY's Last Mile Infrastructure
              </Text>
              <br />
              <Text 
             fontSize={{ base: "2xl", sm: "1xl", md: "2xl", lg: "4xl"  , xl: '5xl', }}as={"span"} color={"#1c539e"}>
                for Businesses
              </Text>
            </Heading>
            <Text color={"black"}
                    fontSize={{
                        base: 'sm', // Adjust font size for screens less than 1267 pixels
                        sm: 'md',
                        md: 'lg',
                        lg: 'xl',
                        xl: '1xl',
                      }}
              
            >
              HPNPAY's last mile infrastructure is specifically engineered to
              bridge the gap between businesses and their end customers. We
              offer a robust framework that extends the reach of your services
              directly to the doorstep of consumers, no matter how remote. This
              infrastructure is crucial for businesses looking to expand their
              presence and provide uninterrupted, quality service to every
              corner of the market.
            </Text>
            <Link to={"/infrastructure"}>
              <Button variant="solid" colorScheme="blue" onClick={scrollToTop}>
                Read more
              </Button>
            </Link>
            <Stack
              spacing={{ base: 4, sm: 1 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Input
                type="email"
                placeholder="Enter Your Email"
                width={["80%", "400px"]}
                height="65px"
              />
              <Button
                width={["60%", "110px" ,  "150px" ]}
                height="65px"
                _hover={{ bg: "blue.600" }}
                background={"#156DB1"}
                color={"white"}
                //   position={'absolute'}
                // left={["0", "0rem"]}
              >
                Get in touch
              </Button>
            </Stack>
            <Stack
              border={"1px solid #d3d3d3"}
              width={["100%", "25rem"]}
              direction={"row"}
              height={"4.3rem"}
              display={"flex"}
              justifyContent={"space-between"}
              spacing={10}
              alignItems={"center"}
            >
              <Checkbox colorScheme="green" margin={"10px"} size="lg">
                I'm not robot
              </Checkbox>
              <Image src={reCaptchaImage} width={"50px"} height="50px" />
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"auto"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"auto"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                // w={"100%"}
                // h={"100%"}
                w={'auto'}
                h={'auto'}
                src={infrastructure}
              />
            </Box>
          </Flex>
        </Stack>
        <Center>
        <Text color={"#1c539e"} fontSize="4xl">Our solutions</Text>
        </Center><Center>
        <Text fontSize="4xl">Think Last Mile, Think HPNPAY</Text>
        </Center>
        <SimpleGrid
          bg="gray.50"
          columns={{ sm: 2, md: 3 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          <Card maxW="sm">
            <Image
              src={digitalCash}
              alt="digital-cash-image"
              borderRadius="lg"
              height={"18rem"}
              width={"25rem"}
            />
            <CardHeader>
              <Heading size="md">Digitize cash collection</Heading>
              <br />
            </CardHeader>
            {/* <CardBody>
                            <Text>At HPNPAY, we've built a single, cohesive network that customers and partners alike can rely on. Trust is the cornerstone of our operations, with every member, from agents to retailers, upholding the highest standards of service and integrity. We bring together a myriad of services, delivering a seamless financial experience that solidifies our position as a leading trusted network in digital transactions.</Text>
                        </CardBody> */}
            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to={"/digitalcashcollection"}>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={scrollToTop}
                >
                  Learn more
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <Image
              src={increaseIndia}
              alt="digital-india-image"
              borderRadius="lg"
              height={"18rem"}
              width={"25rem"}
            />
            <CardHeader>
              <Heading size="md">
                Increase market penetration at the last mile
              </Heading>
            </CardHeader>

            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to={"/increasemarket"}>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={scrollToTop}
                >
                  Learn more
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <Image
              src={digitalOrder}
              alt="digital-order-image"
              borderRadius="lg"
              height={"18rem"}
              width={"25rem"}
            />
            <CardHeader>
              <Heading size="md">Digitize order placement and payment</Heading>
            </CardHeader>

            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to={"/digitalorder"}>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={scrollToTop}
                >
                  Learn more
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <Box display={"flex"} justifyContent={"center"}></Box>
        <Box
          className="goldloan-corporate"
           height={"600px"}
          width={"100%"}
          // margin="auto"
          mb={"3rem"}
           h={"full"}
          overflow={"hidden"}
          boxShadow={"dark-lg"}
        >
          <Image src={goldLoan} width={"100%"} height={"100%"} />
        </Box>
        <Center>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text fontSize="3xl" as="b">
              Why HPNPAY
            </Text>
            <br />
            <Text fontSize="2xl" as="b" color={"#1c539e"}>
              Technology driven, customer first approach to last mile
              connectivity and solution
            </Text>
            <SimpleGrid
              bg="gray.50"
              columns={{ sm: 2, md: 3 }}
              spacing="8"
              p="10"
              textAlign="center"
              rounded="lg"
              color="gray.400"
            >
              <Card maxW="sm">
                <Image
                  src={trustednetwork}
                  alt="digital-cash-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">One Trusted Network:</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    At HPNPAY, we've built{" "}
                    <span>
                      <b>
                        a single, cohesive network that customers and partners
                        alike can rely on.
                      </b>
                    </span>{" "}
                    Trust is the cornerstone of our operations, with every
                    member, from agents to retailers, upholding the highest
                    standards of service and integrity. We bring together a
                    myriad of services, delivering a seamless financial
                    experience that solidifies our position as a leading trusted
                    network in digital transactions.
                  </Text>
                </CardBody>
              </Card>

              <Card maxW="sm">
                <Image
                  src={largestNetwork}
                  alt="digital-india-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">Largest Network:</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    Our vast network is unparalleled, making HPNPAY{" "}
                    <span>
                      <b>
                        the most extensive financial services network available
                        today.
                      </b>
                    </span>{" "}
                    Spanning urban centers to remote areas, our reach ensures
                    financial inclusivity for all. With the most extensive
                    network at your fingertips, you're connected to a world of
                    possibilities that transcends physical and financial
                    barriers.
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="sm">
                <Image
                  src={agentincorner}
                  alt="digital-order-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">Agent in Every Corner:</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    <span>
                      <b>HPNPAY's promise is accessibility,</b>
                    </span>{" "}
                    and we fulfill this through our agents, strategically
                    located to serve you no matter where you are. Our agents are
                    local pillars in their communities, providing a personal
                    touch and understanding to every transaction. With an HPNPAY
                    agent always within reach, financial empowerment is never
                    far away.
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="sm">
                <Image
                  src={communities}
                  alt="digital-order-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">Empowering Communities:</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    <span>
                      <b>
                        HPNPAY is dedicated to the socioeconomic upliftment of
                        every community we touch.
                      </b>
                    </span>{" "}
                    Our services are designed to empower individuals and
                    communities by providing easy access to financial services,
                    fostering self-reliance, and fuelling local economies. We're
                    more than a network; we're a partner in progress, investing
                    in the future of the communities we serve.
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="sm">
                <Image
                  src={largestAgent}
                  alt="digital-order-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">Largest Agent Network:</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    Our agent network is the heartbeat of our service delivery,
                    <span>
                      <b> the largest of its kind,</b>
                    </span>{" "}
                    and committed to excellence. Each agent is equipped with the
                    tools and knowledge to navigate the financial landscape,
                    ensuring that every customer interaction is handled with
                    expertise and care. HPNPAY's agents are your trusted
                    advisors in the financial world.
                  </Text>
                </CardBody>
              </Card>

              <Card maxW="sm">
                <Image
                  src={retailer}
                  alt="digital-order-image"
                  borderRadius="lg"
                  height={"18rem"}
                  width={"25rem"}
                />
                <CardHeader>
                  <Heading size="md">Largest Retailers Network:</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    <span>
                      <b>
                        The HPNPAY retailers' network stands as the largest in
                        the sector,
                      </b>
                    </span>{" "}
                    offering an extensive portfolio of financial products and
                    services. Each retailer in our network is a gateway to
                    financial convenience, ensuring that wherever you find an
                    HPNPAY retailer, you find a solution tailored to your needs.
                    Our network is a testament to our mission of providing
                    accessible financial services on a grand scale.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default Corporate;
