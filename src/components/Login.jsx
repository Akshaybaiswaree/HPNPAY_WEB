import React from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import LOGO from "../images/footer/LOGO.svg";
import googlePlayIcon from "../images/login/google-play.png"
import youtubeImage from "../images/login/youtube_4494485.png"
import loginPageImage from "../images/login/Secure login-bro.png"
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <>
            {/* <Box margin={"10px"} display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Image ml={'20px'} src={LOGO} width={'100px'} />

                </Box>
                <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
                    <Text fontSize={'sm'} as={'b'}>Register your Business</Text>
                    <Image src={googlePlayIcon} width={"100px"} height={"50px"} />
                    <Image src={youtubeImage} width={"100px"} height={"50px"} />
                </Box>
            </Box> */}
            <Box display={"flex"} margin={"4rem"}>
                <Flex marginTop={"80px"} justifyContent={"center"} alignItems={"center"}>
                    <Box>
                        <Image src={LOGO} width={"800px"} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"10px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"5rem"}
                    >
                        <Box marginRight={"10px"} width={"400px"}>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                One step towards success,
                                with HPNPAY One step towards success, move towards victory with HPNPAY.
                            </Text>
                            <Text fontSize={"24px"}>
                                <Text as={'b'}>
                                    HPNPAY के साथ सफलता की ओर एक कदम, <br />

                                    HPNPAY के साथ जीत की ओर बढ़ें।
                                </Text><br />
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Box display={"flex"} flexDirection={"column"} gap={"20px"} width={"400px"} height={"500px"} padding={"25px"} border={"2px solid #d2d2d2"} borderRadius={"10px"} marginTop={"100px"}>
                    <Text fontSize={"3xl"} as={'b'}>Partner Login</Text>
                    <Input type="tel" placeholder="Mobile Number*" />
                    <Input type="password" placeholder="Password*" />
                    <Button
                        size='md'
                        height='48px'
                        width='350px'
                        border='2px'
                        _hover={{ bg: 'blue.600' }}
                        background={'#156DB1'}
                        color={'white'}
                        alignSelf={"center"}
                    >
                        Login
                    </Button>
                    <Text fontSize={'md'} as={'b'} align={"center"}>FORGET PASSWORD</Text>
                </Box>
            </Box>

        </>
    );
}

export default Login;