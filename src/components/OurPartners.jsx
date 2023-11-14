import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Select,
  FormLabel,
  FormControl,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
  Flex,
  Input,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Container,
  Center,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import reCaptchaImage from "../images/solution_img/reCaptchaImage.png";
import download from "../images/footer/download.png";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 3,
};

export default function OurPartners() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    { image: require("../../src/images/ourPartner_img/sbi_bank.png") },
    { image: require("../../src/images/footer/icicibank.png") },
    { image: require("../../src/images/ourPartner_img/yesbank.png") },
    { image: require("../../src/images/ourPartner_img/axisbank.png") },
    { image: require("../../src/images/ourPartner_img/panjabbank.png") },
    { image: require("../../src/images/footer/hdfc.png") },
    { image: require("../../src/images/footer/union.png") },
    { image: require("../../src/images/footer/bankofbadoda.png") },
  ];

  return (
    <>
      <Box m="1rem 1rem" boxShadow="2xl" pb="1rem">
        <Box marginTop={'3rem'}>
          <Heading color={"blue.400"} as={"span"} textAlign="center" paddingBottom="10px" >
            <Text fontSize={{base:"5xl" , lg:"7xl"}}>Leading and Upcoming Partners</Text>
          </Heading>
        </Box>
        <Box  margin ={{ base:'1rem' , md:"1rem"}} mx="1rem" width={"full"} overflow={"hidden"} borderRadius={"10px"}>
         
            <Flex gap="30px" marginTop="30px" flexWrap="wrap" justifyContent="center" mx="2rem">
              {cards.map((img, index) => (
                <Box key={index} height={{ base: "100px", md: "150px" }} width={{ base: "80px", md: "120px" }}>
                  <Image 
                  // marginLeft={{base:"30px" , md:"30px"}}
                  mx="1rem"
                  height="100%" width="100%" objectFit="contain" src={img.image} />
                </Box>
              ))}
            </Flex>
          
        </Box>
        <Box>
          <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
            <Flex width={"100%"} align-items="center" justifyContent="center" direction={{ base: "column-reverse", md: "row" }}>
              <Flex
                width="50%" 
                gap={{ base: "10px", md: "30px" }}
                flex={{ base: 1, md: 3 }}
                align={"center"}
                justify={"center"}
                direction={"column"}
                maxW={"lg"}
                marginTop={{ base: "30px", md: "0" }}
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <Text
                    margin={"-0.5px"}
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: useBreakpointValue({ base: "20%", md: "30%" }),
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "blue.400",
                      zIndex: -1,
                    }}
                  ></Text>
                  <Text
                 
                  color={"blue.400"} as={"span"}>
                    Download HPNPAY 
                  </Text>
                </Heading>
                <Text 
                 margin ={{ base:'15px' , md:"35px"}}
                
                fontSize={{ base: "xl", lg: "2xl" }} color={"gray.500"} fontWeight={'bold'}>
                  Use HPNPAY app & take charge of all your transactions to grow your business
                </Text>
                <Stack
                 marginLeft="3rem"
                spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
                  <Input

               margin ={{ base:'25px' , md:"25px"}}
               marginLeft={{base:"xl" , md:"5xl"}}
                    type="phone"
                    placeholder="Enter Phone No."
                    width={{ base: "100%", sm: "500px" }}
                    height="66px"
                    border="1px solid blue"
                  />
                </Stack>
                <Stack
                  border={"1px solid #d3d3d3"}
                  width={{ base: "100%", sm: "500px" }}
                  direction={{ base: "column", sm: "row" }}
                  height={{ base: "auto", sm: "66px" }}
                  display={"flex"}
                  justifyContent={"space-between"}
                  spacing={{ base: 4, sm: 13 }}
                  alignItems={"center"}
                  marginLeft={'4rem'}
                >
                  <Checkbox colorScheme="green" margin={{ base: "10px", sm: "0.2rem" }} size="lg" m="0.5rem">
                    I'm not robot
                  </Checkbox>
                  <Image src={reCaptchaImage} width={{ base: "50px", sm: "50px" }} height="50px" />
                  <Button
                    width={{ base: "100%", sm: "150px" }}
                    height={{ base: "70px", sm: "3rem" }}
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                    position={{ base: "static", sm: "static" }}
                    left={{ base: "0", sm: "200px" }}
                    m="0.5rem"
                  >
                    Get App Link
                  </Button>
                </Stack>

              
              </Flex>
              <Flex  width="50%" justifyContent="center">
                <Image width={{ base: "100%", md: "55%" }} height={{ base: "50%", md: "100%" }} marginTop={{ base: "5rem", md: "0" }} alt="download" src={download} />
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

