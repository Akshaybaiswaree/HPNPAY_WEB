import React, { useState } from "react";
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
    ModalOverlay,
    Lorem,
    ModalBody,
    ModalHeader,
    ModalContent,
    Modal,
    ModalCloseButton,
    Accordion,
    AccordionPanel,
    AccordionIcon,
    AccordionItem,
    AccordionButton,
} from "@chakra-ui/react";
import shwetaimg from "../images/aboutUs_img/swetagandhi.png.jpeg"
import madanranga from "../images/aboutUs_img/madanmohanranga.png.jpeg";
import sandeep from "../images/aboutUs_img/sandeepjain.png.jpeg";
import rameshmeena from "../images/aboutUs_img/rameshmeena.png.jpeg";
import banner from "../images/aboutUs_img/banner.jpg"
import unstopable from "../images/aboutUs_img/aboutus_img2.png"
import goldLoan from '../images/footer/goldinvestment.jpg';
import anand from '../images/aboutUs_img/anand.png';
import gaurav from '../images/aboutUs_img/gaurav.png';
import { Link } from "react-router-dom";


export default function AboutUs() {

    //code for show page froom top.
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);

    const [isOpen3, setIsOpen3] = useState(false);
    const openModal3 = () => setIsOpen3(true);
    const closeModal3 = () => setIsOpen3(false);


    return (
        <>
          

            <Stack direction={{ base: "column", md: "row" }} width={"100%"} >
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={6}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            <Text color={"#0c4696"} as={"span"}>
                                About Hannanth Digital India Private Limited
                            </Text>{" "}
                        </Heading>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} fontWeight={"700"}>
                                Embark on a Journey of Visionary Leadership and Technological Prowess
                            </Text>

                            Welcome to the digital domicile where vision meets innovation—Hannanth Digital India Private Limited. Our inception is a tale of unyielding dedication and futuristic thinking, envisioned and brought to fruition by the illustrious Anand Gandhi—our Founder, Managing Director, and CEO—a luminary hailing from the historic sands of Bikaner, Rajasthan, born in the year 1979.
                        </Text>
                        <Flex flex={1} justifyContent={"center"}>
                            <Image
                            className=""
                                alt={"Login Image"}
                                objectFit={"cover"}
                                width={"80%"}
                                src={banner}
                            />
                        </Flex>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                                Rooted in Tradition, Branching into Innovation<br />
                            </Text>

                            From the colorful avenues of Bikaner, Anand Gandhi’s entrepreneurial odyssey commenced in the heart of Rajasthan—Jaipur. In 1997, the AR Trading Company was more than just a business venture; it was a promise to excellence, serving the local bodies like Nagar Nigam and Nagar Palika, forging a legacy of trust and bespoke service.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                                Our Petrochemical Pinnacle

                            </Text>

                            Parallelly, in 1997, the establishment of Hannanth Petro Chem in the bustling lanes of Bikaner marked our maiden voyage into the petrochemical realm. Through sheer tenacity and strategic finesse, Hannanth Petro Chem morphed into Hannanth Petro Chem Private Limited in 2012, embracing the intricate dance of international imports and showcasing our prowess in global business dynamics.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                Logistical Leaps
                            </Text>

                            The advent of Hannanth Logistic Company in 2018 was a testament to our expansive vision, introducing a fleet force of over 40 mighty vehicles from 10 to 14 wheels. This strategic expansion wasn't just about covering miles; it was about connecting businesses, facilitating growth, and delivering promises with efficiency and punctuality.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                Fintech Fusion—The Digital Renaissance
                            </Text>

                            As the calendar flipped to 2023, Hannanth burgeoned with the birth of twin titans in the fintech sphere—Hannanth Petrons Nidhi Limited and Hannanth Digital India Private Limited. United under the banner of HPNPAY, we are not just partaking in the fintech evolution; we are pioneering it. HPNPAY is more than a brand; it's a digital revolution, offering a finessed financial interface that resonates with the pulse of the modern user.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                Our Ethos—Elegance in Innovation
                            </Text>

                            At Hannanth, we sculpt our businesses to be not just enterprises, but ecosystems of reliability and innovation. Our foray into fintech is etched with the elegance of cutting-edge solutions, wrapped in the warmth of customer-centricity, and delivered with the signature Hannanth stamp of trust.
                        </Text>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            We stand at the confluence of heritage and horizon, tradition and technology. Join us as we steer into a future where every transaction is a step towards transformation.<br />

                            Step into the World of Hannanth Digital India Private Limited—Where Future is Familiar.
                        </Text>
                        <Link to={'/moreaboutus'}>
                            <Button fontSize={"1.3rem"} as="span" flex='1' textAlign='left' onClick={scrollToTop} colorScheme="blue">
                                Read more
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Stack>
           
            {/* our team */}
            <Stack marginTop={'1rem'}>
               
                <Heading
                    fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                >
                    Meet Our Team
                </Heading>
                <div className="anand-shweta">
                    <Center py={6} gap={10} display={'flex'} flexDirection={['column', 'row']} >
                        <div>
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
                                    src={anand}
                                    objectFit="cover"
                                    alt="#"
                                />

                                <Box p={6}>
                                       
                                    <Stack spacing={0} align={"center"} mb={5}>
                                        <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                            Anand Gandhi
                                        </Heading>
                                        <Text color={"gray.500"}>Founder & CEO</Text>
                                    </Stack>
                                    <Link to="/founder&ceo">
                                        <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                                    </Link>

                                </Box>
                            </Box>
                        </div>

                        <div>


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
                                    src={shwetaimg}
                                    objectFit="cover"
                                    alt="#"
                                />

                                <Box p={6}>
                                    <Stack spacing={0} align={"center"} mb={5}>
                                        <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                            Shweta Gandhi
                                        </Heading>
                                        <Text color={"gray.500"}>The Grace at Hannanth Group</Text>
                                    </Stack>
                                    <Link to="/ms.gandhi">

                                    <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                                    </Link>

                                </Box>
                            </Box>
                        </div>
                    </Center>
                </div>
              
            </Stack>
            {/* our advicers */}
            <Stack
                className="meetouradvisor"
                marginTop={'1rem'}>
                <Heading
                    fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                >
                    Meet Our Advisors
                </Heading>
                <Center py={6} gap={10} display={'flex'} flexDirection={['column', 'row']} justifyContent={'center'}>
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
                            src={madanranga}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Madan M. Ranga
                                </Heading>
                                <Text color={"gray.500"}>Advisor  </Text>
                            </Stack>
                            <Link to="/advicor_one">

                            <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                            </Link>

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
                            src={gaurav}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Gaurav Vijay
                                </Heading>
                                <Text color={"gray.500"}>Advisor</Text>
                            </Stack>
                            <Link to="/advicor_two">
                            <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                            </Link>
                            <Modal isOpen={isOpen3} onClose={closeModal3} size='6xl'>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{' Gaurav Vijay - The Director of  Hannanth Digital India Private Limited'}</ModalHeader>
                                    <ModalCloseButton />
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>
                                            <Text color={'black.900'} fontWeight={'700'}>
                                                "Director- Leading Innovation and Financial Solutions"
                                            </Text>
                                            Welcome to the digital domicile where vision meets innovation—Hannanth Digital India Private Limited. Our inception is a tale of unyielding dedication and futuristic thinking, envisioned and brought to fruition by the illustrious  Gaurav Vijay —our Director hailing from the historic sands of Bikaner, Rajasthan.<br /><br />

                                            <Text color={'black.900'} fontWeight={'700'}>

                                            </Text>

                                        </Text>

                                    </Box>
                                    <ModalBody>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
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
                            src={sandeep}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Sandeep Jain
                                </Heading>
                                <Text color={"gray.500"}>Advisor  </Text>
                            </Stack>
                            <Link to="/advicor_three">

                            <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                            </Link>
                            <Modal isOpen={isOpen3} onClose={closeModal3} size='6xl'>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{' Gaurav Vijay - The Director of  Hannanth Digital India Private Limited'}</ModalHeader>
                                    <ModalCloseButton />
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>
                                            <Text color={'black.900'} fontWeight={'700'}>
                                                "Director- Leading Innovation and Financial Solutions"
                                            </Text>
                                            Welcome to the digital domicile where vision meets innovation—Hannanth Digital India Private Limited. Our inception is a tale of unyielding dedication and futuristic thinking, envisioned and brought to fruition by the illustrious  Gaurav Vijay —our Director hailing from the historic sands of Bikaner, Rajasthan.<br /><br />

                                            <Text color={'black.900'} fontWeight={'700'}>

                                            </Text>

                                        </Text>

                                    </Box>
                                    <ModalBody>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
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
                            src={rameshmeena}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Ramesh Meena
                                </Heading>
                                <Text color={"gray.500"}>Advisor  </Text>
                            </Stack>
                            <Link to="/advicor_four">

                            <Button
                                            onClick={scrollToTop}
                                            w={"full"}
                                            mt={8}
                                            rounded={"md"}
                                            colorScheme="blue"
                                        >
                                            Read More
                                        </Button>
                            </Link>
                            <Modal isOpen={isOpen2} onClose={closeModal2} size='6xl'>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{' Shweta Gandhi – The Quintessence of Grace and Grit at Hannanth Group'}</ModalHeader>
                                    <ModalCloseButton />
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>

                                            <Text color={'black.900'} fontWeight={'700'}>

                                                A Partnership that Propels Prosperity
                                            </Text>
                                            Welcoming the esteemed Shweta Gandhi, whose presence in the Hannanth Group’s echelons has been nothing short of transformative. Married to Anand Gandhi in the pivotal year of 2007, she is not only his partner in life but also a pivotal player in the group’s continued prosperity.<br /><br />

                                            <Text color={'black.900'} fontWeight={'700'}>
                                                A Scholarly Foundation for a Formidable Future
                                            </Text>
                                            Shweta's educational odyssey at Delhi University culminated with a degree in Commerce, equipping her with a robust foundation in business principles and economic strategies. This scholarly pursuit carved the way for her to emerge as a beacon of insight within the Hannanth Group’s strategic decision-making.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Empowering the Enterprise with Elegance
                                            </Text>

                                            Her presence at Hannanth Group resonates with empowerment and elegance, intertwining with Anand Gandhi's vision to cultivate a corporate culture that thrives on mutual respect, innovative synergy, and unwavering commitment to excellence.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Custodian of Corporate and Family Legacy
                                            </Text>

                                            Embracing her role as both a matriarch and a business savant, Shweta has been instrumental in maintaining the equilibrium between the warmth of family values and the exigencies of the business world. Her adeptness in managing this balance has been a cornerstone of the group’s resilience and adaptability.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                An Inspirational Mosaic of Roles

                                            </Text>

                                            Shweta Gandhi is a tapestry of roles—a nurturing force, a strategic oracle, and a luminary guiding Hannanth Group towards new horizons. Her contributions, both pronounced and subtle, have been indispensable in scripting the growth story of Hannanth Group.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                An Ode to the Woman Who is the Group's Touchstone

                                            </Text>

                                            At Hannanth Group, Shweta Gandhi is celebrated not just on International Women’s Day but every day, for embodying the strength, wisdom, and grace that propels us toward a future replete with innovation and success.<br /><br />

                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Shweta Gandhi—The Unsung Heroine, The Unstoppable Force, The Undeniable Support System of Hannanth Group.
                                            </Text>
                                        </Text>

                                    </Box>
                                    <ModalBody>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Box>
                </Center>
            </Stack>

            {/* about us */}
          



            {/* <Stack >
                <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                    mt={'50px'}
                >
                    Let’s together create “India’s Largest Branchless Banking Network”
                </Heading>

                <Stack
                margin={'auto'}
                    className="vision"
                    maxW={"40%"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                    mt={'20px'}
                // ml={'450px'}
                >
                    <Image
                    margin={'auto'}
                        className="vision"
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
                            <Text fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
                                color={"black"}
                                textAlign={"start"} fontWeight={"bold"} > Make financial services available to everyone, everywhere
                                </Text>
                        </Stack>
                    </Box>
                </Stack>

            </Stack> */}
        </>
    );
}