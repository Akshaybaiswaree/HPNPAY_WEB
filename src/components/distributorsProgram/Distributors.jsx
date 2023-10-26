import React from 'react';

import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Partnership from "./Partnership";

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
                            Get High returns on money invested in PayNearby distribution
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
                            <Button
                                //   rounded={"full"}
                                //   bg={"blue.400"}
                                color={"blue.400"}
                                //   _hover={{
                                //     bg: "blue.500",
                                //   }}
                                padding={"25px"}
                                border={"1px"}
                            >
                                Income Calculator
                            </Button>
                            <Button bg={"green.400"} color={"white"} padding={"25px"}>Join PaynearBy</Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        margin={"auto"}
                        height={"70vh"}
                        alt={"Login Image"}
                        objectFit={"cover"}
                        src={"https://paynearby.in/wp-content/uploads/2020/12/product.png"}
                    />
                </Flex>
            </Stack>
            <Partnership />
        </>
    );
}