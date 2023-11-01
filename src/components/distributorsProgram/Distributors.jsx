import React from 'react';

import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Partnership from "./Partnership";
import revenue from "../../images/product_img/distributor_revenue.png";
import { Link } from 'react-router-dom';

export default function Distributors() {
    return (
        <>
            <Stack height={"80vh"} direction={{ base: "column", md: "row" }}>
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={6} w={"full"} maxW={"lg"}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            <Text as={"span"} color={"#052b60"}>
                                Earn Upto 18% return per month
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                            Get High returns on money invested in HPNPAY distribution
                            business
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                            No Physical stock required. No expenditure in store space. No staff
                            or physical transfer of goods.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"#0c4696"}>
                            Make more money from your money
                        </Text>
                        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                            <Link to='/distributor-income-calculator'>
                                <Button
                                    size='md'
                                    height='60px'
                                    width='250px'
                                    border='2px'
                                    color={"blue.400"}
                                    padding={"25px"}

                                >
                                    Income Calculator
                                </Button>
                            </Link>
                            <Link to='/login'>
                                <Button
                                    size='md'
                                    height='60px'
                                    width='250px'
                                    border='2px'
                                    bg={"green.400"}
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    padding={"25px"}>Join NPNPAY</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        margin={"auto"}
                        height={"50vh"}
                        alt={"Login Image"}
                        objectFit={"cover"}
                        src={revenue}
                    />
                </Flex>
            </Stack>
            <Partnership />
        </>
    );
}