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
      <Box m="1rem" boxShadow="2xl" pb="1rem"
     >
        <Box marginTop={"3rem"}>
          <Heading
            color={"blue.400"}
            as={"span"}
            textAlign="center"
            paddingBottom="10px"
          >
            <Text fontSize={{ base: "5xl", lg: "7xl" }}>
              Leading and Upcoming Partners
            </Text>
          </Heading>
        </Box>
        <Box
          margin={{ base: "1rem", md: "1rem" }}
          mx="1rem"
          width={"full"}
          overflow={"hidden"}
          borderRadius={"10px"}
        >
          <Flex
            gap="30px"
            marginTop="30px"
            flexWrap="wrap"
            // justifyContent="center"
            // textAlign={'center'}
            mx="2rem"
          >
            {cards.map((img, index) => (
              <Box
                key={index}
                marginLeft={{base:"0px" , md:"30px"}}
                height={{ base: "100px", md: "150px" }}
                width={{ base: "120px", md: "120px" }}
              >
                <Image
                className="partner-image"
                  // 
                  mx="1rem"
                  height="100%"
                  width="100%"
                  objectFit="contain"
                  src={img.image}
                />
              </Box>
            ))}
          </Flex>
        </Box>

        <Flex align="center" justify="center">
          <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
            <Box
              width={{ base: "90%", md: "50%" }}
              textAlign={"center"}
              mx="auto"
            >
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                
                <Text color={"blue.400"} as={"span"}>
                  Download HPNPAY
                </Text>
              </Heading>
              <Text
                margin={{ base: "15px", md: "35px" }}
                fontSize={{ base: "xl", lg: "2xl" }}
                color={"gray.500"}
                fontWeight={"bold"}
              >
                Use HPNPAY app & take charge of all your transactions to grow
                your business
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Input
               
                  margin={{ base: "35px", md: "65px" }}
                  type="number"
                  placeholder="Enter Phone No."
                  width={{ base: "85%", sm: "30rem" }}
                  height="3rem"
                  border="1px solid blue"
                />
              </Stack>
              <Stack
                border={"1px solid #d3d3d3"}
                borderRadius="0.5rem"
                width={{ base: "90%", sm: "300px" ,md:"72%"}}
                direction={{ base: "column", sm: "row" }}
                height={{ base: "auto", sm: "66px" }}
                display={"flex"}
                justifyContent={"space-between"}
                spacing={{ base: 4, sm: 13 }}
                alignItems={"center"}
                mx={{base:"0.8rem", md:"4em"}}
              >
                <Checkbox
                  colorScheme="green"
                  margin={{ base: "10px", sm: "0.2rem" }}
                  ml={{base:"1rem", md:'0.5rem'}}
                  size="lg"
                  m="0.5rem"
                >
                  I'm not a robot
                </Checkbox>
                <Image
                  src={reCaptchaImage}
                  width={{ base: "50px", sm: "50px" }}
                  height="50px"
                />
                <Button
                  width={{ base: "80%", sm: "9rem" }}
                  height={{ base: "70px", sm: "3rem" }}
                  _hover={{ bg: "blue.600" }}
                  background={"#156DB1"}
                  color={"white"}
                  m={{base:"0.2rem",md:"0.5rem"}}
                >
                  Get App Link
                </Button>
              </Stack>
            </Box>
            <Box width={{ base: "90%", md: "50%" }} textAlign="center">
              <Image
               className="silver-Investment"
                width={{ base: "100%", md: "55%" }}
                height={{ base: "50%", md: "auto" }}
                marginTop={{ base: "5rem", md: "0" }}
                mx={{base:"2rem"}}
                alt="download"
                src={download}
              />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
