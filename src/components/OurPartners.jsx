// "use client";

// import React from "react";
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Select,
//   FormLabel,
//   FormControl,
//   Image,
//   Heading,
//   Text,
//   Divider,
//   ButtonGroup,
//   Button,
//   Stack,
//   Flex,
//   Input,
//   Checkbox,
//   InputGroup,
//   InputLeftElement,
//   Container,
//   Center,
// } from "@chakra-ui/react";
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// // And react-slick as our Carousel Lib
// import Slider from "react-slick";
// import reCaptchaImage from "../images/solution_img/reCaptchaImage.png";
// import download from "../images/footer/download.png";

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 3000,
//   slidesToShow: 5,
//   slidesToScroll: 3,
// };

// export default function OurPartners() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   // These are the images used in the slide
//   const cards = [
//     {
//       image: require("../../src/images/ourPartner_img/sbi_bank.png"),
//     },
//     {
//       image: require("../../src/images/footer/icicibank.png"),
//     },

//     {
//       image: require("../../src/images/ourPartner_img/yesbank.png"),
//     },
//     {
//       image: require("../../src/images/ourPartner_img/axisbank.png"),
//     },
//     {
//       image: require("../../src/images/ourPartner_img/panjabbank.png"),
//     },

//     {
//       image: require("../../src/images/footer/hdfc.png"),
//     },
//     {
//       image: require("../../src/images/footer/union.png"),
//     },
//     {
//       image: require("../../src/images/footer/bankofbadoda.png"),
//     },
//   ];

//   return (
//     <>
//       {/* heading */}
//       <Box>
//         <Box>
//           <Heading
//             color={"blue.400"}
//             as={"span"}
//             textAlign="center"
//             paddingBottom="20px"
//             marginTop="50px"
//           >
//             <Text>Leading and Upcoming Partners</Text>
//           </Heading>
//         </Box>
//         {/* slider */}
//         <Box
//           position={"relative"}
//           width={"full"}
//           overflow={"hidden"}
//           borderRadius={"10px"}
//         >
//           {/* CSS files for react-slick */}
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//           />
//           <Center>
//             <Flex gap="10px" marginTop="30px">
//               {cards.map((img, index) => (
//                 <Box key={index} height={"150px"}>
//                   <Image height="80px" src={img.image} />
//                 </Box>
//               ))}
//             </Flex>
//           </Center>
//           {/* </Slider> */}
//         </Box>
//         {/* dounload pay now */}
//         <Box>
//           <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
//             <Flex flex={1} align={"center"} justify={"center"}>
//               <Stack spacing={6} w={"full"} maxW={"lg"}>
//                 <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
//                   <Text
//                     margin={"-0.5px"}
//                     as={"span"}
//                     position={"relative"}
//                     _after={{
//                       content: "''",
//                       width: "full",
//                       height: useBreakpointValue({ base: "20%", md: "30%" }),
//                       position: "absolute",
//                       bottom: 1,
//                       left: 0,
//                       bg: "blue.400",
//                       zIndex: -1,
//                     }}
//                   ></Text>
//                   <Text color={"blue.400"} as={"span"}>
//                     Download HPNPAY now
//                   </Text>{" "}
//                 </Heading>
//                 <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
//                   Use HPNPAY app & take charge of all your transactions to grow
//                   your business
//                 </Text>
//                 <Stack
//                   spacing={{ base: 4, sm: 6 }}
//                   direction={{ base: "column", sm: "row" }}
//                 >
//                   <Input
//                     type="phone"
//                     placeholder="Enter Phone No."
//                     width="500px"
//                     height="66px"
//                     border="1px solid blue"
//                   />
//                 </Stack>
//                 <Stack
//                   border={"1px solid #d3d3d3"}
//                   width={"400px"}
//                   direction={"row"}
//                   height={"66px"}
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   spacing={13}
//                   alignItems={"center"}
//                 >
//                   <Checkbox colorScheme="green" margin={"10px"} size="lg">
//                     I'm not robot
//                   </Checkbox>
//                   <Image src={reCaptchaImage} width={"50px"} height="50px" />
//                   <Button
//                     width="150px"
//                     height="70px"
//                     _hover={{ bg: "blue.600" }}
//                     background={"#156DB1"}
//                     color={"white"}
//                     position={"absoulte"}
//                     left={"200px"}
//                   >
//                     Get App Link
//                   </Button>
//                 </Stack>

//                 {/* Stack 1 */}
//                 <Stack
//                   spacing={{ base: 4, sm: 6 }}
//                   direction={{ base: "column", sm: "row" }}
//                 >
//                   <Input
//                     type="phone"
//                     placeholder="Enter Phone No."
//                     width={{ base: "100%", sm: "500px" }}
//                     height="66px"
//                     border="1px solid blue"
//                   />
//                 </Stack>

//                 {/* Stack 2 */}
//                 <Stack
//                   border={"1px solid #d3d3d3"}
//                   width={{ base: "100%", sm: "400px" }}
//                   direction={{ base: "column", sm: "row" }}
//                   height={{ base: "auto", sm: "66px" }}
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   spacing={{ base: 4, sm: 13 }}
//                   alignItems={"center"}
//                 >
//                   <Checkbox
//                     colorScheme="green"
//                     margin={{ base: "10px", sm: "0" }}
//                     size="lg"
//                   >
//                     I'm not robot
//                   </Checkbox>
//                   <Image
//                     src={reCaptchaImage}
//                     width={{ base: "50px", sm: "50px" }}
//                     height="50px"
//                   />
//                   <Button
//                     width={{ base: "100%", sm: "150px" }}
//                     height={{ base: "70px", sm: "3rem" }}
//                     _hover={{ bg: "blue.600" }}
//                     background={"#156DB1"}
//                     color={"white"}
//                     position={{ base: "static", sm: "absolute" }}
//                     left={{ base: "0", sm: "200px" }}
//                   >
//                     Get App Link
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Flex>
//             <Flex flex={1}>
//               <Image
//                 width={"100%"}
//                 height={"65%"}
//                 marginTop={"5rem"}
//                 ml={"10px"}
//                 alt="download"
//                 src={download}
//               />
//             </Flex>
//           </Stack>
//         </Box>
//       </Box>
//     </>
//   );
// }

// "use client";

// import React from "react";
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Select,
//   FormLabel,
//   FormControl,
//   Image,
//   Heading,
//   Text,
//   Divider,
//   ButtonGroup,
//   Button,
//   Stack,
//   Flex,
//   Input,
//   Checkbox,
//   InputGroup,
//   InputLeftElement,
//   Container,
//   Center,
// } from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// import Slider from "react-slick";
// import reCaptchaImage from "../images/solution_img/reCaptchaImage.png";
// import download from "../images/footer/download.png";

// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 3000,
//   slidesToShow: 5,
//   slidesToScroll: 3,
// };

// export default function OurPartners() {
//   const [slider, setSlider] = React.useState(null);
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   const cards = [
//     { image: require("../../src/images/ourPartner_img/sbi_bank.png") },
//     { image: require("../../src/images/footer/icicibank.png") },
//     { image: require("../../src/images/ourPartner_img/yesbank.png") },
//     { image: require("../../src/images/ourPartner_img/axisbank.png") },
//     { image: require("../../src/images/ourPartner_img/panjabbank.png") },
//     { image: require("../../src/images/footer/hdfc.png") },
//     { image: require("../../src/images/footer/union.png") },
//     { image: require("../../src/images/footer/bankofbadoda.png") },
//   ];

//   return (
//     <>
//       <Box>
//         <Box marginTop={'3rem'}>
//           <Heading color={"blue.400"} as={"span"} textAlign="center" paddingBottom="10px" >
//             <Text fontSize={{base:"5xl" , lg:"7xl"}}>Leading and Upcoming Partners</Text>
//           </Heading>
//         </Box>
//         <Box  margin ={{ base:'15px' , md:"25px"}}width={"full"} overflow={"hidden"} borderRadius={"10px"}>
         
//             <Flex gap="30px" marginTop="30px" flexWrap="wrap">
//               {cards.map((img, index) => (
//                 <Box key={index} height={{ base: "100px", md: "150px" }} width={{ base: "80px", md: "120px" }}>
//                   <Image 
//                   marginLeft={{base:"30px" , md:"50px"}}
//                   height="100%" width="100%" objectFit="contain" src={img.image} />
//                 </Box>
//               ))}
//             </Flex>
          
//         </Box>
//         <Box>
//           <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
//             <Flex flex={1} align={"center"} justify={"center"} direction={{ base: "column-reverse", md: "row" }}>
//               <Flex
//                 gap={{ base: "10px", md: "30px" }}
//                 flex={{ base: 1, md: 3 }}
//                 align={"center"}
//                 justify={"center"}
//                 direction={"column"}
//                 width={"full"}
//                 maxW={"lg"}
//                 marginTop={{ base: "30px", md: "0" }}
//               >
//                 <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
//                   <Text
//                     margin={"-0.5px"}
//                     as={"span"}
//                     position={"relative"}
//                     _after={{
//                       content: "''",
//                       width: "full",
//                       height: useBreakpointValue({ base: "20%", md: "30%" }),
//                       position: "absolute",
//                       bottom: 1,
//                       left: 0,
//                       bg: "blue.400",
//                       zIndex: -1,
//                     }}
//                   ></Text>
//                   <Text
                 
//                   color={"blue.400"} as={"span"}>
//                     Download HPNPAY 
//                   </Text>
//                 </Heading>
//                 <Text 
//                  margin ={{ base:'15px' , md:"30px"}}
                
//                 fontSize={{ base: "xl", lg: "2xl" }} color={"gray.500"} fontWeight={'bold'}>
//                   Use HPNPAY app & take charge of all your transactions to grow your business
//                 </Text>
//                 <Stack
//                  marginLeft="3rem"
//                 spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
//                   <Input

//                margin ={{ base:'25px' , md:"25px"}}
//                marginLeft={{base:"xl" , md:"5xl"}}
//                     type="phone"
//                     placeholder="Enter Phone No."
//                     width={{ base: "100%", sm: "500px" }}
//                     height="66px"
//                     border="1px solid blue"
//                   />
//                 </Stack>
//                 <Stack
//                   border={"1px solid #d3d3d3"}
//                   width={{ base: "100%", sm: "500px" }}
//                   direction={{ base: "column", sm: "row" }}
//                   height={{ base: "auto", sm: "66px" }}
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   spacing={{ base: 4, sm: 13 }}
//                   alignItems={"center"}
//                   marginLeft={'4rem'}
//                 >
//                   <Checkbox colorScheme="green" margin={{ base: "10px", sm: "0" }} size="lg">
//                     I'm not robot
//                   </Checkbox>
//                   <Image src={reCaptchaImage} width={{ base: "50px", sm: "50px" }} height="50px" />
//                   <Button
//                     width={{ base: "100%", sm: "150px" }}
//                     height={{ base: "70px", sm: "3rem" }}
//                     _hover={{ bg: "blue.600" }}
//                     background={"#156DB1"}
//                     color={"white"}
//                     position={{ base: "static", sm: "static" }}
//                     left={{ base: "0", sm: "200px" }}
//                   >
//                     Get App Link
//                   </Button>
//                 </Stack>

              
//               </Flex>
//               <Flex  justifyContent={'space-between'} flex={1}>
//                 <Image width={{ base: "100%", md: "55%" }} height={{ base: "50%", md: "100%" }} marginTop={{ base: "5rem", md: "0" }} ml={{ base: "0", md: "200px" }} alt="download" src={download} />
//               </Flex>
//             </Flex>
//           </Stack>
//         </Box>
//       </Box>
//     </>
//   );
// }



// "use client";

// import React from "react";
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Select,
//   FormLabel,
//   FormControl,
//   Image,
//   Heading,
//   Text,
//   Divider,
//   ButtonGroup,
//   Button,
//   Stack,
//   Flex,
//   Input,
//   Checkbox,
//   InputGroup,
//   InputLeftElement,
//   Container,
//   Center,
// } from "@chakra-ui/react";
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// // And react-slick as our Carousel Lib
// import Slider from "react-slick";
// import reCaptchaImage from "../images/solution_img/reCaptchaImage.png";
// import download from "../images/footer/download.png";

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 3000,
//   slidesToShow: 5,
//   slidesToScroll: 3,
// };

// export default function OurPartners() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   // These are the images used in the slide
//   const cards = [
//     {
//       image: require("../../src/images/ourPartner_img/sbi_bank.png"),
//     },
//     {
//       image: require("../../src/images/footer/icicibank.png"),
//     },

//     {
//       image: require("../../src/images/ourPartner_img/yesbank.png"),
//     },
//     {
//       image: require("../../src/images/ourPartner_img/axisbank.png"),
//     },
//     {
//       image: require("../../src/images/ourPartner_img/panjabbank.png"),
//     },

//     {
//       image: require("../../src/images/footer/hdfc.png"),
//     },
//     {
//       image: require("../../src/images/footer/union.png"),
//     },
//     {
//       image: require("../../src/images/footer/bankofbadoda.png"),
//     },
//   ];

//   return (
//     <>
//       {/* heading */}
//       <Box>
//         <Box>
//           <Heading
//             color={"blue.400"}
//             as={"span"}
//             textAlign="center"
//             paddingBottom="20px"
//             marginTop="50px"
//           >
//             <Text>Leading and Upcoming Partners</Text>
//           </Heading>
//         </Box>
//         {/* slider */}
//         <Box
//           position={"relative"}
//           width={"full"}
//           overflow={"hidden"}
//           borderRadius={"10px"}
//         >
//           {/* CSS files for react-slick */}
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//           />
//           <Center>
//             <Flex gap="10px" marginTop="30px">
//               {cards.map((img, index) => (
//                 <Box key={index} height={"150px"}>
//                   <Image height="80px" src={img.image} />
//                 </Box>
//               ))}
//             </Flex>
//           </Center>
//           {/* </Slider> */}
//         </Box>
//         {/* dounload pay now */}
//         <Box>
//           <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
//             <Flex flex={1} align={"center"} justify={"center"}>
//               <Stack spacing={6} w={"full"} maxW={"lg"}>
//                 <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
//                   <Text
//                     margin={"-0.5px"}
//                     as={"span"}
//                     position={"relative"}
//                     _after={{
//                       content: "''",
//                       width: "full",
//                       height: useBreakpointValue({ base: "20%", md: "30%" }),
//                       position: "absolute",
//                       bottom: 1,
//                       left: 0,
//                       bg: "blue.400",
//                       zIndex: -1,
//                     }}
//                   ></Text>
//                   <Text color={"blue.400"} as={"span"}>
//                     Download HPNPAY now
//                   </Text>{" "}
//                 </Heading>
//                 <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
//                   Use HPNPAY app & take charge of all your transactions to grow
//                   your business
//                 </Text>
//                 <Stack
//                   spacing={{ base: 4, sm: 6 }}
//                   direction={{ base: "column", sm: "row" }}
//                 >
//                   <Input
//                     type="phone"
//                     placeholder="Enter Phone No."
//                     width="500px"
//                     height="66px"
//                     border="1px solid blue"
//                   />
//                 </Stack>
//                 <Stack
//                   border={"1px solid #d3d3d3"}
//                   width={"400px"}
//                   direction={"row"}
//                   height={"66px"}
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   spacing={13}
//                   alignItems={"center"}
//                 >
//                   <Checkbox colorScheme="green" margin={"10px"} size="lg">
//                     I'm not robot
//                   </Checkbox>
//                   <Image src={reCaptchaImage} width={"50px"} height="50px" />
//                   <Button
//                     width="150px"
//                     height="70px"
//                     _hover={{ bg: "blue.600" }}
//                     background={"#156DB1"}
//                     color={"white"}
//                     position={"absoulte"}
//                     left={"200px"}
//                   >
//                     Get App Link
//                   </Button>
//                 </Stack>

//                 {/* Stack 1 */}
//                 <Stack
//                   spacing={{ base: 4, sm: 6 }}
//                   direction={{ base: "column", sm: "row" }}
//                 >
//                   <Input
//                     type="phone"
//                     placeholder="Enter Phone No."
//                     width={{ base: "100%", sm: "500px" }}
//                     height="66px"
//                     border="1px solid blue"
//                   />
//                 </Stack>

//                 {/* Stack 2 */}
//                 <Stack
//                   border={"1px solid #d3d3d3"}
//                   width={{ base: "100%", sm: "400px" }}
//                   direction={{ base: "column", sm: "row" }}
//                   height={{ base: "auto", sm: "66px" }}
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   spacing={{ base: 4, sm: 13 }}
//                   alignItems={"center"}
//                 >
//                   <Checkbox
//                     colorScheme="green"
//                     margin={{ base: "10px", sm: "0" }}
//                     size="lg"
//                   >
//                     I'm not robot
//                   </Checkbox>
//                   <Image
//                     src={reCaptchaImage}
//                     width={{ base: "50px", sm: "50px" }}
//                     height="50px"
//                   />
//                   <Button
//                     width={{ base: "100%", sm: "150px" }}
//                     height={{ base: "70px", sm: "3rem" }}
//                     _hover={{ bg: "blue.600" }}
//                     background={"#156DB1"}
//                     color={"white"}
//                     position={{ base: "static", sm: "absolute" }}
//                     left={{ base: "0", sm: "200px" }}
//                   >
//                     Get App Link
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Flex>
//             <Flex flex={1}>
//               <Image
//                 width={"100%"}
//                 height={"65%"}
//                 marginTop={"5rem"}
//                 ml={"10px"}
//                 alt="download"
//                 src={download}
//               />
//             </Flex>
//           </Stack>
//         </Box>
//       </Box>
//     </>
//   );
// }

// "use client";

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
      <Box>
        <Box marginTop={'3rem'}>
          <Heading color={"blue.400"} as={"span"} textAlign="center" paddingBottom="10px" >
            <Text fontSize={{base:"5xl" , lg:"7xl"}}>Leading and Upcoming Partners</Text>
          </Heading>
        </Box>
        <Box  margin ={{ base:'15px' , md:"25px"}}width={"full"} overflow={"hidden"} borderRadius={"10px"}>
         
            <Flex gap="30px" marginTop="30px" flexWrap="wrap">
              {cards.map((img, index) => (
                <Box key={index} height={{ base: "100px", md: "150px" }} width={{ base: "80px", md: "120px" }}>
                  <Image 
                  marginLeft={{base:"30px" , md:"50px"}}
                  height="100%" width="100%" objectFit="contain" src={img.image} />
                </Box>
              ))}
            </Flex>
          
        </Box>
        <Box>
          <Stack direction={{ base: "column", md: "row" }} width={"100%"}>
            <Flex flex={1} align={"center"} justify={"center"} direction={{ base: "column-reverse", md: "row" }}>
              <Flex
                gap={{ base: "10px", md: "30px" }}
                flex={{ base: 1, md: 3 }}
                align={"center"}
                justify={"center"}
                direction={"column"}
                width={"full"}
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
                  <Checkbox colorScheme="green" margin={{ base: "10px", sm: "0" }} size="lg">
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
                  >
                    Get App Link
                  </Button>
                </Stack>

              
              </Flex>
              <Flex  justifyContent={'space-between'} flex={1}>
                <Image width={{ base: "100%", md: "55%" }} height={{ base: "50%", md: "100%" }} marginTop={{ base: "5rem", md: "0" }} ml={{ base: "0", md: "200px" }} alt="download" src={download} />
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

