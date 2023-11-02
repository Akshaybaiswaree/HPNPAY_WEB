// import { Center, Heading, Stack } from '@chakra-ui/react'
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";
import lap from "../../images/aboutUs_img/laptop.png";
import { useBreakpointValue } from '@chakra-ui/react';
import aeps from "../../images/aboutUs_img/cal.png"
import multi from "../../images/aboutUs_img/multi.png"
import payment from "../../images/aboutUs_img/payment.png"
import onboard from "../../images/aboutUs_img/onboarding.png"
import income from "../../images/aboutUs_img/income.png"
import partnerbenifit from "../../images/product_img/distributor_partner.png"

const Partnership = () => {
    return (
        <>
            <Stack width={"85%"} margin={"auto"}>
                <Stack>
                    <Heading>Unleash Your Digital Potential!</Heading>
                </Stack>
                <Flex marginTop={"30px"} justifyContent={"center"}>
                    <Box width={"100%"}>
                        <Stack>
                            <Image src={lap} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Seamless Business Setup:</Text>
                            <Text fontSize={"19px"}>- Go Digital**: Kickstart your distribution journey effortlessly from the comfort of your smartphone or laptop.</Text>
                        </Stack>
                        <Stack marginTop={"50px"}>
                            <Image src={multi} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Ultimate Flexibility:</Text>
                            <Text fontSize={"19px"}>Whether from a cozy corner in your home or your local shop, you're in control. Say goodbye to traditional hassles - no inventory, no vast warehouses, and zero manpower constraints.</Text>
                        </Stack>
                    </Box>
                    <Box width={"100%"} margin={'1rem'}>
                        {/* <Image src={partnerbenifit} /> */}
                        <Stack marginTop={"20px"}>
                            <Image src={payment} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Exceptional Earning Potential:</Text>
                            <Text fontSize={"19px"}>- Boost Your Income: With a network of just 5-7 retailers, watch your monthly earnings skyrocket to a whopping ₹40,000 to ₹60,000.</Text>
                        </Stack>
                        <Stack marginTop={"50px"}>
                            <Image src={payment} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Onboarding Made Easy:</Text>
                            <Text fontSize={"19px"}>- Simplicity at its Best: Our onboarding process is tailored for ease, ensuring a smooth entry for your entire network.</Text>
                        </Stack>
                    </Box>
                    <Box width={"100%"}>
                        <Stack >
                            <Image src={onboard} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Endless Opportunities:</Text>
                            <Text fontSize={"19px"}>Once your retailers are onboarded, a realm of services awaits. From our existing portfolio to the latest offerings, there's a continuous avenue for income.</Text>
                        </Stack>
                        <Stack marginTop={"50px"}>
                            <Image src={income} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}> Lifetime Rewards:</Text>
                            <Text fontSize={"19px"}>Consistent Returns: We believe in rewarding every effort. Earn industry-leading commissions on every transaction initiated by your retailer. A lifetime of financial rewards awaits!</Text>
                        </Stack>
                    </Box>
                </Flex>
            </Stack>


            <Stack direction={{ base: 'column', md: 'row' }} marginTop="80px">

                <Flex direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'space-evenly'}>
                        <Stack spacing={6} width={"40%"}>
                            <Heading fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    position={'relative'}
                                    color={"cyan.800"}
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
                                    Formula to earn more
                                </Text>


                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} wordSpacing={'2px'} color={'gray.500'}>
                                It is easy to earn 40,000 to 60,000 every month with just 5-7 retailers in your network. You earn everytime a customer does a financial transaction on your retail network.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                                <Button
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    See More
                                </Button>
                                {/* <Button rounded={'full'}>How It Works</Button> */}
                            </Stack>
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
            </Stack>


        </>
    );
};

export default Partnership;