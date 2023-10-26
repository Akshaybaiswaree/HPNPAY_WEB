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
} from '@chakra-ui/react'

import reCaptchaImage from "../images/corporate_img/RecaptchaLogo.svg.png"
import digitalCash from "../images/corporate_img/digitize-cash-collection.png"
import increaseIndia from "../images/corporate_img/increase-market-penetration.png"
import digitalOrder from "../images/corporate_img/digitize-order-placement.png"
import manNetwork from "../images/corporate_img/manNetwok.png"
import bajajImage from "../images/corporate_img/Business mission-amico.png"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const Corporate = () => {
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
                            Multiple businesses of all sizes- from startups to large enterprises- use India’s largest agent network of 50,00,000 retailers to scale their business, optimize operational costs and develop new markets. High-end technology simplified for ease of use.
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
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                <Text fontSize='xl'>our solutions</Text>
                <Text fontSize='4xl'>Think Last Mile, Think HPNPAY</Text>
                <SimpleGrid spacing={40} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card width={"400px"} height={"500px"} border={"none"}>
                        <Image
                            src={digitalCash}
                            alt='digital-cash-image'
                            borderRadius='lg'
                            height={"250px"}
                            width={"200px"}
                        />
                        <CardHeader>
                            <Heading size='md'>Digitize cash collection</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Enable customers and collection agents to deposit cash at P...</Text>
                        </CardBody>
                        <CardFooter>
                            <Button color={'#1c539e'}>Learn more</Button>
                        </CardFooter>
                    </Card>
                    <Card width={"400px"} height={"500px"} border={"none"}>
                        <Image
                            src={increaseIndia}
                            alt='digital-india-image'
                            borderRadius='lg'
                            height={"250px"}
                            width={"200px"}
                        />
                        <CardHeader>
                            <Heading size='md'>Increase market penetration at the last mile</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Distribute sachetize content through HPNPAY’s last mile ...</Text>
                        </CardBody>
                        <CardFooter>
                            <Button color={'#1c539e'}>Learn more</Button>
                        </CardFooter>
                    </Card>
                    <Card width={"400px"} height={"500px"} border={"none"}>
                        <Image
                            src={digitalOrder}
                            alt='digital-order-image'
                            borderRadius='lg'
                            height={"250px"}
                            width={"200px"}
                        />
                        <CardHeader>
                            <Heading size='md'>Digitize order placement and payment</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Enable 3X more efficiency in order processing and cash flow...</Text>
                        </CardBody>
                        <CardFooter>
                            <Button color={'#1c539e'}>Learn more</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
                <Box margin={"50px"} display={"flex"} justifyContent={"center"}>
                    <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Veiw all Solutions</Button>
                </Box>
                <Box width={"1100px"} marginTop={"200px"} height={"600px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <Text fontSize='lg' as='b'>Why HPNPAY</Text><br />
                    <Text fontSize='4xl' as='b' color={'#1c539e'}>Technology driven, customer first approach to last mile connectivity and solution</Text>
                    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                        <Box width={"350px"} height={"300px"} >
                            <Image src={manNetwork} width={"50px"} height={"50px"} />
                            <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
                            <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
                        </Box>
                    </Box>
                    <Box margin={"20px"} display={"flex"} justifyContent={"center"}>
                        <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Veiw all Features</Button>
                    </Box>
                </Box>
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={5} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text color={'#1c539e'}>
                                    Testimonial
                                </Text>
                                <br />{' '}
                                <Text fontSize='lg'>
                                    - By Tanaji Khot
                                </Text>
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                National Lead - Banking relationship projects, Repayments Management and BRS
                            </Text>
                            <Image src={bajajImage} width={"400px"} />
                        </Stack>
                    </Flex>
                    <Flex p={5} flex={1} align={'center'} justify={'center'}>
                        <Text fontSize='lg'>The collaboration has also led to a high service deliverance rate in the cash collection vertical. HPNPAY’s client servicing team is fully equipped and resolves issues with a 95% success rate in less than 2 hours. With our partnership, we will be able to further enhance the customer experience and offer payment options both digitally and at physical outlets. Going forward we plan to add more services to digitize cash through HPNPAY retailers, I wish HPNPAY all the very best look forward to a mutually beneficial partnership.</Text>
                    </Flex>
                </Stack>
            </Container>
        </>
    );
};

export default Corporate;