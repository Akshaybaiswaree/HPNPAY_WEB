'use client'

import React from 'react'
import '../retailer.css';
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
  Table, Tbody, Tr, Td,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import mobileImage from '../images/retailer_img/retailermobileservices.png';
import dass1 from '../images/retailer_img/banner_img7.jpeg';
import dass2 from '../images/retailer_img/banner_img8.png';
import dass3 from '../images/retailer_img/banner_img9.png';
import box4 from '../images/retailer_img/box4.jpeg';
import box2 from '../images/retailer_img/box2.jpeg';
import box3 from '../images/retailer_img/box3.jpeg';
import worldImage from '../images/retailer_img/worldmap.jpg';
import { Link } from 'react-router-dom';
import goldLoan from '../images/footer/goldLoan.png';

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
}

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
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
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const bg = useColorModeValue('blue.50', 'blue.900')
  const iconbg1 = useColorModeValue('yellow.100', 'yellow.900')
  const iconbg2 = useColorModeValue('green.100', 'green.900')
  const iconbg3 = useColorModeValue('purple.100', 'purple.900')
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Retailer',
      heading: 'One step towards success, move towards victory with HPNPAY.',
      heading2: "सफलता की ओर एक कदम, HPNPAY के साथ जीत की ओर बढ़ें|",
      text: "A national movement to uplift Bharat by giving every household easy access to DBT funds, digital payments and essential banking services at a store nearby.",
      text2: "Upgrade your shop. Be the one stop banking service provider.",
      text3: " No working capital required. Earn ₹2,00,000+ per year.",
      image: require('../images/retailer_img/banner img1,png.jpg')
    },
    {
      title: 'Distributor',
      heading: 'One step towards success, move towards victory with HPNPAY.',
      heading2: "सफलता की ओर एक कदम, HPNPAY के साथ जीत की ओर बढ़ें|",
      text: "A national movement to uplift Bharat by giving every household easy access to DBT funds, digital payments and essential banking services at a store nearby.",
      text2: "Upgrade your shop. Be the one stop banking service provider.",
      text3: " No working capital required. Earn ₹2,00,000+ per year.",
      image: require('../images/retailer_img/banner_img2.png')

    },
    {
      title: 'Individual/Self Help Groups',
      heading: 'One step towards success, move towards victory with HPNPAY.',
      heading2: "सफलता की ओर एक कदम, HPNPAY के साथ जीत की ओर बढ़ें|",
      text: "A national movement to uplift Bharat by giving every household easy access to DBT funds, digital payments and essential banking services at a store nearby.",
      text2: "Upgrade your shop. Be the one stop banking service provider.",
      text3: " No working capital required. Earn ₹2,00,000+ per year.",
      image: require('../images/retailer_img/banner_img3.jpg')

    },
  ]

  const smartCard = [
    {
      title: 'Retailer',
      text: "Make more out of your distribution business. Onboard your network to offer HPNPAY services and earn more than 18% per month on the money invested. No physical stock. No expenditure in store space, staff or physical transfer of goods. Every time a retailer in your network services a financial transaction, both of you make money. It is as simple as that.",
      text2: " Join over distributors. Earn more than you expect per month.",
      title2: 'Retail Categories',
      image: require('../images/aboutUs_img/aboutus_img2.png')
    },
    {
      title: 'Distributor',
      text: "Make more out of your distribution business. Onboard your network to offer HPNPAY services and earn more than 18% per month on the money invested. No physical stock. No expenditure in store space, staff or physical transfer of goods. Every time a retailer in your network services a financial transaction, both of you make money. It is as simple as that.",
      text2: " Join over distributors. Earn more than you expect per month.",
      title2: 'Distributor Categories',
      image: require('../images/retailer_img/distributer.png')
    },
    {
      title: 'Individual/Self Help Groups',
      text: "Make more out of your distribution business. Onboard your network to offer HPNPAY services and earn more than 18% per month on the money invested. No physical stock. No expenditure in store space, staff or physical transfer of goods. Every time a retailer in your network services a financial transaction, both of you make money. It is as simple as that.",
      text2: " Join over distributors. Earn more than you expect per month.",
      title2: 'Individual/Self Help Groups Categories:',
      image: require('../images/retailer_img/banner_img6.jpg')
    },
  ]

  const LinkItems = [
    { name: 'Digital Suite' },
    { name: 'Banking Services' },
    { name: 'Utility Payment Center' },
    { name: 'Insurance' },
    { name: 'Travel' },
    { name: 'Essential Services' },
    { name: 'Partner Services' },
    { name: 'Credit Services' },
  ]


  return (
    <Box position={'relative'} height={'600px'} width={'80%'} margin='auto' h={'full'} overflow={'hidden'} padding={'40px'}>
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

          <Container maxW={'5x1'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>

                <Heading color={'blue.700'} fontSize='4xl' font-weight="bold">{card.heading}</Heading>
                <Heading color={'blue.700'} fontSize='3xl' font-weight="bold">{card.heading2}</Heading>

                <Stack
                  spacing={4}
                >
                  <Text color={'gray.500'} fontSize={'lg'}>
                    {card.text}
                  </Text>
                  <Text color={'gray.500'} fontSize={'lg'}>
                    {card.text2}
                  </Text>
                  <Text color={'blue.500'} font-weight="bold" fontSize={'lg'}>
                    {card.text3}
                  </Text>
                </Stack>

                <Stack direction='row' spacing={4} align='center'>
                  <Link to='/income-calculator'>
                    <Button
                      size='md'
                      height='60px'
                      width='300px'
                      border='2px'
                      borderColor='blue.500'
                    >
                      Income Calculator
                    </Button>
                  </Link>
                  <Link to='/login'>
                    <Button
                      size='md'
                      height='60px'
                      width='300px'
                      // border='2px'
                      _hover={{ bg: 'blue.600' }}
                      background={'#156DB1'}
                      color={'white'}
                    >
                      Join HPNPAY
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={card.image}
                  objectFit={'cover'}
                />
              </Flex>
            </SimpleGrid>
          </Container>

        ))}
      </Slider>

      {/* Part 2- mobile dashboard and side bar */}

      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Image src={mobileImage} position='relative' left='-200px' height={'600px'} />
          <Text fontSize='6xl' color='#1c539e' position='absolute' left='750px' top='1000px' zIndex='10' as='b'>One App<br></br>Many Possibilities</Text>
        </div>
        <Text fontSize='xl' color='#5e646a'>A great earning potential with the opportunity to grow your<br></br> business with minimal one time investment and zero working<br></br> capital</Text>
      </Box>
      <Box>


      </Box>

      {/* part-3 Daas platform */}
      <Card padding={'30px'} borderradius={'20px'} bordershadow={'10px'} marginTop={'10px'} display={'flex'}>
        <Box className='main-component'>

          {/* <h1>India's largest Distribution as-a-service (DaaS) platform</h1> */}

          <Box className='text'>
            <Text fontSize='42px' color={'Blue.400'}>
              Expertise in BBPS and AEPS - HPNPay, Your Store's Best Companion
            </Text>
          </Box>
          <Box style={{ marginLeft: "2rem" }} className='images'>
            <Box>
              <Image ml={'20px'} src={dass1} width={'380px'} height={'290px'} />
              <p style={{ marginLeft: "5rem" }}>Banking Business Publishing</p>
            </Box>
            <Box>
              <Image ml={'20px'} src={dass2} width={'380px'} height={'290px'} />
              <p style={{ marginLeft: "4rem" }}>India's Best Banking syetem in Bharat</p>
            </Box>
            <Box>
              <Image ml={'20px'} src={dass3} width={'380px'} height={'290px'} />
              <p style={{ marginLeft: "5rem" }}>Banking Technology review </p>
            </Box>

          </Box>

        </Box>
      </Card>
      <Box position={'relative'} height={'600px'} width={'100%'} margin='auto' h={'full'} overflow={'hidden'} paddingTop={'20px'}>
        <Image src={goldLoan} />
      </Box>
      {/* part -4 smart solution for everyone */}
      <Box marginTop="50px">
        <Stack spacing={4}>

          <Heading color={'blue.700'} fontSize='5xl' font-weight="bold" textAlign="center">Smart Solutions for Everyone</Heading>

          <Stack spacing={4}>
            <Text color={'gray.500'} fontSize={'lg'} textAlign="center">
              Whether you are a retailer, distributor, individual or self help group, we have smart solutions for everyone.
            </Text>
          </Stack>
        </Stack>

        {smartCard.map((element, index) => (

          <Container maxW={'5x1'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

              <Flex>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={element.image}
                  objectFit={'cover'}
                />
              </Flex>

              <Stack spacing={4}>
                <Heading color={'blue.700'} fontSize='3xl' font-weight="bold">{element.title}</Heading>
                <Stack
                  spacing={4}
                >
                  <Text color={'gray.500'} fontSize={'lg'}>
                    {element.text}
                  </Text>
                  <Text color={'gray.500'} fontSize={'lg'}>
                    {element.text2}
                  </Text>

                </Stack>

                <Stack direction='row' spacing={4} align='center'>
                  <Link to='/income-calculator'>
                    <Button
                      size='md'
                      height='60px'
                      width='300px'
                      border='2px'
                      borderColor='blue.500'
                    >
                      Income Calculator
                    </Button>
                  </Link>
                  <Link to='/login'>
                    <Button
                      size='md'
                      height='60px'
                      width='300px'
                      // border='2px'
                      // background={'#82e368'}
                      _hover={{ bg: 'blue.600' }}
                      background={'#156DB1'}
                      color={'white'}
                    >
                      Join HPNPAY
                    </Button>
                  </Link>
                </Stack>
                <Heading color={'blue.700'} fontSize='2xl' font-weight="bold">{element.title2}</Heading>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>* Telecom</Td>
                      <Td>* Pharma</Td>
                    </Tr>
                    <Tr>
                      <Td>* Retail</Td>
                      <Td>* FMCG and many more</Td>
                    </Tr>
                  </Tbody>
                </Table>
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
          width={"1200px"}
          margin={"auto"}
          padding={"auto"}

        >
          <Image
            src={worldImage}
            width={"100vw"}
            opacity={0.5}
            height={"100%"}
            objectFit="cover"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          />
          <CardHeader
            position="absolute"
            top="20px"
            width="100%"
            textAlign="center"
            zIndex={1}
          >
            <Heading fontSize={'3rem'} color='blue.600' marginTop={'3rem'} size="lg" >
              Make financial services accessible to everyone, everywhere
            </Heading>
          </CardHeader>
          <CardBody
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-40%, -40%)"
          // zIndex={1}
          >
            <Box width={'800px'}>
              <Text fontSize="24px" textAlign='center'>
                Create a progressive society, where everyone has easy access to
                financial services, by building the largest agent banking network in
                the country.
              </Text>
            </Box>
          </CardBody>
          <CardFooter
            position="absolute"
            bottom="20px"
            left="50%"
            transform="translateX(-50%)"
            zIndex={1}
            width="100%"
          >
            <Stack
              direction={"row"}
              spacing={20}
              align="center"
              marginLeft={"100px"}
            >
              <Box borderLeft={"2px solid black"} paddingLeft='0.5rem'>
                <Text fontSize="lg">We Are Planning To Target </Text>
                <Text fontSize="4xl" as="b" >
                  50 Lakh Retailers
                </Text>
              </Box>
              <Box borderLeft={"2px solid black"} paddingLeft='0.5rem'>

                <Text fontSize="lg">Our future target to achive  </Text>
                <Text fontSize="4xl" as="b">
                  20cr customers
                </Text>
              </Box>
              <Box borderLeft={"2px solid black"} paddingLeft='0.5rem'>
                <Text fontSize="lg">We target to serve </Text>
                <Text fontSize="4xl" as="b">
                  20,000 PIN codes
                </Text>
              </Box>
              <Box borderLeft={"2px solid black"} paddingLeft='0.5rem'>
                <Text fontSize="lg">We plan to target Avg. financial transactions </Text>
                <Text fontSize="4xl" as="b">
                  20 Lakh per day
                </Text>
              </Box>
            </Stack>
          </CardFooter>
        </Card>
      </Box>

      {/* part-6 HPNPAY Advantage */}
      <Box marginTop="50px">
        <Stack spacing={4}>

          <Heading color={'blue.700'} fontSize='5xl' font-weight="bold" textAlign="center">HPNPAY Advantage</Heading>

          <Stack spacing={4}>
            <Text color={'gray.500'} fontSize={'lg'} textAlign="center">
              Upgrade your business with the leader in branchless banking
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={4} direction="row" align="center" justify="center" >
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box4} alt="Image 1" />
            <Text textAlign="center">Instant and easy onboarding</Text>
          </Box>
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box2} alt="Image 2" />
            <Text textAlign="center">Zero additional investment, no working capital requirement</Text>
          </Box>
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box3} alt="Image 3" />
            <Text textAlign="center">Time tested systems, with industry best success rates</Text>
          </Box>
        </Stack>
        <Stack spacing={4} direction="row" align="center" justify="center" >
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box3} alt="Image 1" />
            <Text textAlign="center">Instant and easy onboarding</Text>
          </Box>
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box2} alt="Image 2" />
            <Text textAlign="center">Zero additional investment, no working capital requirement</Text>
          </Box>
          <Box
            padding={4}
            margin={2}
            borderWidth={1}
            borderRadius='20px'
            boxShadow="md"
            align='center'
            height="200px" width="280px"
          >
            <Image src={box4} alt="Image 3" />
            <Text textAlign="center">Time tested systems, with industry best success rates</Text>
          </Box>
        </Stack>
      </Box>

    </Box>
  )
}