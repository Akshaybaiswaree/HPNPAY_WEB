'use client'

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
} from '@chakra-ui/react'

import reCaptchaImage from "../images/corporate_img/RecaptchaLogo.svg.png"
import digitalCash from "../images/corporate_img/corporate_cashcullection_img.jpg"
import increaseIndia from "../images/corporate_img/increasemarket.png"
import digitalOrder from "../images/corporate_img/corporate_digital_img.jpg"
import trustednetwork from "../images/corporate_img/trustednetwork.png"
import bajajImage from "../images/corporate_img/corporate_img1.jpg"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import goldLoan from '../images/footer/goldinvestment.jpg';
import infrastructure from "../images/corporate_img/infrastructure.svg.png";
import largestNetwork from "../images/corporate_img/largestnetwork.png";
import agentincorner from "../images/corporate_img/agentIncorner.png";
import communities from "../images/corporate_img/community.png";
import largestAgent from "../images/corporate_img/largetagent.png";
import retailer from "../images/corporate_img/largestRetailer.png";
import { Link } from 'react-router-dom'

const Corporate = () => {

        //code for show page froom top.
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'instant',
            });
        }


    return (
        <>

            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
                                    color: '#1c539e'
                                }}>
                                Last Mile Infrastructure
                            </Text>
                            <br />
                            <Text as={'span'} color={'#1c539e'}>
                                for Businesses
                            </Text>
                        </Heading>
                        <Text color={'black'}>
                            Multiple businesses of all sizes- from startups to large enterprises- use India’s largest agent network of  retailers to scale their business, optimize operational costs and develop new markets. High-end technology simplified for ease of use.
                        </Text>
                        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                            <Button width='150px' height='75px'
                                _hover={{ bg: 'blue.600' }}
                                background={'#156DB1'}
                                color={'white'}
                                position={'absoulte'}
                                left={"200px"}>Get in touch</Button>
                        </Stack>
                        <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'75px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
                            <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                            <Image src={reCaptchaImage} width={'50px'} height='50px' />
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>

                        <Box
                            position={'relative'}
                            height={'410px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}>
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={infrastructure}
                            />
                        </Box>
                    </Flex>
                </Stack>
                <Text fontSize='xl'>our solutions</Text>
                <Text fontSize='4xl'>Think Last Mile, Think HPNPAY</Text>
                <SimpleGrid
                    bg='gray.50'
                    columns={{ sm: 2, md: 3 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    color='gray.400'
                >
                    <Card maxW='sm' >
                        <Image
                            src={digitalCash}
                            alt='digital-cash-image'
                            borderRadius='lg'
                            height={"18rem"}
                            width={"25rem"}
                        />
                        <CardHeader>
                            <Heading size='md'>Digitize cash collection</Heading>
                            <br />
                        </CardHeader>
                        {/* <CardBody>
                            <Text>At HPNPAY, we've built a single, cohesive network that customers and partners alike can rely on. Trust is the cornerstone of our operations, with every member, from agents to retailers, upholding the highest standards of service and integrity. We bring together a myriad of services, delivering a seamless financial experience that solidifies our position as a leading trusted network in digital transactions.</Text>
                        </CardBody> */}
                        <CardFooter display={'flex'} justifyContent={'center'}>
                            <Link to={'/digitalcashcollection'}>
                                <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card maxW='sm' >
                        <Image
                            src={increaseIndia}
                            alt='digital-india-image'
                            borderRadius='lg'
                            height={"18rem"}
                            width={"25rem"}
                        />
                        <CardHeader>
                            <Heading size='md'>Increase market penetration at the last mile</Heading>
                        </CardHeader>

                        <CardFooter display={'flex'} justifyContent={'center'}>
                            <Link to={'/increasemarket'}>
                                <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card maxW='sm' >
                        <Image
                            src={digitalOrder}
                            alt='digital-order-image'
                            borderRadius='lg'
                            height={"18rem"}
                            width={"25rem"}
                        />
                        <CardHeader>
                            <Heading size='md'>Digitize order placement and payment</Heading>
                        </CardHeader>

                        <CardFooter display={'flex'} justifyContent={'center'}>
                            <Link to={'/digitalorder'}>
                                <Button variant='solid' colorScheme='blue' onClick={scrollToTop}>Learn more</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
                <Box margin={"50px"} display={"flex"} justifyContent={"center"}>
                    {/* <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Veiw all Solutions</Button> */}
                </Box>
                <Box position={'relative'} height={'600px'} width={'100%'} margin='auto' mb={'3rem'} h={'full'} overflow={'hidden'} boxShadow={'dark-lg'}>
                    <Image src={goldLoan} />
                </Box>
                <Center>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                        <Text fontSize='3xl' as='b'>Why HPNPAY</Text><br />
                        <Text fontSize='4xl' as='b' color={'#1c539e'}>Technology driven, customer first approach to last mile connectivity and solution</Text>
                        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            <Box width={"400px"} height={"600px"}>
                                <Image src={trustednetwork}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'>One Trusted Network:</Text>
                                <Text fontSize='xl'>At HPNPAY, we've built a single, cohesive network that customers and partners alike can rely on. Trust is the cornerstone of our operations, with every member, from agents to retailers, upholding the highest standards of service and integrity. We bring together a myriad of services, delivering a seamless financial experience that solidifies our position as a leading trusted network in digital transactions.</Text>
                            </Box>
                            <Box width={"400px"} height={"500px"} >
                                <Image src={largestNetwork}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'>Largest  Network:</Text>
                                <Text fontSize='xl'>"20,000+ Targets, One Trusted Network, Be Part of Our Financial Revolution!"</Text>
                            </Box>
                            <Box width={"400px"} height={"500px"} >
                                <Image src={agentincorner}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'> Agent in Every Corner: </Text>
                                <Text fontSize='xl'>Your Local Agent in Every Corner, We're on a Mission to 20,000+ PIN Codes!"</Text>
                            </Box>
                            <Box width={"400px"} height={"500px"} >
                                <Image src={communities}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'>Empowering Communities: </Text>
                                <Text fontSize='xl'>Empowering 20,000+ Communities Join Our Nationwide Network of Trust!"</Text>
                            </Box>
                            <Box width={"400px"} height={"500px"} >
                                <Image src={largestAgent}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                                <Text fontSize='xl'>With our trusted retailers We expecting, 20000 Pin Codes Is Our Traget, harness the power of the largest agent network in the country.</Text>
                            </Box>
                            <Box width={"400px"} height={"500px"} >
                                <Image src={retailer}
                                    borderRadius='lg'
                                    height={"18rem"}
                                    width={"25rem"} />
                                <Text fontSize='2xl' as='b'>Largest Retailers Network:</Text>
                                <Text fontSize='xl'>With our trusted retailers We expecting, 20000 Pin Codes Is Our Traget, harness the power of the largest agent network in the country.</Text>
                            </Box>
                        </Box>

                    </Box>
                </Center>

            </Container>
        </>
    );
};

export default Corporate;