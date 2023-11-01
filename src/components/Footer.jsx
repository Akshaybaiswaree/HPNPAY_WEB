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
} from '@chakra-ui/react';
import OurPartners from './OurPartners';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin, } from 'react-icons/fa';
import bcfiImage from "../images/footer/bcfi-logo.png"
import playStoredBaged from "../images/footer/google-play.png"
import { Link } from 'react-router-dom';
import appstore from '../../src/images/footer/appstore.png';
import LOGO from '../../src/images/footer/LOGO.svg';
import silverLoan from '../images/footer/silverLoan2.png';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
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
  return (
    <>

      <Box position={'relative'} height={'600px'} width={'80%'} margin='auto' h={'full'} overflow={'hidden'} padding={'20px'}>
        <Image src={silverLoan}  boxShadow={'dark-lg'} mb={'2rem'}/>
        <OurPartners />
      </Box>
      <Box
        bg={useColorModeValue('#2358a0')}
        color={useColorModeValue('#ffffff')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack>
              <Text fontSize={"sm"} color={"white"} as={'b'}>Our Brands</Text>
              <Box width={"400px"} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={"5px"}>
                <Image src={LOGO} height='200px' width='300px' />
               
              </Box>
              <Stack direction={"row"}>
                <Image src={bcfiImage} width={"40px"} height={"25px"} />
                <Text fontSize={"sm"}>Accredited Company</Text>
              </Stack>
            </Stack>

            <Stack marginLeft={"50px"}>
              <ListHeader>Legal</ListHeader>
              <Link to="/privacypolicy">
                <Box as="a" href={''}>
                  Privacy Policy
                </Box>
              </Link>
              <Link to="/refun&cancelationplicy">
                <Box as="a" href={''}>
                  Refund And Cancelation Policy
                </Box>
              </Link>

              <Link to='/term&condition'>
                <Box as="a" >
                  Terms & Conditions
                </Box>
              </Link>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Follow us on</ListHeader>
              <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <FaTwitter />
                <Text>Twitter</Text>
              </Box>
              <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <FaFacebook />
                <Text>Facebook</Text>
              </Box>
              <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <FaLinkedin />
                <Text>Linkedin</Text>
              </Box>
              <Box as="a" href={'#'} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <FaYoutube />
                <Text>YouTube</Text>
              </Box>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Download our App</ListHeader>
              <Image src={playStoredBaged} width={"200px"} height={"60px"} /><br />
              <Image src={appstore} width={"200px"} height={"60px"} /><br />
              <Text>All rights are reserved to HPNPAY</Text>
            </Stack>
          </SimpleGrid>
        </Container>

      </Box>
    </>
  );
}
