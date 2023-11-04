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
import photo from "../images/aboutUs_img/photo.png"
import banner from "../images/aboutUs_img/banner.jpg"
import unstopable from "../images/aboutUs_img/aboutus_img2.png"
import goldLoan from '../images/footer/goldLoan.png';
import anand from '../images/aboutUs_img/anand.png';
import gaurav from '../images/aboutUs_img/gaurav.png';


export default function AboutUs() {

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
                        height={'400px'}
                        marginTop={'150px'}
                    />
                </Flex>
            </Stack>

            <Stack direction={{ base: "column", md: "row" }} width={"80%"} margin={'auto'}>
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={6}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            <Text color={"#0c4696"} as={"span"}>
                                About Hannanth Digital India Private Limited
                            </Text>{" "}
                        </Heading>
                        <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                            <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                                Embark on a Journey of Visionary Leadership and Technological Prowess
                            </Text>

                            Welcome to the digital domicile where vision meets innovation—Hannanth Digital India Private Limited. Our inception is a tale of unyielding dedication and futuristic thinking, envisioned and brought to fruition by the illustrious Anand Gandhi—our Founder, Managing Director, and CEO—a luminary hailing from the historic sands of Bikaner, Rajasthan, born in the year 1979.
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
                    </Stack>
                </Flex>
            </Stack>
            <Box height={'600px'} width={'100%'} margin='auto' h={'full'} overflow={'hidden'} paddingTop={'20px'} >
                <Image src={goldLoan} width={'80rem'} margin='auto' boxShadow={'dark-lg'} />
            </Box>
            <Stack marginTop={'1rem'}>
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

                            <Button
                                onClick={openModal}
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
                            <Modal isOpen={isOpen} onClose={closeModal} size='6xl'>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{'About Hannanth Digital India Private Limited'}</ModalHeader>
                                    <ModalCloseButton />
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>
                                            <Text color={'black.900'} fontWeight={'700'}>
                                                Embark on a Journey of Visionary Leadership and Technological Prowess.<br />
                                            </Text>
                                            Welcome to the digital domicile where vision meets innovation—Hannanth Digital India Private Limited. Our inception is a tale of unyielding dedication and futuristic thinking, envisioned and brought to fruition by the illustrious Anand Gandhi—our Founder, Managing Director, and CEO—a luminary hailing from the historic sands of Bikaner, Rajasthan, born in the year 1979.<br /><br />

                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Rooted in Tradition, Branching into Innovation
                                            </Text>
                                            From the colorful avenues of Bikaner, Anand Gandhi’s entrepreneurial odyssey commenced in the heart of Rajasthan—Jaipur. In 1997, the AR Trading Company was more than just a business venture; it was a promise to excellence, serving the local bodies like Nagar Nigam and Nagar Palika, forging a legacy of trust and bespoke service.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Our Petrochemical Pinnacle
                                            </Text>

                                            Parallelly, in 1997, the establishment of Hannanth Petro Chem in the bustling lanes of Bikaner marked our maiden voyage into the petrochemical realm. Through sheer tenacity and strategic finesse, Hannanth Petro Chem morphed into Hannanth Petro Chem Private Limited in 2012, embracing the intricate dance of international imports and showcasing our prowess in global business dynamics.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Logistical Leaps
                                            </Text>

                                            The advent of Hannanth Logistic Company in 2018 was a testament to our expansive vision, introducing a fleet force of over 40 mighty vehicles from 10 to 14 wheels. This strategic expansion wasn't just about covering miles; it was about connecting businesses, facilitating growth, and delivering promises with efficiency and punctuality.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Fintech Fusion—The Digital Renaissance
                                            </Text>

                                            As the calendar flipped to 2023, Hannanth burgeoned with the birth of twin titans in the fintech sphere—Hannanth Petrons Nidhi Limited and Hannanth Digital India Private Limited. United under the banner of HPNPAY, we are not just partaking in the fintech evolution; we are pioneering it. HPNPAY is more than a brand; it's a digital revolution, offering a finessed financial interface that resonates with the pulse of the modern user.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Our Ethos—Elegance in Innovation
                                            </Text>

                                            At Hannanth, we sculpt our businesses to be not just enterprises, but ecosystems of reliability and innovation. Our foray into fintech is etched with the elegance of cutting-edge solutions, wrapped in the warmth of customer-centricity, and delivered with the signature Hannanth stamp of trust.<br />

                                            We stand at the confluence of heritage and horizon, tradition and technology. Join us as we steer into a future where every transaction is a step towards transformation.<br /><br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                Step into the World of Hannanth Digital India Private Limited—Where Future is Familiar.
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
                            src={gaurav}
                            objectFit="cover"
                            alt="#"
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Gaurav Vijay
                                </Heading>
                                <Text color={"gray.500"}>Director</Text>
                            </Stack>

                            <Button
                                onClick={openModal3}
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
                            src={photo}
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
                            <Button
                                onClick={openModal2}
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

            <Stack>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"#0c4696"}
                    textAlign={"center"}
                    marginTop={'2rem'}
                >
                    About Us
                </Heading>
                <Center py={6} gap={5}>

                    <Stack direction={{ base: "column", md: "row" }} width={"80%"} margin={'auto'}>
                        <Flex p={8} flex={1} align={"center"} justify={"center"}>
                            <Stack spacing={6}>

                                <Text fontSize={{ base: "md", lg: "lg" }} color={"black"}>
                                    <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                                        Who We Are
                                    </Text>
                                    Hannanth Digital India Private Limited is a beacon of digital innovation based in the historical heart of Rajasthan, Bikaner. We are a forward-thinking company dedicated to transforming India's digital landscape, starting with its soul—the villages. Co-founded by visionary leaders Anand Gandhi & Shweta Gandhi, our mission is to weave digital threads into the fabric of rural life, enabling and empowering every individual with the tools for a brighter, self-sufficient future.
                                </Text>
                                <Accordion defaultIndex={[1]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box fontSize={"1.3rem"} as="span" flex='1' textAlign='left'>
                                                    Read more
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Text fontSize={"1.3rem"}>
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Our Mission
                                                </Text><br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Our mission at Hannanth is twofold:
                                                </Text><br />
                                                1. Digital Empowerment: To catalyze a digital revolution in rural India, enabling access to comprehensive digital financial services and marketplaces.<br />
                                                2. Economic Upliftment: To stimulate local economies by providing platforms for artisans and small businesses to flourish on a national and international stage.<br /><br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    What We Do
                                                </Text>
                                                We offer a suite of services that serve as the backbone of rural business and lifestyle enhancements:<br />

                                                Certainly! Below is a detailed description of the Bharat Bill Payment System (BBPS) service that could be used for your website or promotional materials.<br />

                                                Certainly! Here's an enhanced description that highlights the brand name "HPNPay" in the context of the Bharat Bill Payment System (BBPS) service offered by Hannanth Digital India Private Limited.<br />

                                                ---
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    HPNPay: Revolutionizing Bill Payments with BBPS
                                                </Text>
                                                Seamless Integration, Exceptional Convenience

                                                Welcome to HPNPay, Hannanth Digital India Private Limited's flagship conduit for modern, hassle-free bill payments across India. With HPNPay, powered by the Bharat Bill Payment System (BBPS), we're not just simplifying transactions; we're reshaping the financial landscape of everyday life.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    HPNPay's Commitment: One Platform, All Bills
                                                </Text>
                                                Our pledge with HPNPay is clear - provide a singular, reliable point for managing a wide array of bills. From utilities and communications to insurance and loans, HPNPay is your trusted partner, ensuring that every payment is as effortless as a single tap on your screen.<br />

                                                Unwavering Security with HPNPay

                                                At HPNPay, we understand that security isn't just a feature; it's a promise. By harnessing the strength of AWS server technology and MongoDB's robust database solutions, HPNPay safeguards your data, offering a secure transaction environment that you can trust without a second thought.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    HPNPay: Bridging the Digital Divide
                                                </Text>
                                                The vision of HPNPay extends beyond urban horizons, reaching into the heart of India's villages. Our extensive network, cultivated by HPNPay, makes digital bill payment services available to the rural populace, democratizing access to financial services with unparalleled reach.<br />

                                                Empowerment Through Employment with HPNPay<br />
                                                HPNPay is more than just a payment service; it's a beacon of economic opportunity. By establishing a distributor network led by HPNPay across rural landscapes, we are not only introducing convenience but also fostering job creation and supporting the entrepreneurial spirit at the grassroots level.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    HPNPay in Action: How to Pay with Ease
                                                </Text><br />
                                                Utilize HPNPay through Hannanth’s user-friendly interfaces on Android, iOS, and the web:<br />

                                                1. Access: Enter the HPNPay portal with your credentials securely.<br />
                                                2. Choose: Select from a comprehensive directory of billers associated with HPNPay.<br />
                                                3. Provide: Key in your billing details specific to your chosen service.<br />
                                                4. Transact: Execute the payment using your preferred method with HPNPay’s multiple payment options.<br />
                                                5. Receive: Get instant acknowledgment and a digital receipt, courtesy of HPNPay.<br /><br />

                                                The HPNPay Edge<br />
                                                HPNPay stands distinguished not just in the sophistication of its technology but in the personalized experience it offers. Our local teams, empowered by HPNPay, are attuned to the unique needs of every region, providing assistance and ensuring that digital bill payments are accessible and user-friendly for everyone.<br />

                                                Elevate Your Payment Experience with HPNPay<br />
                                                Transition to a smarter, more secure way of handling your bills. Join the digital revolution with HPNPay and experience the future of bill payments that Hannanth Digital India Private Limited proudly offers. Step into the world of HPNPay - where every transaction is a step towards a digitally empowered India.<br />


                                                Certainly! Here's a detailed explanation of the AEPS service, specifically tailored for Hannanth Digital India Private Limited's offering with an emphasis on their brand and mission.<br />

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    HPNPay AEPS: Your Gateway to Accessible Financial Services
                                                </Text><br />
                                                Inclusive Banking with a Digital Key<br />

                                                At Hannanth Digital India Private Limited, we proudly present HPNPay AEPS—a pivotal service within our suite of digital solutions that stands for Aadhaar Enabled Payment System. AEPS is a bank-led model which allows online interoperable financial transactions at Point of Sale (PoS) through the Business Correspondent (BC)/Bank Mitra of any bank using the Aadhaar authentication.<br />

                                                Empowering Rural Transactions with HPNPay AEPS<br />
                                                The heart of HPNPay AEPS is to bring banking to the doorsteps of millions. With the Aadhaar card linked to their bank accounts, individuals in the remotest villages can now perform financial transactions with ease. This service is an embodiment of our commitment to the vision of a Digital India, where every citizen is empowered by the convenience and security of digital banking.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Services Offered Through HPNPay AEPS
                                                </Text>
                                                Our HPNPay AEPS platform enables multiple transaction types, including:<br />
                                                - Cash Withdrawal: Easily withdraw cash from your bank account using your Aadhaar number and biometric verification.<br />
                                                - Cash Deposit: Deposit cash into your bank account through an AEPS-enabled kiosk or business correspondent.<br />
                                                - Balance Enquiry: Check your account balance in a secure manner using AEPS.<br />
                                                - Fund Transfer: Seamlessly transfer funds between AEPS-linked bank accounts.<br />
                                                - Mini Statement: Obtain a mini-statement of your bank account to keep track of your transactions.<br /><br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Why Choose HPNPay AEPS?
                                                </Text>
                                                - Ease of Use: Conduct financial transactions with just your Aadhaar number and your biometric data—no need for debit cards or complex banking procedures.<br />
                                                - Widely Accessible: Our HPNPay AEPS service is available across a vast network of kiosks, making banking services accessible even in areas where banks are not physically present.<br />
                                                - Enhanced Security: Transactions through HPNPay AEPS require biometric authentication, which is unique to every individual, thus providing a highly secure platform for your financial needs.<br />
                                                - Direct Benefit Transfer (DBT): Receive government benefits directly into your bank account through HPNPay AEPS, ensuring transparency and reducing fraud.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    How HPNPay AEPS Works
                                                </Text>
                                                1. Visit any HPNPay AEPS-enabled Kiosk: Locate the nearest HPNPay partner kiosk or business correspondent.<br />
                                                2. Authentication: Provide your Aadhaar number and verify your identity through biometric scanning.<br />
                                                3. Transaction: Choose the transaction you wish to perform and follow the simple prompts to complete it.<br />
                                                4. Confirmation: Receive an instant confirmation of the transaction along with a printed receipt, where applicable.<br /><br />

                                                HPNPay AEPS: A Step Towards Financial Inclusion<br />
                                                Our vision with HPNPay AEPS is to simplify banking for the vast Indian populace, making it accessible, secure, and user-friendly. We aim to bridge the gap between the unbanked and the digital economy, fostering a financially inclusive society that thrives on equality and opportunity.<br />

                                                Join the HPNPay AEPS Revolution<br />
                                                Experience the empowerment of HPNPay AEPS and be part of the change that Hannanth Digital India Private Limited is driving forward. Banking is no longer a privilege but a right, and with HPNPay AEPS, it's right at your fingertips.<br />

                                                Certainly! Here's an engaging description of the Direct Selling Agent (DSA) services as provided by Hannanth Digital India Private Limited, with a particular focus on their proprietary brand and service approach.<br />

                                                Understood. Here's a revised version that integrates the DSA services provided by Hannanth Digital India Private Limited without overly emphasizing the brand name.<br />


                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                                                    DSA Services: Local Presence, Nationwide Impact
                                                </Text>
                                                <br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Direct Selling Agents: Catalysts for Financial Empowerment
                                                </Text>
                                                At Hannanth Digital India Private Limited, our Direct Selling Agent (DSA) program is at the forefront of delivering bespoke financial services. Our agents are the local ambassadors of empowerment, seamlessly connecting individuals and businesses to a world of financial possibilities.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    The Scope of Our DSA Services
                                                </Text>
                                                Our network of agents is meticulously trained to offer a personalized suite of financial products and services, including:<br />
                                                - Loans: Assisting with applications for personal, home, vehicle, and SME loans.<br />
                                                - Insurance: Providing access to life and general insurance to safeguard against uncertainties.<br />
                                                - Investments: Offering consultations on a range of investment vehicles suitable for diverse risk appetites and financial goals.<br /><br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    The Value of Working with Our DSAs
                                                </Text>
                                                - In-depth Training: Each agent receives thorough training to become a well-informed financial service provider.<br />
                                                - Rewarding Incentives: Our performance-based compensation structure ensures that success is both recognized and rewarded.<br />
                                                - Supportive Technology: We employ advanced technology platforms to streamline operations and enhance customer engagement.<br />
                                                - Expansive Coverage: Our agents reach out to a broad spectrum of clients, making financial services accessible even in the most rural locales.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    The Hannanth Difference
                                                </Text>
                                                - Personalized Approach: Our agents are trained to tailor financial solutions that align with individual customer needs, upholding our commitment to personalized service.<br />
                                                - Dependability: We build lasting customer relationships based on a dependable, transparent, and ethical approach.<br />
                                                - Local Expertise: Our agents possess valuable insights into their respective markets, ensuring relevance and impact.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Embark on the DSA Journey
                                                </Text>
                                                Begin a fulfilling path with us by becoming a DSA agent:<br />
                                                1. Sign-Up: Join our growing family of financial facilitators.<br />
                                                2. Equip: Acquire the necessary skills through our training programs.<br />
                                                3. Engage: Connect with customers, understanding their needs, and guide them to the right financial solutions.<br />
                                                4. Prosper: Grow your own enterprise as you aid in the financial growth of your customers.<br /><br />



                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Vision for the Future
                                                </Text>
                                                We believe in the power of financial services to transform lives. Our DSA program is more than just a conduit for transactions; it's about empowering dreams, nurturing business ambitions, and securing financial well-being for the future.<br />

                                                Be the Face of Financial Inclusion
                                                Partner with us as a DSA agent and represent the change we aspire to see in the financial sector. Together, we can ensure that financial services are not just a privilege for the urban elite but a fundamental right for all.<br />

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Hannanth Digital India Pvt Ltd Presents: HPNPay's Online Handycraft Market
                                                </Text><br />
                                                Empowering Indian Artisans with Global Reach<br />

                                                In the heart of India lies an untapped reservoir of talent - everyday individuals, with extraordinary skills to create magnificent handcrafted products. HPNPay recognizes this potential and is on a mission to bring it to the limelight.<br />

                                                Introducing HPNPay's Online Handycraft Market<br />

                                                The essence of India's rich cultural heritage lies in its handcrafted wonders. Every weave, every stroke, every pattern tells a tale of tradition, passed down through generations. At Hannanth Digital India Pvt Ltd, we believe in honoring this legacy by giving artisans a platform to showcase their creations to the world.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    How It Works:
                                                </Text>
                                                1. Craft Your Masterpiece: Every individual in India, regardless of age or background, has the inherent talent to craft something unique. Whether it's an embroidered fabric, a terracotta vase, or a beaded necklace, the possibilities are endless.<br />

                                                2. Visit an HPNPay Counter: Once you have your handcrafted product ready, simply visit your nearest HPNPay counter.<br />

                                                3. Instant Payment: At the HPNPay counter, after a quick inspection, you'll receive an instant payment for your creation.<br />

                                                4. Global Showcase: Our dedicated collection agents will carefully package and transport your masterpiece to our main hub. Here, it will be photographed and listed on our Online Handycraft Market.<br />

                                                5. Global Sales: Your product will now be available for purchase to customers around the world. HPNPay ensures your creation gets the global audience it deserves.<br />

                                                Why Choose HPNPay's Online Handycraft Market?<br />

                                                - Empowerment: This initiative is not just about commerce; it's about empowerment. It's about giving a voice and a platform to the countless artisans who have, for so long, remained in the shadows.<br />

                                                - Simplicity: The process is seamless. Craft, deposit, and get paid. We handle the logistics, marketing, and sales.<br />

                                                - Secure Transactions: Every transaction, be it with the artisan at the HPNPay counter or with a global customer online, is encrypted and secure.<br />

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Join the Revolution
                                                </Text>
                                                The beauty of handcrafted products is unparalleled. They capture the essence of the artisan's soul and the richness of Indian traditions. With HPNPay's Online Handycraft Market, we aim to bridge the gap between local artisans and global consumers, ensuring that Indian handcrafts get the recognition and value they truly deserve.<br />

                                                Be a part of this journey. Craft, sell, and celebrate the spirit of India with HPNPay.<br />

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Hannanth Digital India Private Limited Introduces: HPNPay's Small Industries Marketing Tool

                                                </Text>

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    Elevating Small Industries to the Global Digital Stage
                                                </Text>
                                                At the crossroads of technological innovation and entrepreneurial spirit, HPNPay introduces a groundbreaking service tailored specifically for small industries. Recognizing the potential and vibrancy of local businesses, we are proud to unveil our Small Industries Marketing Tool. A platform that merges the simplicity of social media with the power of AI, ensuring every small business shines bright on the digital horizon.<br />

                                                HPNPay's Small Industries Marketing Tool: Streamlined Digital Presence<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                    How It Works:
                                                </Text>
                                                1. Input Your Business Essentials: Start by simply entering your business name, category, a representative photo, and your contact details.<br />

                                                2. Select Your Digital Platforms: Choose where you'd like your business presence - be it Facebook, Instagram, a dedicated website, or all of them!<br />

                                                3. AI-Powered Page Creation: Our advanced AI algorithms get to work, crafting a professional and aesthetically pleasing page for your business across your chosen platforms, all nested under our main HPNPay social umbrella.<br />

                                                4. Product Listing Made Easy: Upload product photos, categorize them, set a price, and watch as your product gets listed across all your selected platforms.<br />

                                                5. Seamless Customer Experience: Customers can now discover, browse, and purchase products from your pages. What's more, every transaction is secure, ensuring peace of mind for both you and the customer.<br />

                                                6. Efficient Revenue Model: While the platform charges a nominal fee for each product upload, we also incorporate a minimal profit margin on the listed product prices, ensuring the growth and sustainability of the tool.<br />

                                                Why Opt for HPNPay's Small Industries Marketing Tool?<br />

                                                - Digital Expansion Made Simple: No technical know-how? No problem! Our tool is user-friendly and intuitive, ensuring every business, no matter how small, can have a digital presence.<br />

                                                - Cost-Effective: With a minimal charge for product listings and a profit-sharing model, we ensure that businesses get maximum value with minimal expenditure.<br />

                                                - Secure & Trustworthy: All transactions are encrypted and secure, fostering trust between businesses and their customers.<br />



                                                Be Everywhere, Effortlessly<br />

                                                In today's digital age, having an online presence isn't just an advantage; it's a necessity. And with HPNPay's Small Industries Marketing Tool, we're ensuring that every business, irrespective of its size or domain, gets its rightful place in the digital world.<br />

                                                Step into the future, and take your business to new heights with HPNPay. Because with us, every small industry gets the global recognition it deserves.<br />
                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>


                                                    Hannanth Digital India Private Limited: Our Philosophy

                                                </Text><br/>
                                                Empowerment Through Digital Innovation<br/>

                                                At the heart of Hannanth Digital India Private Limited, operating under our renowned brand name HPNPay, lies an unwavering commitment to enhancing and elevating the essence of small industries. We firmly believe in the vast potential and boundless energy that pulses within these businesses, shaping the socio-economic fabric of our nation.<br/>

                                                Streamlining the Digital Journey<br/>

                                                In an era of technological omnipresence, our vision has always been clear - to streamline and simplify the process of digital integration for every small industry. We understand that in today's fast-paced digital age, having a digital footprint is not just a luxury; it's a fundamental necessity. Through our groundbreaking Small Industries Marketing Tool, we've bridged the gap between traditional commerce and digital prowess. By leveraging the power of AI and social media, we have crafted a platform that ensures even the smallest of businesses can carve out a distinct and impactful digital identity.<br/>

                                                A Partnership of Growth<br/>

                                                Our approach is rooted in partnership and mutual growth. While we provide the technological framework with platforms like the Small Industries Marketing Tool, we see our role as more than just service providers. We are collaborators, assisting businesses in navigating the often complex digital landscape. This philosophy extends to our revenue model, where we ensure that businesses get maximum value with minimal expenditure. Our nominal charges for product listings combined with a sustainable profit-sharing model underscore our commitment to the prosperity of our partners.<br/>

                                                Trust, Security, and Reliability<br/>

                                                In all our endeavors, we prioritize the security and trust of our partners and their customers. We've instilled robust encryption measures ensuring every transaction remains secure, fostering an environment of trust. We believe that for digital growth to be meaningful, it needs to be built on a foundation of reliability.<br/>

                                                The Road Ahead<br/>

                                                Our philosophy is ever-evolving, shaped by the dynamic digital landscape and the feedback of our valued partners. Yet, some things remain constant: our commitment to innovation, our belief in the power of small industries, and our unwavering dedication to ensuring every business, irrespective of its size, gets its rightful place in the digital world.<br/>

                                                Join us on this journey, for at Hannanth Digital India Private Limited, we're not just building platforms; we're crafting a brighter, digital future for all.<br/>

                                                Work Style & Culture at Hannanth Digital India Private Limited<br/>

                                                Collaborative Innovation<br/>

                                                In the bustling corridors of Hannanth Digital India Private Limited, there's a unified belief in the power of collaboration. We've instilled a culture where ideas thrive, not in isolation, but when mingled with diverse perspectives. Our flagship brand, HPNPay, embodies this spirit, having been shaped by collective insights and expertise.<br/>

                                                End-to-End Digital Integration<br/>

                                                Our work style is a blend of traditional values and modern methodologies. While we deeply respect the rich tapestry of Indian craftsmanship, we equip our teams with the latest digital tools and techniques. This ensures that our offerings, such as the Small Industries Marketing Tool, remain at the forefront of technological innovation.<br/>

                                                Empowerment at Every Step<br/>

                                                Empowerment isn't just a service we offer to our clients; it's ingrained in our work culture. Every team member, from the developers crafting the AI algorithms to the on-ground agents collaborating with local businesses, is encouraged to take ownership of their tasks. This autonomy fosters a sense of responsibility and dedication, driving excellence in every endeavor.<br/>

                                                Adaptable & Agile<br/>

                                                In the rapidly evolving digital landscape, agility is our superpower. Our teams are trained to adapt, pivot, and innovate in real-time. This nimble approach ensures that we're not just reacting to the industry's shifts but often leading the charge.<br/>

                                                Sustainability & Growth<br/>

                                                Our revenue model, built on minimal charges and profit-sharing, isn't just a business decision; it reflects our culture of sustainable growth. We believe in a win-win scenario, ensuring that our success is intrinsically linked with the success of our partners.<br/>


                                                A Culture of Trust & Respect<br/>

                                                At Hannanth Digital India Private Limited, we prioritize building a trustworthy environment. Through stringent security protocols, we ensure that every transaction remains transparent and secure, laying the foundation for long-lasting relationships.<br/>

                                                Continuous Learning & Evolution<br/>

                                                With an eye on the future, we are committed to continuous learning. Regular workshops, training sessions, and feedback loops ensure that our teams stay updated, both in terms of technical knowledge and understanding of market dynamics.<br/>

                                                Conclusion<br/>

                                                In essence, our work style and culture mirror our philosophy. As we embark on our mission to digitally empower every small business, we do so with passion, commitment, and a sense of community. At Hannanth Digital India Private Limited, we're not just a team; we're a family, working hand-in-hand towards a shared digital dream.<br/>


                                                Collaborative Environment at Hannanth Digital India Private Limited<br/>

                                                Unifying Diverse Ideas<br/>

                                                In the heart of Hannanth Digital India Private Limited lies our commitment to collaboration. We see strength in diversity and understand that the most groundbreaking solutions arise from a union of diverse perspectives. Our platforms encourage open dialogue, pooling of expertise, and cross-functional interactions, promoting a culture where every idea, no matter its origin, is valued and explored.<br/>

                                                Agility & Innovation<br/>

                                                Adapting with Purpose<br/>

                                                The digital landscape is dynamic, and to remain at the forefront, agility is paramount. At Hannanth Digital, we've fostered a culture of continuous learning, allowing us to swiftly adapt to market shifts. Our teams are trained to approach challenges with an innovative mindset, ensuring that we not only adapt but lead the way in setting industry standards.<br/>

                                                Pioneering the New<br/>

                                                Innovation is the lifeblood of our operations. Whether it's refining our HPNPay system or developing new tools for small businesses, we're constantly pushing boundaries. Our iterative approach allows for quick prototyping, testing, and refining, ensuring that our solutions are not just novel but effective.<br/>


                                                Rural Engagement<br/>

                                                Bridging the Urban-Rural Divide<br/>

                                                India's heart beats in its villages, and at Hannanth Digital, we're passionate about tapping into this immense potential. Our initiatives focus on empowering rural communities, providing them with the tools and platforms they need to thrive in the digital age.

                                                Empowerment Through Digital Tools<br/>

                                                From our Online Handicraft Market to the Small Industries Marketing Tool, our offerings are tailored to elevate rural craftsmanship and industries, opening up avenues previously inaccessible. By offering digital platforms that cater specifically to their needs, we're driving employment, fostering entrepreneurship, and contributing to the growth of rural economies.<br/>

                                                Holistic Growth Approach<br/>

                                                Our rural engagement isn't just about business; it's about community building. By integrating them into the digital realm, we're ensuring they have a voice in the global marketplace. Through our initiatives, we aim to create a symbiotic relationship where rural India not only contributes to but also benefits from the digital revolution.<br/>

                                                In Conclusion<br/>

                                                At Hannanth Digital India Private Limited, our ethos is grounded in collaboration, agility, and a deep commitment to both innovation and the rural communities we serve. Through these pillars, we aim to redefine the digital landscape, creating solutions that resonate with and benefit all of India.

                                                <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>

                                                Connect with Us
                                                </Text><br/>
                                                Ready to join hands with Hannanth on this transformative journey? Reach out to explore partnerships, learn about our services, or simply say hello. We are always here to listen and engage.<br/>

                                                - Email: info@hpnpay.com<br/>
                                                - Phone: 9672418000 & 9166786666<br/>
                                                - Visit Us: 103 A First Floor, Rani Bazaar, Bikaner, Rajasthan, India.<br/>

                                                Join us in this exciting venture towards a digitally inclusive India. Together, we can bridge divides, build communities, and bolster the nation's progress.<br/>


                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Stack>
                        </Flex>
                    </Stack>


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