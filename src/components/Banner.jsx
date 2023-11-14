"use client";

import React from "react";
import "../retailer.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  Image,
  Blob,
  useColorModeValue,
  SimpleGrid,
  StackDivider,
  Icon,
  Card,
  Table,
  Tbody,
  Tr,
  Td,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import mobileImage from "../images/retailer_img/mobile.png";
import dass1 from "../images/retailer_img/banner_img7.jpeg";
import dass2 from "../images/retailer_img/banner_img8.png";
import dass3 from "../images/retailer_img/banner_img9.png";

import worldImage from "../images/retailer_img/indiamap.png";
import { Link } from "react-router-dom";
import goldLoan from "../images/footer/goldinvestment.jpg";
import advantage1 from "../images/retailer_img/advantage1.svg.png";
import advantage2 from "../images/retailer_img/advantage2.svg.png";
import advantage3 from "../images/retailer_img/advantage3.svg.png";
import advantage4 from "../images/retailer_img/advantage4.svg.png";
import advantage5 from "../images/retailer_img/advantage5.svg.png";
import advantage6 from "../images/retailer_img/advantage6.svg.png";
import advantage7 from "../images/retailer_img/advantage7.svg.png";
import advantage8 from "../images/retailer_img/advantage8.svg.png";
import advantage9 from "../images/retailer_img/advantage9.svg.png";
import advantage10 from "../images/retailer_img/advantage10.svg.png";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const bg = useColorModeValue("blue.50", "blue.900");
  const iconbg1 = useColorModeValue("yellow.100", "yellow.900");
  const iconbg2 = useColorModeValue("green.100", "green.900");
  const iconbg3 = useColorModeValue("purple.100", "purple.900");
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Retailer",
      heading: "One step towards success, move towards victory with HPNPAY.",
      heading2: "सफलता की ओर एक कदम, HPNPAY के साथ जीत की ओर बढ़ें|",
      text: "Seize the opportunity to be among the elite HPNPAY distributors, where you can consistently exceed your financial expectations and secure a prosperous future for your business.",
      text2: "Upgrade your shop. Be the one stop banking service provider.",
      text3: " No working capital required. Earn upto ₹2,00,000+ per year.",
      image: require("../images/retailer_img/retailimg1.png"),
    },
    {
      title: "Distributor",
      heading: "Self-reliant India, Now Every Store Goes Digital with HPNPay.",
      heading2: "आत्मनिर्भर भारत, अब सभी दुकानें होंगी डिजिटल - HPNPay के साथ",
      text: " Join our growing network of distributors and watch as your financial goals are not only met but surpassed with the innovative and dynamic HPNPAY system.",
      // text3: "Join our growing network of distributors and watch as your financial goals are not only met but surpassed with the innovative and dynamic HPNPAY system.",
      text3: "Empowering Stores, Strengthening India - HPNPay, Uniting Digital Futures",
      image: require("../images/retailer_img/retailimg.png"),
    },
    {
      title: "Individual/Self Help Groups",
      heading: "Your Trust, Our Commitment - HPNPay, Secure and Reliable Digital Services",
      heading2: "आपका विश्वास, हमारा संवाद - HPNPay, सुरक्षित और विश्वसनीय डिजिटल सेवाएं",
      text:" Embrace the wave of digital transformation and join our vast network of distributors. With HPNPAY, your financial aspirations are within reach, promising more than just profitability— a future of financial independence and empowerment.",
      // text2: "Upgrade your shop. Be the one stop banking service provider.",
      text3: "Building Security, Delivering Assurance - HPNPay, Your Digital Shield",
      image: require("../images/retailer_img/retailimg2.png"),
    },
  ];

  const smartCard = [
    {
      title: "Retailer",
      text: "Elevate your retail venture with Hannanth Digital India Private Limited's flagship brand, HPNPAY. Integrate our cutting-edge digital services into your business model and unlock the potential for substantial revenue growth, with returns that can surpass 18% monthly on your investment. HPNPAY enables you to bypass the limitations of physical stock, freeing you from the financial burden of store space, managing staff, or handling goods. Our system is designed to ensure that each transaction processed through your retail network generates profit for you. With this effortless integration, your business operations become more efficient and profitable.",
      text2:
        " Seize the opportunity to be among the elite HPNPAY distributors, where you can consistently exceed your financial expectations and secure a prosperous future for your business.",
      // title2: 'Retail Categories',
      image: require("../images/aboutUs_img/aboutus_img2.png"),
    },
    {
      title: "Distributor",
      text: "Hannanth Digital India Private Limited invites you to expand your horizons as a distributor with our brand, HPNPAY. By incorporating our services into your network, you tap into a wellspring of earnings, potentially over 18% monthly, on the capital invested. HPNPAY's platform is a game-changer, rendering obsolete the need for physical inventory and the associated overhead costs of storage, staffing, and logistics. With every financial operation conducted by your retailers, your income stream is amplified. The process is streamlined, transparent, and designed to maximize your profitability without the complexities of traditional business models.",
      text2:
        " Join our growing network of distributors and watch as your financial goals are not only met but surpassed with the innovative and dynamic HPNPAY system.",
      // title2: 'Distributor Categories',
      image: require("../images/retailer_img/distributor.svg.png"),
    },
    {
      title: "Individual/Self Help Groups",
      text: "Transform the economic landscape of your community with HPNPAY, a revolutionary financial service from Hannanth Digital India Private Limited. By aligning with HPNPAY, individuals and self-help groups alike can harness a formidable 18% monthly growth on investments, effectively minimizing the financial strain associated with inventory, space, and personnel. The platform is structured to facilitate seamless financial transactions within your network, ensuring that every interaction contributes to your financial well-being. With HPNPAY, the complexities of conventional business practices are replaced with a straightforward, profit-oriented approach.",
      text2:
        " Embrace the wave of digital transformation and join our vast network of distributors. With HPNPAY, your financial aspirations are within reach, promising more than just profitability— a future of financial independence and empowerment.",
      // title2: 'Individual/Self Help Groups Categories:',
      image: require("../images/retailer_img/banner_img6.jpg"),
    },
  ];

  const LinkItems = [
    { name: "Digital Suite" },
    { name: "Banking Services" },
    { name: "Utility Payment Center" },
    { name: "Insurance" },
    { name: "Travel" },
    { name: "Essential Services" },
    { name: "Partner Services" },
    { name: "Credit Services" },
  ];

  //code for show page froom top.
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"100%"}
      margin="auto"
      mr="0.5rem"
      h={"full"}
      overflow={"hidden"}
      padding={"40px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/*Part 1 -  Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Container maxW="150vw" py={5} key={index}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 2 }} spacing={5}>
              <Stack spacing={4} key={index}>
                <Heading color={"blue.700"} fontSize="4xl" font-weight="bold">
                  {card.heading}
                </Heading>
                <Heading color={"blue.700"} fontSize="3xl" font-weight="bold">
                  {card.heading2}
                </Heading>
                <Stack spacing={4}>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    {card.text}
                  </Text>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    {card.text2}
                  </Text>
                  <Text color={"blue.500"} font-weight="bold" fontSize={"lg"}>
                    {card.text3}
                  </Text>
                </Stack>

                <Stack direction="row" spacing={4} align="center">
                  <Link to="/income-calculator">
                    <Button
                      size="md"
                      height="60px"
                      width={{
                        base: "8rem",
                        sm: "3rem",
                        md: "6rem",
                        lg: "12rem",
                      }}
                      border="2px"
                      borderColor="blue.500"
                    >
                      <Text fontSize={{base:"14px", md:"10px", lg:"12px"}}>Income Calculator</Text>
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      size="md"
                      height="60px"
                      width={{
                        base: "8rem",
                        sm: "3rem",
                        md: "6rem",
                        lg: "12rem",
                      }}
                      // border='2px'
                      _hover={{ bg: "blue.600" }}
                      background={"#156DB1"}
                      color={"white"}
                    >
                       <Text fontSize={{base:"14px", md:"10px", lg:"12px"}}>Join HPNPAY</Text>
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={card.image}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        ))}
      </Slider>

      {/* Part 2- mobile dashboard and side bar */}

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          position: "relative",
        }}
      >
        {/* <div style={{ display: "flex", alignItems: "flex-end",position:"relative" ,width:"70%"}}> */}

        <Flex>
          <Image src={mobileImage} height={"600px"} mt="2rem" />
          <Text fontSize="5xl" color="#1c539e" zIndex="10" as="b" mt="6rem">
            One App<br></br>Multiple Milestones - Pay, Play, Prosper
          </Text>
        </Flex>
        {/* </div> */}
        <Center>
          <Text fontSize="xl" color="#5e646a">
            A great earning potential with the opportunity to grow your<br></br>{" "}
            business with minimal one time investment and zero working<br></br>{" "}
            capital
          </Text>
        </Center>
      </Box>
      <Box></Box>

      {/* part-3 Daas platform */}
      <Card
        padding={"30px"}
        borderradius={"20px"}
        bordershadow={"10px"}
        marginTop={"10px"}
        display={"flex"}
      >
        <Box className="main-component">
          {/* <h1>India's largest Distribution as-a-service (DaaS) platform</h1> */}

          <Box className="text">
            <Text fontSize="42px" color={"Blue.400"}>
              Expertise in BBPS and AEPS - HPNPay, Your Store's Best Companion
            </Text>
          </Box>
          <Box style={{ marginLeft: "2rem" }} className="images">
            <Box>
              <Image ml={"20px"} src={dass1} width={"380px"} height={"290px"} />
              <p style={{ marginLeft: "5rem" }}>Banking Business Publishing</p>
            </Box>
            <Box>
              <Image ml={"20px"} src={dass2} width={"380px"} height={"290px"} />
              <p style={{ marginLeft: "4rem" }}>
                India's Best Banking syetem in Bharat
              </p>
            </Box>
            <Box>
              <Image ml={"20px"} src={dass3} width={"380px"} height={"290px"} />
              <p style={{ marginLeft: "5rem" }}>Banking Technology review </p>
            </Box>
          </Box>
        </Box>
      </Card>
      <Box
        position={"relative"}
        height={"600px"}
        width={"100%"}
        margin="auto"
        h={"full"}
        overflow={"hidden"}
        paddingTop={"20px"}
      >
        <Image src={goldLoan} />
      </Box>
      {/* part -4 smart solution for everyone */}
      <Box marginTop="50px">
        <Stack spacing={4}>
          <Heading
            color={"blue.700"}
            fontSize="5xl"
            font-weight="bold"
            textAlign="center"
          >
            Smart Solutions for Everyone
          </Heading>

          <Stack spacing={4}>
            <Text color={"gray.500"} fontSize={"lg"} textAlign="center">
              Whether you are a retailer, distributor, individual or self help
              group, we have smart solutions for everyone.
            </Text>
          </Stack>
        </Stack>

        {smartCard.map((element, index) => (
          <Container maxW={"5x1"} py={12} key={index}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Flex key={index}>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={element.image}
                  objectFit={"cover"}
                />
              </Flex>

              <Stack spacing={4}>
                <Heading color={"blue.700"} fontSize="3xl" font-weight="bold">
                  {element.title}
                </Heading>
                <Stack spacing={4}>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    {element.text}
                  </Text>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    {element.text2}
                  </Text>
                </Stack>
                {element.title === "Distributor" ? (
                  <>
                    <Stack direction="row" spacing={4} align="center">
                      <Link to="/income-calculator">
                        <Button
                          size="md"
                          height="60px"
                          width="12rem"
                          border="2px"
                          borderColor="blue.500"
                        >
                          Income Calculator
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button
                          size="md"
                          height="60px"
                          width="12rem"
                          // border='2px'
                          _hover={{ bg: "blue.600" }}
                          background={"#156DB1"}
                          color={"white"}
                        >
                          Join HPNPAY
                        </Button>
                      </Link>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack direction="row" spacing={4} align="center">
                      <Link to="/income-calculator">
                        <Button
                          size="md"
                          height="60px"
                          width="12rem"
                          border="2px"
                          borderColor="blue.500"
                        >
                          Income Calculator
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button
                          size="md"
                          height="60px"
                          width="12rem"
                          // border='2px'
                          _hover={{ bg: "blue.600" }}
                          background={"#156DB1"}
                          color={"white"}
                        >
                          Join HPNPAY
                        </Button>
                      </Link>
                    </Stack>
                  </>
                )}

                <Heading color={"blue.700"} fontSize="2xl" font-weight="bold">
                  {element.title2}
                </Heading>
              </Stack>
            </SimpleGrid>
          </Container>
        ))}
      </Box>

      {/* part -5 Make financial services accessible to everyone, everywhere */}
      <Box>
        <Card
          align="center"
          height={"600px"}
          position={"relative"}
          width={"100%"}
          margin={"auto"}
          padding={"auto"}
        >
          <Image
            boxSize="30rem"
            src={worldImage}
            style={{
              position: "absolute",
              top: 30,
              left: 350,
              zIndex: 0,
              // Use a percentage value for responsiveness
              // height: "auto", // Maintain aspect ratio
              opacity: 0.4,
            }}
            w={{ base: "10%", sm: "20%", md: "30%", lg: "40%" }}
          />

          <CardHeader
            position="absolute"
            top="20px"
            width="100%"
            textAlign="center"
            zIndex={1}
            mx="1rem"
            px="1rem"
          >
            <Heading
              fontSize={"3rem"}
              color="blue.600"
              marginTop={"3rem"}
              size="lg"
            >
              Make financial services accessible to everyone, everywhere
            </Heading>
          </CardHeader>
          <CardBody
            position="absolute"
            top="50%"
            left="40%"
            transform="translate(-40%, -40%)"
            // zIndex={1}
          >
            <Box width={"800px"} mb="2rem">
              <Text fontSize="24px" textAlign="center">
                Create a progressive society, where everyone has easy access to
                financial services, by building the largest agent banking
                network in the country.
              </Text>
            </Box>
          </CardBody>
          <CardFooter
            position="absolute"
            bottom="-1rem"
            
            zIndex={1}
            width="100%"
            mt="10rem"
           
          >
            <Flex
              direction={"row"}
              w="100%"
              m="0"
              align="center"
              // marginLeft={"100px"}
              justifyContent="space-between"
              
            >
              <Box
                borderLeft={"2px solid black"}
                paddingLeft="0.5rem"
                h="12rem"
              >
                <Text fontSize="lg">We Are Planning To Target </Text>
                <Text fontSize="3xl" as="b">
                  50 Lakh Retailers
                </Text>
              </Box>
              <Box
                borderLeft={"2px solid black"}
                paddingLeft="0.5rem"
                h="12rem"
              >
                <Text fontSize="lg">Our future target to achive </Text>
                <Text fontSize="3xl" as="b">
                  20cr customers
                </Text>
              </Box>
              <Box
                borderLeft={"2px solid black"}
                paddingLeft="0.5rem"
                h="12rem"
              >
                <Text fontSize="lg">We target to serve </Text>
                <Text fontSize="3xl" as="b">
                  20,000 PIN codes
                </Text>
              </Box>
              <Box
                borderLeft={"2px solid black"}
                paddingLeft="0.5rem"
                h="12rem"
              >
                <Text fontSize="lg">
                  We plan to target Avg. financial transactions{" "}
                </Text>
                <Text fontSize="3xl" as="b">
                  5 CR per day
                </Text>
              </Box>
            </Flex>
          </CardFooter>
        </Card>
      </Box>

      {/* part-6 HPNPAY Advantage */}

      <Box marginTop={"3rem"}>
        <Heading
          color={"blue.700"}
          fontSize="5xl"
          font-weight="bold"
          textAlign="center"
        >
          HPNPAY Advantage
        </Heading>

        <Stack spacing={4} margin="2rem">
          <Text fontSize="4xl" as="b" color={"#1c539e"} textAlign="center">
            Upgrade your business with the leader in branchless banking
          </Text>
        </Stack>
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
            <CardBody>
              <Image
                src={advantage1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Effortless Integration </Heading>
                <Text>
                  Seamlessly integrate HPNPAY with your existing systems to
                  streamline your services without the need for technical
                  expertise.
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage2}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Flexible Earnings Structure</Heading>
                <Text>
                  With HPNPAY, benefit from a flexible commission model that
                  rewards your growth and transaction volumes, enhancing your
                  earning potential.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage3}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Comprehensive Support</Heading>
                <Text>
                  Receive dedicated support and training from our expert team to
                  ensure smooth operations and service excellence.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage4}
                alt="Comprehensive Support"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Market Expansion Opportunities</Heading>
                <Text>
                  HPNPAY opens up new markets and customer segments, allowing
                  you to tap into the vast potential of branchless banking.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage5}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Real-time Tracking and Analytics</Heading>
                <Text>
                  Monitor your business performance with our real-time analytics
                  dashboard, enabling informed decision-making.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage6}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Secure Transactions</Heading>
                <Text>
                  Benefit from state-of-the-art security protocols ensuring that
                  every transaction is secure and reliable.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage7}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Customizable Solutions</Heading>
                <Text>
                  Tailor HPNPAY's services to meet the specific needs of your
                  customers, providing a personalized experience that drives
                  loyalty.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage8}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Nationwide Recognition</Heading>
                <Text>
                  As a part of a reputed brand, gain instant recognition and
                  trust, which helps in attracting and retaining customers.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage9}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Continuous Innovation </Heading>
                <Text>
                  Leverage HPNPAY's commitment to continuous innovation,
                  ensuring that your services stay ahead of market trends.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage10}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Eco-friendly Business Model </Heading>
                <Text>
                  With digital transactions, reduce your carbon footprint and
                  contribute to a greener environment.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
