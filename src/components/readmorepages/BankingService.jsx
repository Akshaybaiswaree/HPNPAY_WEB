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

const BankingService = () => {
    return (
        <>
            <Box margin={{base:"2rem",md:'6rem'}} align="justify">

                <Text textDecorationLine={'underline'}  color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                    Banking Services
                </Text>
                <Text fontSize={"1.3rem"} >
                    1. it's the very foundation of our ethos. With HPNPay, you get access to a robust suite of digital banking services that cater to your every need, without the necessity for working capital.<br />

                    2. Imagine being able to offer an array of banking facilities, right from your shop. Whether it's facilitating immediate cash withdrawals, seamless money transfers, secure cash deposits, or introducing your customers to savings and insurance options—HPNPay has got it all. Looking to extend loans? We've got that covered too.<br />
                    3. What's more, with HPNPay, you're banking on a platform that's backed by rigorous standards.  we maintain stringent security protocols. This is not just about compliance; it's our way of ensuring that every transaction you undertake is cloaked in multiple layers of security. The proof? A staggering success ratio of over 99.9% that's been tested over time.<br />
                    
                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"} marginTop={'2rem'} marginBottom={'2rem'}>

                    "Choose HPNPay: Where trust meets digital innovation."
                    </Text>

                </Text>
                <Box>
                    <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                        AePS (Aadhaar enabled Payment Services)
                    </Text>

                    <Text fontSize={"1.3rem"}>
                        Capitalize on our robust and time-honored platform that boasts a stellar 99.9% success rate.<br />

                        Empower Your Customers: Seamlessly assist customers in withdrawing Direct Benefit Transfer (DBT), crucial government relief funds, and other monetary assets directly from their bank accounts.<br />
                        High-Tech Authentication: Leveraging the power of biometric verification through Aadhaar's fingerprint technology.
                    </Text>
                </Box>

                <Box>
                    <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                        Micro ATM Extravaganza Universal Banking Support:{" "}
                    </Text>
                    <Text fontSize={"1.3rem"}>
                        A remarkable capability to offer cash withdrawal services, integrating effortlessly with debit cards across a vast network of over 1000+ banks.
                    </Text>
                </Box>

                <Box>
                    <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                        Real-time Money Transfer Flawless Transactions:{" "}
                    </Text>
                    <Text fontSize={"1.3rem"}>


                        Boundless Possibilities: Facilitate your customers in transmitting money from corner to corner within India, instantly, 24/7. An added perk? They can conveniently deposit cash into their accounts too.

                        Revolutionize your financial game and offer your customers unmatched conveniences!
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default BankingService;