import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import img1 from "../../images/aboutUs_img/home.jpg";

import img2 from "../../images/aboutUs_img/home.jpg";
import img3 from "../../images/aboutUs_img/corporate.jpeg";
import travel from "../../images/aboutUs_img/travel.webp";
import aeps from "../../images/aboutUs_img/aeps.png";
import Distributors from "./Distributors";
import Partnership from "./Partnership";
import goldLoan from "../../images/footer/goldinvestment.jpg";

const DistributorBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <>
      <Box position={"static"} width={"full"} overflow={"hidden"}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {/* Slide 1 */}
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex
           
              direction={{ base: "column", md: "row" }}
              p={8}
              flex={1}
              align={"center"}
              justify={"space-between"}
            >
              <Stack spacing={6} width={{ base: "100%", md: "60%" }}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
                  "HPNPay - Banking at Your Fingertips!"
                </Heading>
                <Text fontSize={"1.2rem"}>
                  AEPS with HPNPay: Simplifying Your Transactions
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  - What's AEPS? Seamlessly bank using just your Aadhaar.
                  <br />
                  - Features:
                  <br />
                  - Simple: Transactions powered by Aadhaar.
                  <br />
                  - Secure: Backed by biometric authentication.
                  <br />
                  - Versatile: From balance checks to transfers.
                  <br />
                  - Use AEPS on HPNPay:
                  <br />
                  1. Choose AEPS.
                  <br />
                  2. Enter Aadhaar.
                  <br />
                  3. Pick a transaction.
                  <br />
                  4. Authenticate and go.
                </Text>
              </Stack>
              <Box 
              
              width={{ base: "100%", md: "48%" }}
              mb={{ base: 0, md: 0 }}>
                <Image
                  alt={"Login Image"}
                  objectFit={"cover"}
                  width={{ base: "100%", md: "120%" , lg:"120%"}}
                  src={aeps}
                />
              </Box>
            </Flex>
          </Flex>

          {/* Slide 2 */}
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex direction={{ base: "column", md: "row" }} p={8} flex={1}   align={"center"}
              justify={"space-between"} gap={'1rem'} >
              <Stack spacing={6} width={{ base: "100%", md: "40%" }}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  'PERSONAL LOAN'
                </Heading>
                <Text fontSize={"1.5rem"}>Empower Your Ambitions</Text>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  * Your Path, Your Pace: In the dynamic realm of business,
                  having the right resources at the right time can be a
                  game-changer. Our personal loans are tailored to match your
                  unique ambitions and needs. <br />
                  * YourFuel Your Dreams: Every entrepreneur has a vision. Bring
                  yours to life with our specialized personal loan solutions,
                  designed for the passionate and driven.
                  <br />
                  * Seamless Transactions: Our streamlined application process
                  ensures that you get the funds you require without the usual
                  hassle. Every moment counts in business, and we respect that.
                  <br />* Trusted Partner: We're more than just a financial
                  institution; we're your partner in success. With competitive
                  rates and flexible repayment options, we're committed to
                  supporting your journey from start to finish.
                </Text>
              </Stack>
              <Box
              
                mb={{ base: 0, md: 0 }}
                width={{ base: "100%", md: "48%" }}
              >
                <Image
                  alt={"Login Image"}
                
                  width={{ base: "100%", md: "120%" , lg:"120%"}}
                  src={img2}
                />
              </Box>
            </Flex>
          </Flex>

          {/* Slide 3 */}
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex
            
              direction={{ base: "column", md: "row" }}
              p={8}
              flex={1}
              align={"center"}
              justify={"space-evenly"}
            >
              <Stack spacing={6} width={{ base: "100%", md: "60%" }}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  Grow Your Business, Grow Your Dreams
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  * Seize Every Chance: Business doesn't stop, and neither
                  should your ambitions. Harness every available opportunity.
                  <br />
                  * Tailored Financial Support: Secure the essential funds
                  seamlessly through our bespoke business-centric personal loan
                  offerings.
                  <br />
                  🔗 Dive Deeper - Unravel the spectrum of possibilities that
                  awaits your business. Propel forward, always. <br />
                  🔗 Discover More - Unlock the doors to endless possibilities.
                  Propel your business forward, because when you succeed, we
                  succeed.
                </Text>
              </Stack>
              <Box
              width={{ base: "100%", md: "48%" }} 
              
              mb={{ base: 0, md: 0 }}>
                <Image
                  alt={"Login Image"}
                  objectFit={"cover"}
                  width={{ base: "100%", md: "120%" , lg:"120%"}}
                  src={img3}
                />
              </Box>
            </Flex>
          </Flex>
        </Slider>
      </Box>

      <Distributors />
      <Box
        height={{ base: "auto", md: "250px" }}
        width={{ base: "90%" }}
        // margin="auto"
        marginX={{ base: "10px", md: "auto" }}
        mb="1rem"
        overflow={"hidden"}
        paddingTop={{ base: "20px", md: "50px" }}
      >
        <Image
          src={goldLoan}
          width={{ base: "100%", md: "100%" }}
          boxShadow={"dark-lg"}
          h="100%"
        />
      </Box>

      <Box
        width={{ base: "90%", md: "80%" }}
        margin="auto"
        my={{ base: "50px", md: "50px" }}
        border={"2px solid gray"}
        padding={{ base: "30px", md: "50px" }}
        borderRadius={"30px"}
      >
        <Text
          fontSize={{ base: "28px", md: "38px" }}
          color={"cyan.700"}
          fontWeight={"500"}
          marginBottom={"20px"}
        >
          Join the HPNPAY Network - Expand Your Reach, Elevate Your Earnings
        </Text>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginLeft: "30px",
          }}
        >
          <strong>
            At HPNPAY, we're more than just a service provider; we're your
            gateway to growth in the bustling digital financial space.
            Partnering with us means you're not just getting access to services;
            you're stepping into a world of potential. Here’s how you benefit:
          </strong>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Seamless Integration:</strong>{" "}
            With HPNPAY, integrate swiftly with BBPS, AEPS, and DSA services,
            and start transacting with ease.&nbsp;
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Broader Consumer Base:</strong>{" "}
            Tap into a diverse customer pool looking for convenient bill
            payments, banking services, and more, all under one roof.&nbsp;
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>
              Enhanced Revenue Streams:
            </strong>{" "}
            Leverage multiple services to amplify your income potential. More
            services mean more revenue.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>
              Empowerment Through Technology:
            </strong>{" "}
            Get access to cutting-edge tech that empowers you and your retailers
            to serve customers efficiently.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Training & Support:</strong>{" "}
            Benefit from comprehensive training and continuous support to ensure
            you and your network are always ahead.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Trusted Compliance:</strong>{" "}
            Stay worry-free with a platform that’s compliant with the latest
            financial regulations and security standards.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Real-Time Tracking:</strong>{" "}
            Keep a finger on the pulse of your business with real-time reporting
            and tracking features. Dedicated Assistance: Our dedicated help desk
            ensures that your queries and issues are resolved, keeping your
            business running smoothly.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Network Growth:</strong> As you
            grow your network of retailers, you're not just building business,
            you're enhancing communities.
          </li>
          <li style={{ fontSize: "18px" }}>
            <strong style={{ fontSize: "20px" }}>Customer Satisfaction:</strong>{" "}
            With reliable services and support, delight your customers every
            day, which is the true measure of our combined success.
          </li>
        </ul>
        <p>&nbsp;</p>
      </Box>

      <Box
        background={"#f6f9fc"}
        width={{ base: "90%", md: "80%" }}
        margin={"auto"}
        my={{ base: "30px", md: "50px" }}
      >
        <Text fontSize={{ base: "20px", md: "22px" }}>
          Empower your retailers and give them an opportunity to increase their
          income and subsequently increase your income too.
        </Text>
        <Text fontSize={{ base: "22px", md: "24px" }} fontWeight={"700"}>
          Empowered Distributors = Empowered Retailers = Happy Customers
        </Text>
      </Box>

      <Box
        width={{ base: "90%", md: "80%" }}
        margin={"auto"}
        my={{ base: "30px", md: "50px" }}
        bg={useColorModeValue("gray.50", "gray.800")}
        py={{ base: "20px", md: "30px" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems="center"
          mx="0.5rem"
        >
          <Box width={{ base: "80%", md: "50%" }}>
            <Text
              fontSize={{ base: "28px", md: "32px" }}
              fontWeight={"700"}
              color={"cyan.700"}
              w={{ base: "100%", md: "80%" }}
            >
              Start your lifetime income business
            </Text>
            <Text fontSize={{ base: "18px", md: "20px" }} mt={"20px"} w="90%">
              Submit your details, our team will get in touch with you to start
              your Digital Distribution Business
            </Text>
          </Box>
          <Box width={{ base: "80%", md: "50%" }} border={"1px solid gray.200"}>
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.200", "gray.800")}
              borderRadius={"20px"}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            >
              <Stack
                spacing={4}
                w={{ base: "90%", md: "90%" }}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "xl", md: "3xl" }}>
                  Enter Your mobile No.
                </Heading>
                <FormControl id="email">
                  <Input
                    placeholder="Mobile No"
                    _placeholder={{ color: "gray.500" }}
                    type="email"
                  />
                </FormControl>
                <Stack spacing={6}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Verify Number
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* </Box> */}
    </>
  );
};
export default DistributorBanner;
