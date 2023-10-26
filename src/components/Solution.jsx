import React from 'react'
import { Stack, HStack, VStack, Flex, useBreakpointValue, InputGroup, InputLeftElement, Input, Checkbox } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Solution1 from "../images/solution_img/Solution1.png"
import Solution2 from "../images/solution_img/Solution2.png"
import Solution3 from "../images/solution_img/Solution3.png"
import Solution4 from "../images/solution_img/Download-rafiki.png"
import reCaptchaImage from "../images/solution_img/reCaptchaImage.png"
import {
    Select,
    FormLabel,
    FormControl,
    Box,
    Image,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,

} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'

const Solution = () => {

    return (
        <Box paddingTop={"2rem"} fontSize={"1.5rem"}>
            <Box style={{ display: "flex", justifyContent: 'space-around' }} className='main=solution-component'>
                <Box style={{ flexBasis: "50%" }}>
                    <h1 style={{ color: "#052B60", fontWeight: "bold", fontSize: "2rem" }}>Our <br></br> Solutions</h1>
                    <p>Think last mile. Think PayNearby. From optimizing
                        cash collection processes to enabling market
                        expansion, businesses of all sizes use PayNearby’s
                        proprietary last mile technology and deeply entrenched retail network of 50,00,000+
                        retailers to grow their business</p>
                </Box>
                <Box style={{ background: "#43D5B7", borderRadius: "15px", padding: "2px" }} width={"40%"} height={"310px"} fontSize={"2rem"} >
                    <FormControl padding={"2rem"}>
                        <FormLabel style={{ marginTop: "4px", fontSize: "25px" }}>Choose the right solution by Industry Type</FormLabel>
                        <Select style={{ background: "white", height: "3.5rem", }} placeholder='Search by Industy'>
                            <option>chemica/fertiliser</option>
                            <option>Ecommerce</option>
                            <option>FMCG & pharma</option>
                            <option> Food Delivery</option>
                            <option>Insurance</option>
                            <option>Network and Marketing</option>
                            <option>OTT</option>
                            <option>Payment and Finance</option>
                        </Select>
                        <Select style={{ background: "white", height: "3.5rem", marginTop: "1.3rem" }} placeholder='Select Solution'>

                            {/* <option>Select Solution</option>margin
              */}
                        </Select>
                        <Button style={{ background: "#278DA6", marginTop: "1.5rem" }}>Submit</Button>
                    </FormControl>
                </Box>
            </Box>
            <Card style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} width={"90%"} margin={"auto"} marginTop={"2rem"} boxShadow={"none"}>
                {/* <Box style={{display:"flex", justifyContent:"space-between"}}> */}

                <CardBody>
                    {/* <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        /> */}
                    <Image ml={'20px'} src={Solution1} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Digitize cash collection
                        </Heading>
                        <Text>
                            Enable customers and collection agents to deposit cash at PayNearby’s extensive last mile network and optimize collection cost by upto 50%
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Learn More
                        </Text>
                    </Stack>
                </CardBody>


                <CardBody>
                    {/* <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        /> */}
                    <Image ml={'20px'} src={Solution2} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Increase market penetration at the last mile
                        </Heading>
                        <Text>
                            Distribute sachetize content through PayNearby’s last mile network and enable digitization of micro cash exchange to digically reach 400 million+ last mile audience
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Learn More
                        </Text>
                    </Stack>
                </CardBody>



                <CardBody>
                    {/* <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        /> */}
                    <Image ml={'20px'} src={Solution3} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Digitize order placement and payment
                        </Heading>
                        <Text>
                            Enable 3X more efficiency in order processing and cash flow by digitizing order placement and payment across the retail value chain
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Learn More
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                margin={"-0.5px"}

                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>

                            </Text>

                            <Text color={'blue.400'} as={'span'} >
                                Download HPNPAY now
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            Use PayNearby app & take charge of all your transactions to grow your business


                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                      
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <PhoneIcon color='gray.300' />
                                </InputLeftElement>
                                <Input type='tel' placeholder='Phone number' />
                            </InputGroup>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>

                    <Image width={"90%"} height={"65%"} marginTop={"3rem"} ml={'10px'} src={Solution4} />


                </Flex>
            </Stack>
            <Stack marginBottom={"1rem"} marginTop={"-220px"} marginLeft={"7.8rem"} border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'50px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
                <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                <Image src={reCaptchaImage} width={'50px'} height='50px' />
            </Stack>
            <Button margin={"7.8rem"} style={{ background: "#6FBE5A", marginTop: "1rem" }}>Get app link</Button>
        </Box>
    
        // </Box>

    )
};

export default Solution;