// import { ReactNode } from 'react';
// import {
//   Box,
//   Container,
//   Stack,
//   SimpleGrid,
//   Text,
//   VisuallyHidden,
//   chakra,
//   useColorModeValue,
//   Image,
// } from '@chakra-ui/react';
// import OurPartners from './OurPartners';
// import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin, } from 'react-icons/fa';
// import bcfiImage from "../images/footer/bcfi-logo.png"
// import playStoredBaged from "../images/footer/google-play.png"
// import { Link } from 'react-router-dom';
// import appstore from '../../src/images/footer/appstore2.png';
// import LOGO from '../../src/images/footer/LOGO.svg';
// import silverLoan from '../images/footer/silverLoan.svg';


// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2} mt="1rem">
//       {children}
//     </Text>
//   );
// };

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

// export default function Footer() {

//     //code for show page froom top.
//     function scrollToTop() {
//       window.scrollTo({
//         top: 0,
//         behavior: 'instant',
//       });
//     }
  
//   return (
//     <>

//       <Box position={'relative'} height={'600px'} width={'80%'} margin='auto' h={'full'} overflow={'hidden'} padding={'20px'} mt="2rem">
//         <Image src={silverLoan}  boxShadow={'dark-lg'} mb={'2rem'}/>
//         <OurPartners />
//       </Box>
//       <Box
//         bg={useColorModeValue('#2358a0')}
//         color={useColorModeValue('#ffffff')}>
//         <Container as={Stack} maxW={'6xl'} py={10}>
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
//             <Stack>
//               <Text fontSize={"sm"} color={"white"} as={'b'}>Our Brands</Text>
//               <Box width={"400px"} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={"5px"}>
//                 <Image src={LOGO} height='200px' width='300px'  />
               
//               </Box>
//               <Stack direction={"row"}>
//                 <Image src={bcfiImage} width={"40px"} height={"25px"} />
//                 <Text fontSize={"sm"}>Accredited Company</Text>
//               </Stack>
//             </Stack>

//             <Stack marginLeft={"50px"}>
//               <ListHeader>Legal</ListHeader>
//               <Link to="/privacypolicy">
//                 <Box as="a" href={''} onClick={scrollToTop}>
//                   Privacy Policy
//                 </Box>
//               </Link>
//               <Link to="/refun&cancelationplicy">
//                 <Box as="a" href={''} onClick={scrollToTop}>
//                   Refund And Cancelation Policy
//                 </Box>
//               </Link>

//               <Link to='/term&condition'>
//                 <Box as="a" onClick={scrollToTop}>
//                   Terms & Conditions
//                 </Box>
//               </Link>
//             </Stack>

//             <Stack align={'flex-start'}>
//               <ListHeader>Follow us on</ListHeader>
//               <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
//                 <FaTwitter />
//                 <Text>Twitter</Text>
//               </Box>
//               <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
//                 <FaFacebook />
//                 <Text>Facebook</Text>
//               </Box>
//               <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
//                 <FaLinkedin />
//                 <Text>Linkedin</Text>
//               </Box>
//               <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
//                 <FaYoutube />
//                 <Text>YouTube</Text>
//               </Box>
//             </Stack>

//             <Stack align={'flex-start'}>
//               <ListHeader>Download our App</ListHeader>
//               <Image src={playStoredBaged} width={"200px"} height={"60px"} /><br />
//               <Image src={appstore} width={"200px"} height={"60px"} /><br />
//               <Text>All rights are reserved to HPNPAY</Text>
//             </Stack>
//           </SimpleGrid>
//         </Container>

//       </Box>
//     </>
//   );
// }


import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import OurPartners from './OurPartners';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin, } from 'react-icons/fa';
import bcfiImage from "../images/footer/bcfi-logo.png"
import playStoredBaged from "../images/footer/google-play.png"
import { Link } from 'react-router-dom';
import appstore from '../../src/images/footer/appstore2.png';
import LOGO from '../../src/images/footer/LOGO.svg';
import silverLoan from '../images/footer/silverLoan.svg';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} mt="1rem">
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {

    //code for show page froom top.
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
  
  return (
    <>

    

       
      {/* Section 1 */}
      <Box
        position={'relative'}
        height={{ base: 'auto', md: '250px' }}
        width={'80%'}
        margin='auto'
        h={'full'}
        overflow={'hidden'}
        padding={'20px'}
      >
        <Image src={silverLoan} boxShadow={'dark-lg'} mb={{ base: '1rem', md: '2rem' }} />
        {/* Assuming OurPartners is another component */}
        {/* <OurPartners /> */}
      </Box>

      {/* Section 2 */}
      <Box bg={'#2358a0'} color={'white'}>
        <Container as={Stack} maxW={'6xl'} py={{ base: 6, md: 10 }}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {/* Stack 1 */}
            <Stack>
              <Text fontSize={{ base: 'md', sm: 'lg' }} color={'white'} fontWeight={'bold'}>Our Brands</Text>
              <Box
                width={{ base: '100%', sm: '400px' }}
                display={'flex'}
                flexDirection={'row'}
                flexWrap={'wrap'}
                gap={{ base: '5px', md: '10px' }}
              >
                <Image src={LOGO} height={{ base: '150px', md: '200px' }} width={{ base: '100%', md: '300px' }} />
                {/* Add more logos as needed */}
              </Box>
              <Stack direction={'row'} align={'center'}>
                <Image src={bcfiImage} width={'40px'} height={'25px'} />
                <Text fontSize={{ base: 'sm', sm: 'md' }}>Accredited Company</Text>
              </Stack>
            </Stack>

            {/* Stack 2 */}
            <Stack marginLeft={{ base: '0', md: '50px' }}>
              <ListHeader>Legal</ListHeader>
              <List>
                <ListItem>
                  <Link as="a" href={'#'} onClick={scrollToTop} color={'white'}>
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as="a" href={'#'} onClick={scrollToTop} color={'white'}>
                    Refund And Cancelation Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as="a" href={'#'} onClick={scrollToTop} color={'white'}>
                    Terms & Conditions
                  </Link>
                </ListItem>
              </List>
            </Stack>

            {/* Stack 3 */}
            <Stack align={'flex-start'}>
              <ListHeader>Follow us on</ListHeader>
              <Flex direction={'column'} align={'flex-start'}>
                <Link as="a" to="https://twitter.com/hpnpay" display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={2} color={'white'}>
                <Flex direction={{base:"row",md:"row"}} gap="0.5rem" justifyContent="center" alignItems="center">
                  <FaTwitter />
                  <Text>Twitter</Text>
                </Flex>
                </Link>
                <Link as="a" to='https://www.facebook.com/hpnpay' display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={2} color={'white'}>
                <Flex direction={{base:"row",md:"row"}} gap="0.5rem" justifyContent="center" alignItems="center">
                   <FaFacebook />
                  <Text>Facebook</Text>
                  </Flex>
                </Link>
                <Link as="a" to="https://www.linkedin.com/company/hpnpay/" display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={2} color={'white'}>
                <Flex direction={{base:"row",md:"row"}} gap="0.5rem" justifyContent="center" alignItems="center">
                  <FaLinkedin />
                  <Text>Linkedin</Text>
                  </Flex>
                </Link>
                {/* <Link as="a" href={'#'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={2} color={'white'}>
                <Flex direction={{base:"row",md:"row"}} gap="0.5rem" justifyContent="center" alignItems="center">
                  <FaYoutube />
                  <Text>YouTube</Text>
                  </Flex>
                </Link> */}
              </Flex>
            </Stack>

            {/* Stack 4 */}
            <Stack align={'flex-start'}>
              <ListHeader>Download our App</ListHeader>
              <Image src={playStoredBaged} width={'200px'} height={'60px'} />
              <Image src={appstore} width={'200px'} height={'60px'} />
              <Text>All rights are reserved to HPNPAY</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>


    </>
  );
}
