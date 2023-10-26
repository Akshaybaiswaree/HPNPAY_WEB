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

const Partnership = () => {
    return (
        <>
            <Stack width={"85%"} margin={"auto"}>
                <Stack>
                    <Heading>Partnership Benefits</Heading>
                </Stack>
                <Flex marginTop={"30px"} justifyContent={"center"}>
                    <Box width={"100%"}>
                        <Stack>
                            <Image src={lap} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Set-up your digital distribution business from your phone or laptop</Text>
                            <Text fontSize={"19px"}>Operate from anywhere -- your home or shop. No inventory, no warehouse, no manpower required.</Text>
                        </Stack>
                        <Stack marginTop={"50px"}>
                            <Image src={multi} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Multi-service distribution from one platform</Text>
                            <Text fontSize={"19px"}>Offer Banking, Payments, Travel, Insurance, Bill Payments & Recharge services from one platform. You can offer any or all service.</Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Image src="https://paynearby.in/wp-content/uploads/2020/11/partnership-benefits.png" />
                        <Stack marginTop={"20px"}>
                            <Image src={payment} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Earn ₹40,000 to ₹60,000 per month</Text>
                            <Text fontSize={"19px"}>With just 5-7 retailers in your network you can easily add an extra ₹40000 to ₹ 60000 income per month. Onboard more retailers to earn more.</Text>
                        </Stack>
                    </Box>
                    <Box width={"100%"}>
                        <Stack >
                            <Image src={onboard} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>One time onboarding</Text>
                            <Text fontSize={"19px"}>Simple and easy on-boarding process for your network. Retailers once on-boarded can use any of our existing services or new products offered and keep adding to their income.</Text>
                        </Stack>
                        <Stack marginTop={"50px"}>
                            <Image src={income} width={"100px"} />
                            <Text fontSize={"20px"} fontWeight={"700"}>Lifetime Income</Text>
                            <Text fontSize={"19px"}>Earn best in industry commission on every transaction your retailer makes.</Text>
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