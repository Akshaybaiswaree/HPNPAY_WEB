import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Box,
    Center,
} from "@chakra-ui/react";
import photo from "../images/aboutUs_img/photo.png"
import banner from "../images/aboutUs_img/banner.jpg"
import unstopable from "../images/aboutUs_img/Finance leaders-rafiki.png"

export default function AboutUs() {

    return (
        <>
            <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={6} w={"full"} maxW={"lg"}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            <Text color={"#052b60"} as={"span"}>
                            Retailer To Retailer Fund Transfer : Zidh Agge Badne Ki 
                            </Text>{" "}
                        </Heading>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            A strong determination to make India a financially inclusive
                            nation is the driving force behind all our initiatives.{" "}
                            <b>
                                We are determined to provide easy access to financial services
                                to everyone, everywhere.
                            </b>
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            In this journey, we are joined by our committed retail community,
                            our partners, who form the force multiplier to our initiatives.{" "}
                            <b>
                                We are determined to ensure our retail partners grow and prosper
                                in this digital age and together we contribute to a stronger
                                India.
                            </b>
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"#0c4696"}>
                            This determination to create a digitally forward and financially
                            inclusive India forms the cornerstone of our brand DNA.
                        </Text>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={"Login Image"}
                        objectFit={"cover"}
                        src={unstopable}
                    />
                </Flex>
            </Stack>

            <Stack direction={{ base: "column", md: "row" }} width={"90%"} margin={'auto'}>
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={6}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            <Text color={"#0c4696"} as={"span"}>
                                About Us
                            </Text>{" "}
                        </Heading>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            Hannanth Nidhi Pvt. Ltd. is a DIPP Certified Fintech Company
                            registered under The Startup India program of Government of India,
                            set up in April 2019 by a team of professionals with experience in
                            Digital Banking & Payments industry. The team works on deep
                            insights and understanding of payment and transaction technology
                            space.
                        </Text>
                        <Flex flex={1} justifyContent={"center"}>
                            <Image
                                alt={"Login Image"}
                                objectFit={"cover"}
                                width={"80%"}
                                src={banner}
                            />
                        </Flex>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            Hannanth Nidhi Bank is a premier financial institution dedicated to providing a wide range of banking and financial services that empower individuals, businesses, and communities to achieve their financial goals. With a steadfast commitment to excellence, innovation, and customer satisfaction, we have built a reputation for trustworthiness and reliability in the financial industry.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            At Hannanth Nidhi Bank, we are more than just a financial institution. We are a partner in your financial journey, dedicated to safeguarding and growing your wealth. With a steadfast commitment to our core values, we are your trusted financial partner, providing financial stability and prosperity for individuals and businesses alike.
                        </Text>
                    </Stack>
                </Flex>
            </Stack>

            <Stack>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                >
                    Meet Our Team
                </Heading>
                <Center py={6} gap={10}>
                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Member 1
                                </Heading>
                                <Text color={"gray.500"}>Founder, MD & CEO</Text>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Member 2
                                </Heading>
                                <Text color={"gray.500"}>Co-founder</Text>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Member 3
                                </Heading>
                                <Text color={"gray.500"}>Co-founder & Director</Text>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>
                </Center>
            </Stack>

            <Stack>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                >
                    Independent Directors
                </Heading>
                <Center py={6} gap={5}>
                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Director Name
                                </Heading>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Director Name
                                </Heading>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>
                </Center>
            </Stack>

            <Stack>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                >
                    Advisory
                </Heading>
                <Center py={6} gap={10}>
                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Advisory Name
                                </Heading>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Advisory Name
                                </Heading>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        maxW={"270px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                    >
                        <Image
                            h={"250px"}
                            w={"full"}
                            src={photo}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Advisory Name
                                </Heading>
                            </Stack>

                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#1c539e", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>
                </Center>
            </Stack>

            <Stack >
                <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                    mt={'50px'}
                >
                    Let’s together create “India’s Largest Branchless Banking Network”
                </Heading>

                <Stack
                    maxW={"40%"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                    mt={'20px'}
                    ml={'450px'}
                >
                    <Image
                        //   h={"400px"}
                        w={"100%"}
                        src={
                            "https://paynearby.in/wp-content/uploads/2020/12/vision.jpg"
                        }
                        objectFit="cover"
                        alt="#"
                    />

                    <Box p={6}>
                        <Stack spacing={0} align={"start"} mb={5}>
                            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                color={"#0c4696"}
                                textAlign={"start"} fontFamily={"body"}>
                                Vision
                            </Heading>
                            <Text fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
                                color={"black"}
                                textAlign={"start"} fontWeight={"bold"} > Make financial services available to everyone, everywhere</Text>
                        </Stack>
                    </Box>
                </Stack>

            </Stack>
        </>
    );
}