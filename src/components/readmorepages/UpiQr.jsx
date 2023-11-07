import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Input,

} from "@chakra-ui/react";
const UpiQr = () => {
    return (
        <>
            <Box margin={'6rem'}>

                <Text textDecorationLine={'underline'} color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>

                    UPI QR: The Future of Digital Payments

                </Text>

                <Text fontSize={"1.3rem"} >
                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                        1. Universal Acceptance:
                    </Text>
                    No more confusion about which payment app your customer uses. <br />
                    Our single QR code is compatible across various payment apps, ensuring that you never miss out on a sale.<br />
                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                        2. Flexibility at its Best:
                    </Text>
                    Whether you're on the move or at your shop, UPI QR adapts to your needs. <br />
                    Set it as your mobile screen saver for instant payments during deliveries, or display it prominently in your shop for customers to scan and pay.<br />
                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                        3.Seamless Digital Payments:
                    </Text>
                    Long gone are the days of manual card swipes or handling cash. With UPI QR, payments are instant, secure, and completely digital. A simple scan is all it takes to complete a transaction.<br />
                    Step into the future with UPI QR and transform the way you handle business transactions. <br />
                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                        It's quick, it's easy, and it's the modern way to pay!
                    </Text>


                </Text>

            </Box>

        </>
    );
};

export default UpiQr;