import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import img1 from "../../images/aboutUs_img/home.jpg"
import img2 from "../../images/aboutUs_img/personal.avif"
import img3 from "../../images/aboutUs_img/corporate.jpeg"
import travel from "../../images/aboutUs_img/travel.webp"
import aeps from "../../images/aboutUs_img/aeps.png"
import Distributors from './Distributors';
import Partnership from './Partnership';
import goldLoan from '../../images/footer/goldinvestment.jpg';

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

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });


    return (
        <>
            <Box margin="50px">

                <Box
                    position={'relative'}
                    height={'35rem'}
                    width={'full'}
                    overflow={'hidden'}>
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
                    <IconButton
                        aria-label="left-arrow"
                        variant="ghost"
                        position="absolute"
                        left={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickPrev()}>
                        <BiLeftArrowAlt size="40px" />
                    </IconButton>
                    <IconButton
                        aria-label="right-arrow"
                        variant="ghost"
                        position="absolute"
                        right={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickNext()}>
                        <BiRightArrowAlt size="40px" />
                    </IconButton>
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>

                        <Flex direction={{ base: 'column', md: 'row' }}>
                            <Flex p={8} flex={1} align={'center'} justify={'space-evenly'}>
                                <Stack spacing={6} width={"40%"}>
                                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                        <Text
                                            as={'span'}
                                            position={'relative'}
                                            _after={{
                                                content: "''",
                                                width: 'full',
                                                height: '20%', // You can set the height directly if you want
                                                position: 'absolute',
                                                bottom: 1,
                                                left: 0,
                                                // bg: 'blue.400',
                                                zIndex: -1,
                                            }}>
                                            "HPNPay - Banking at Your Fingertips!"
                                        </Text>

                                    </Heading>
                                    <Text fontSize={'1.2rem'}>AEPS with HPNPay: Simplifying Your Transactions</Text>

                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                        - What's AEPS? Seamlessly bank using just your Aadhaar.<br />
                                        - Features:<br />
                                        - Simple: Transactions powered by Aadhaar.<br />
                                        - Secure: Backed by biometric authentication.<br />
                                        - Versatile: From balance checks to transfers.<br />
                                        - Use AEPS on HPNPay:<br />
                                        1. Choose AEPS.<br />
                                        2. Enter Aadhaar.<br />
                                        3. Pick transaction.<br />
                                        4. Authenticate and go.
                                    </Text>

                                </Stack>
                                <Box width={'40%'}>
                                    <Image
                                        alt={'Login Image'}
                                        objectFit={'cover'}
                                        width={'100%'}
                                        src={aeps}
                                    />
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex direction={{ base: 'column', md: 'row' }}>
                            <Flex p={8} flex={1} align={'center'} justify={'space-evenly'}>
                                <Stack spacing={6} width={"40%"}>
                                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                        <Text
                                            as={'span'}
                                            position={'relative'}
                                            _after={{
                                                content: "''",
                                                width: 'full',
                                                height: '20%', // You can set the height directly if you want
                                                position: 'absolute',
                                                bottom: 1,
                                                left: 0,
                                                bg: 'blue.400',
                                                zIndex: -1,
                                            }}>

                                            'PERSONAL LOAN'
                                        </Text>
                                    </Heading>
                                    <Text fontSize={'1.5rem'}>Empower Your Ambitions</Text>

                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                        * Your Path, Your Pace: In the dynamic realm of business, having the right resources at the right time can be a game-changer. Our personal loans are tailored to match your unique ambitions and needs. <br />
                                        * Fuel Your Dreams: Every entrepreneur has a vision. Bring yours to life with our specialized personal loan solutions, designed for the passionate and driven.<br />
                                        * Seamless Transactions: Our streamlined application process ensures that you get the funds you require without the usual hassle. Every moment counts in business, and we respect that.<br />
                                        * Trusted Partner: We're more than just a financial institution; we're your partner in success. With competitive rates and flexible repayment options, we're committed to supporting your journey from start to finish.<br />
                                    </Text>

                                </Stack>
                                <Box width={'40%'}>
                                    <Image
                                        alt={'Login Image'}
                                        objectFit={'cover'}
                                        width={'100%'}
                                        src={img2}
                                    />
                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                        *🔗 Discover More - Unlock the doors to endless possibilities. Propel your business forward, because when you succeed, we succeed.

                                    </Text>

                                </Box>
                            </Flex>
                        </Flex>

                        <Flex direction={{ base: 'column', md: 'row' }}>
                            <Flex p={8} flex={1} align={'center'} justify={'space-evenly'}>
                                <Stack spacing={6} width={"40%"}>
                                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                        <Text
                                            as={'span'}
                                            position={'relative'}
                                            _after={{
                                                content: "''",
                                                width: 'full',
                                                height: '20%', // You can set the height directly if you want
                                                position: 'absolute',
                                                bottom: 1,
                                                left: 0,
                                                bg: 'blue.400',
                                                zIndex: -1,
                                            }}>
                                            Grow Your Business, Grow Your Dreams
                                        </Text>
                                        <br />{' '}

                                    </Heading>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                        * Seize Every Chance: Business doesn't stop, and neither should your ambitions. Harness every available opportunity.<br />

                                        * Tailored Financial Support: Secure the essential funds seamlessly through our bespoke business-centric personal loan offerings.<br />

                                        🔗 Dive Deeper - Unravel the spectrum of possibilities that awaits your business. Propel forward, always. <br />
                                        🔗 Discover More - Unlock the doors to endless possibilities. Propel your business forward, because when you succeed, we succeed.
                                    </Text>

                                </Stack>
                                <Box width={'40%'}>
                                    <Image
                                        alt={'Login Image'}
                                        objectFit={'cover'}
                                        width={'100%'}
                                        src={img3}
                                    />
                                </Box>
                            </Flex>
                        </Flex>

                    </Slider>
                </Box>

                <Distributors />
                <Box height={'600px'} width={'100%'} margin='auto' h={'full'} overflow={'hidden'} paddingTop={'20px'} >
                    <Image src={goldLoan} width={'80rem'} margin='auto' boxShadow={'dark-lg'} />
                </Box>
                <Box width="90%" margin="auto" my={'50px'} border={'2px solid gray'} padding={"30px"} borderRadius={'30px'}>
                    <Text fontSize={'38px'} color={'cyan.700'} fontWeight={'500'} marginBottom={'20px'}>Join the HPNPAY Network - Expand Your Reach, Elevate Your Earnings</Text>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "30px", marginLeft: "30px" }}>
                        <strong >At HPNPAY, we're more than just a service provider; we're your gateway to growth in the bustling digital financial space. Partnering with us means you're not just getting access to services; you're stepping into a world of potential. Here’s how you benefit:</strong>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Seamless Integration: </strong> With HPNPAY, integrate swiftly with BBPS, AEPS, and DSA services, and start transacting with ease.&nbsp;

                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Broader Consumer Base:</strong> Tap into a diverse customer pool looking for convenient bill payments, banking services, and more, all under one roof.&nbsp;

                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>
                                Enhanced Revenue Streams:
                            </strong>
                            Leverage multiple services to amplify your income potential. More services mean more revenue.

                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Empowerment Through Technology: </strong> Get access to cutting-edge tech that empowers you and your retailers to serve customers efficiently.
                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Training & Support:</strong>Benefit from comprehensive training and continuous support to ensure you and your network are always ahead.

                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Trusted Compliance:</strong>Stay worry-free with a platform that’s compliant with the latest financial regulations and security standards.
                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Real-Time Tracking: </strong> Keep a finger on the pulse of your business with real-time reporting and tracking features.
                            Dedicated Assistance: Our dedicated help desk ensures that your queries and issues are resolved, keeping your business running smoothly.
                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}> Network Growth: </strong> As you grow your network of retailers, you're not just building business, you're enhancing communities.
                        </li>
                        <li style={{ "font-size": "18px" }}>
                            <strong style={{ "font-size": "20px" }}>Customer Satisfaction: </strong>With reliable services and support, delight your customers every day, which is the true measure of our combined success.
                        </li>
                    </ul>
                    <p>&nbsp;</p>

                </Box>
                <Box width={"90%"} margin={"auto"} mb={'30px'} >
                    <Text fontSize={'22px'}>Empower your retailers and give them an opportunity to increase their income and subsequently increase your income too.</Text>
                    <Text fontSize={'22px'} fontWeight={'700'}>Empowered Distributors = Empowered Retailers = Happy Customers</Text>
                </Box>
                <Box width={"90%"} margin={"auto"} my={'50px'} bg={useColorModeValue('gray.50', 'gray.800')} py={'30px'}>
                    <Flex justifyContent={"space-between"}>
                        <Box width={"40%"}>
                            <Text fontSize={'32px'} fontWeight={'700'} color={'cyan.700'}>Start your lifetime income business</Text>
                            <Text fontSize={'20px'} mt={'20px'}>Submit your details, our team will get in touch with you to start your Digital Distribution Business</Text>
                        </Box>
                        <Box width={"40%"} border={'1px solid gray.200'}>
                            <Flex
                                //   minH={'100vh'}
                                align={'center'}
                                justify={'center'}
                                bg={useColorModeValue('gray.200', 'gray.800')}
                                borderRadius={'20px'}
                                boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                            >
                                <Stack
                                    spacing={4}
                                    w={'full'}
                                    maxW={'md'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    rounded={'xl'}
                                    boxShadow={'lg'}
                                    p={6}
                                    my={12}>
                                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                                        Enter Your mobile No.
                                    </Heading>

                                    <FormControl id="email">
                                        <Input
                                            placeholder="Mobile No"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="email"
                                        />
                                    </FormControl>
                                    <Stack spacing={6}>
                                        <Button
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Verify Number
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};
export default DistributorBanner;