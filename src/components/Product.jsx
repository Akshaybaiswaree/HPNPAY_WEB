
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Input,
    useBreakpointValue,
    Td,
    TableContainer,
    TableCaption,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Tfoot,
    Accordion,
    AccordionPanel,
    AccordionIcon,
    AccordionItem,
    AccordionButton,
} from "@chakra-ui/react";
import Product1 from "../images/product_img/product _img1.png";
import Product2 from "../images/product_img/product_img2.png";
import Product3 from "../images/product_img/product_img3.png";
import Product4 from "../images/product_img/product_img4.png";
import Product5 from "../images/product_img/product_img6.png";
import Product6 from "../images/product_img/product_img7.png";
import Product7 from "../images/product_img/product_img8.png";
import Product8 from "../images/product_img/product_img9.jpg";
import Product9 from "../images/product_img/product_img10.png";
import goldLoan from "../images/footer/goldLoan.png"

export default function Product() {
    return (
        <>
            <Box >


                <Stack direction={{ base: "column", md: "row" }} >
                    <Flex p={8} flex={1} align={"center"} justify={"center"}>
                        <Stack spacing={6} w={"full"} maxW={"lg"}>
                            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}>

                                <Text color={"#052B60"} as={"span"}>
                                    One App
                                </Text>{" "}
                                <br />{" "}
                                <Text color={"#052B60"} as={"span"}>
                                    Many Services
                                </Text>{" "}
                            </Heading>
                            <Text fontSize={{ base: "md", lg: "2xl" }} color={"gray.500"}>
                                Offer products and services from your shop and earn an
                                additional Rs. per month. No working capital required.
                                <br />
                                <Text fontWeight={"bold"} color={"#052B60"}>
                                    Upgrade your shop. Be the one stop banking and digital service
                                    provider in your area/
                                </Text>
                            </Text>
                            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                                <Button
                                    fontSize={{ base: "md", lg: "2xl" }}
                                    //   rounded={'full'}
                                    //   bg={'blue.400'}
                                    color={"#052B60"}
                                >
                                    Calculate Your Income
                                </Button>
                                <Button
                                    fontSize={{ base: "md", lg: "2xl" }}
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    rounded={"full"}
                                >
                                    Join HPNPAY
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image ml={"20px"} src={Product1} marginTop={'70px'} width={"400"} height={'400px'} />
                    </Flex>
                </Stack>

                {/* //page Second */}
                <Box width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        "Banking Services Reinvented:
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            At HPNPay, we understand the value of trust in the world of digital transactions.                         </Text>
                        <Text fontWeight={"bold"} color={"black"}>
                            "Your Trust, Our Commitment: Digital Excellence, Delivered Securely."
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
                                        * it's the very foundation of our ethos. With HPNPay, you get access to a robust suite of digital banking services that cater to your every need, without the necessity for working capital.<br />

                                        * Imagine being able to offer an array of banking facilities, right from your shop. Whether it's facilitating immediate cash withdrawals, seamless money transfers, secure cash deposits, or introducing your customers to savings and insurance options—HPNPay has got it all. Looking to extend loans? We've got that covered too.<br />
                                        * What's more, with HPNPay, you're banking on a platform that's backed by rigorous standards.  we maintain stringent security protocols. This is not just about compliance; it's our way of ensuring that every transaction you undertake is cloaked in multiple layers of security. The proof? A staggering success ratio of over 99.9% that's been tested over time.<br />

                                        "Choose HPNPay: Where trust meets digital innovation."<br />

                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Text>
                </Box>
                <Flex margin={"4rem"}>
                    <Box>
                        <Image ml={"6rem"} src={Product2} width={"55rem"} height={'28rem'} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"20px"}
                        width={"50%"}
                        marginLeft={"9rem"}
                    >
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

                        <Box>
                            {/* <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                            HPNPAY - Savings & Current Account opening
                        </Text>
                        <Text fontSize={"1.3rem"}>
                            Become the Banking Mitra of your area. Help every citizen to open &
                            operate a bank account. Two types of accounts that can be opened: 
                            1. Zero balance Axis Bank Sahaj Savings Account: A zero balance
                            account that can be opened instantly with just Aadhaar eKYC  2. TDS
                            Free Current Account: Open Current Account from your shop & grow
                            your business Become the Banking Mitra of your area. Help every
                            citizen to open & operate a bank account. Two types of accounts that
                            can be opened:  1. Zero balance Axis Bank Sahaj Savings Account: A
                            zero balance account that can be opened instantly with just Aadhaar
                            eKYC  2. TDS Free Current Account: Open Current Account from your
                            shop & grow your business
                        </Text> */}
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'}
                                    left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                </Flex>

                {/* page 3 */}
                <Box marginTop={""} width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Digital Suite
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            HPNPay: Empowering Insurance, Simplifying Choices
                        </Text>
                        <br />
                        Welcome to HPNPay, your comprehensive digital insurance hub. We're not just any online insurance portal; we represent a seamless blend of technology, convenience, and commitment to our retailer and distributor agent partners.
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"0px"}
                        marginLeft={"9rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Why Choose HPNPay?
                            </Text>
                            <Text fontSize={"1.3rem"}>We offer a range of affordable general insurance plans, including bike insurance and mobile device protection plans
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
                                            1. Unified Platform: With HPNPay, you gain access to a myriad of insurance options all in one place. Whether it's health, life, or general insurance, our platform presents an array of choices tailored to fit your needs.<br />

                                            2. Trusted Partnerships: Our collaboration with esteemed retailer and distributor agent partners ensures that you are always in safe hands. Every policy and plan available on HPNPay comes with the assurance of our dedicated network.<br />

                                            3. Intuitive Design: Our website is crafted with users in mind. Its responsive design and user-friendly interface mean that you can easily navigate, compare, and choose the best insurance solutions without any hassle.<br />

                                            4. Unwavering Commitment: At HPNPay, we prioritize our customers. Our commitment goes beyond just providing insurance options. We're here to guide, advise, and assist every step of the way.<br />

                                            5. Secure Transactions: Safety is paramount at HPNPay. Rest easy knowing that all your transactions are conducted over a secure, encrypted platform. Your data's security is our top concern.<br />
                                            Partner With Us<br />

                                            If you are a retailer or a distributor agent looking to expand your horizons and tap into the digital insurance market, HPNPay welcomes you. Join our growing community and be part of a digital revolution in insurance.<br />
                                            Conclusion<br />

                                            In an age where digital is the new norm, HPNPay stands tall as a beacon of reliability and innovation in the online insurance sector. Dive into a world of curated insurance solutions and experience the future of insurance, today.<br />

                                            Because life doesn't come with guarantees<br />
                                            Highlight This Line In The Start
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Customer Khata: Revolutionizing Credit Management
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                In the modern business landscape, efficiency and accuracy are paramount. That's why Customer Khata is here to redefine how you manage your customer credits.
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
                                            1.Streamlined Transactions: Say goodbye to traditional ledgers. With Customer Khata's digital platform, every transaction is meticulously recorded, ensuring there's no room for discrepancies. A transparent system means trust is built, and partnerships are strengthened.                                            <br />

                                            2.Timely Reminders: Missing out on payments? With our automated reminder system, ensure that all dues are timely settled. Let the system take care of nudging your clients, so you don't have to.                                            <br />

                                            3.Integrated Payment Solutions: We believe in simplicity and integration. Collect payments seamlessly through our integrated digital payment solutions, making transactions smoother and faster.                                            <br />

                                            4.Join the Customer Khata family and experience a 100% enhancement in how you handle customer credit. Elevate your business processes, optimize revenue collection, and foster better customer relations with us.                                            <br />

                                            5.I hope this provides a comprehensive overview of the product you're offering. Adjustments can be made based on specific requirements or preferences!                                            <br />

                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                UPI QR: The Future of Digital Payments
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                In today's digital age, seamless transactions are no longer a luxury; they're a necessity. With UPI QR, we're making that vision a reality.
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
                                            1.Universal Acceptance: No more confusion about which payment app your customer uses. Our single QR code is compatible across various payment apps, ensuring that you never miss out on a sale.<br />
                                            2.Flexibility at its Best: Whether you're on the move or at your shop, UPI QR adapts to your needs. Set it as your mobile screen saver for instant payments during deliveries, or display it prominently in your shop for customers to scan and pay.<br />
                                            3.Seamless Digital Payments: Long gone are the days of manual card swipes or handling cash. With UPI QR, payments are instant, secure, and completely digital. A simple scan is all it takes to complete a transaction.<br />
                                            4.Step into the future with UPI QR and transform the way you handle business transactions. It's quick, it's easy, and it's the modern way to pay!<br />

                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        <Box>

                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'} position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>{" "}

                    </Flex>
                    <Box>
                        <Image ml={"50px"} src={Product3} width={"400"} height={'350'} />
                    </Box>
                </Flex>

                {/* fourth */}
                <Box height={'600px'} width={'100%'} margin='auto' h={'full'} overflow={'hidden'} paddingTop={'20px'} >
                    <Image src={goldLoan} width={'80rem'} margin='auto' boxShadow={'dark-lg'} />
                </Box>
                {/* //page Second */}
                <Box width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Insurance
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Journey to Digital Freedom - HPNPay, Your Store's Digital Companion{''}
                        </Text>
                        <Text fontWeight={"bold"} color={"black"}>

                            डिजिटल स्वतंत्रता का सफर - HPNPay, आपकी दुकान का डिजिटल साथी
                        </Text>

                        <br />
                        We offer a range of affordable general insurance plans, including bike insurance and mobile device protection plans
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
                    <Box>
                        <Image ml={"95px"} src={Product4} width={"1000"} height={'400'} paddingLeft={'3rem'} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >






                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                General

                            </Text>
                            <Text fontSize={"1.3rem"}>
                                We offer a range of affordable general insurance plans, including bike insurance and mobile device protection plans
                            </Text>
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                </Flex>

                {/* page 5 */}
                <Box marginTop={"2rem"} width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Travel
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Become the one-stop travel Loan agency in your area{" "}
                        </Text>
                        <br />
                        An IATA approved travel service provider, we offer you the most comprehensive range of travel products and services at very affordable rates and great commissions. Offer rail, flights, hotels, holidays and more from your shop
                    </Text>
                </Box>
                <Flex marginTop={"80px"} margin={'3.6rem'}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"6rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>

                                Car Booking

                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Help your customers skip the hassle of queues and waiting times. With our intuitive app interface, offer quick and efficient car booking services right from your shop. For every booking made, enjoy a profitable commission.                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Flight Booking
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Leverage the power of an IATA-accredited platform to offer flight ticket bookings. Provide your customers with competitive rates and stand out with top-notch service. Plus, benefit from excellent commissions on each booking.                            </Text>
                            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'}
                                    left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                    <Box>
                        <Image ml={"40px"} src={Product5} width={"400"} height={'370'} />
                    </Box>
                </Flex>

                {/* sixth */}
                {/* fourth */}
                {/* //page Second */}
                <Box width={"80%"} margin={"auto"} marginTop={"2rem"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Utility Bill Payments Made Easy
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        {/* <Text fontWeight={"bold"} color={"black"}>
                            Go All Digital - HPNPay, Redefining Payments{''}
                        </Text>
                        <Text fontWeight={"bold"} color={"black"}>

                            "सब कुछ डिजिटल हो जाए - HPNPay, भुगतानों का नया
                        </Text> */}
                        <br />
                        Enable your customers to clear their monthly Gas, Electricity, and Water bills right from your store. By providing this essential service, not only do you make their lives simpler, but you also guarantee a steady income stream for your business.                    </Text>
                </Box>
                <Flex margin={'3.6rem'}>
                    <Box>
                        <Image ml={"95px"} src={Product6} width={"1000"} height={'400'} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        // marginTop={"10px"}
                        marginLeft={"5rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                One-Stop for Credit Card Settlements
                            </Text>

                            <Text fontSize={"1.3rem"}>
                                Cater to a broad base by facilitating credit card payments across 30+ banks. With monthly billing cycles, this service not only aids your clientele but also promises you a regular revenue boost.
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Trusted Cash Collection Point
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Position your store as a reliable hub for cash collection. Whether it's customers wanting to deposit or collection agents gathering EMIs, with every transaction, you get a piece of the pie.                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Timely LIC Premium Services
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Be the helping hand customers need for their LIC premium payments, be it monthly, quarterly, half-yearly, or annually. By offering this vital service, you not only assist them but also cement a recurring income channel for your store.                            </Text></Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                LIC Premium Payments
                            </Text>
                            <Text fontSize={"1.3rem"} >Help customers pay their LIC premiums monthly, quarterly, half-yearly or annually and ensure a recurring income for yourself
                            </Text>
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                </Flex>

                {/* page 5 */}
                <Box marginTop={"1rem"} width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} paddingLeft={"rem"}>
                        Partner Services
                    </Text>

                </Box>
                <Flex marginTop={"10px"}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"48%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                "Charting the Path to Digital Commerce - HPNPay, Amplifying Your Store's Digital Journey."                            </Text>

                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                "डिजिटल संसार में अब आपका स्टोर भी - HPNPay, आपके व्यापार का डिजिटल साथी।"

                            </Text>

                            <Text fontSize={"1.3rem"}>
                                "Digital offerings should be within everyone's grasp, not only those versed in digital finance. Through HPNPAY, broaden the horizon of digital services to your community, leveraging our distinguished brand collaborations. Harness the power of the HPNPAY platform to deliver succinct content and streamlined services. Assist customers in converting their tangible cash into digital formats at your venue, guaranteeing seamless access to the myriad advantages HPNPAY provides."                            </Text>
                        </Box>


                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Gift Card Solutions at Your Fingertips
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Provide your customers with the option to buy gift cards from leading e-commerce giants such as Amazon, Flipkart, Myntra, Pantaloons, and many more right from your establishment. Not only will this enhance their shopping experience, but you'll also benefit with commissions both at the time of card issuance and when they're redeemed. Empower your store with a touch of digital convenience and watch your revenue grow!                            </Text>
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                    <Box>
                        <Image ml={"30px"} src={Product7} width={"400"} height={'380'} marginTop={'4rem'} />
                    </Box>
                </Flex>

                {/* eight */}
                {/* fourth */}
                {/* //page Second */}
                <Box width={"80%"} margin={"auto"} marginTop={'2rem'}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Essential Services
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Provide essential services to customers and earn more{" "}
                        </Text>
                        <br />
                        Help your customers with their tax filings and PAN requirements from your shop and help bring them into the formal financial fold


                    </Text>
                </Box>
                <Flex margin={'3.6rem'}>
                    <Box>
                        <Image ml={"100px"} src={Product8} width={"1000"} height={'400'} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"5rem"}
                    >

                        {/* </Box> */}



                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>

                                PAN Card Services:
                                {" "}
                            </Text>
                            <Text fontSize={"1.3rem"} >
                                Enable your customers to receive their physical PAN card in just 3-4 working days through your shop. Additionally, for those in need of swift services, provide them with an E-PAN card in as little as 2 hours and up to a maximum of 24 hours. Transform the way your customers experience essential services by offering quick and efficient solutions.
                            </Text> </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                Tax Filing:

                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Tax season can be stressful, but with your shop's services, it doesn't have to be. Help your customers navigate the complexities of tax filing seamlessly. By offering this essential service, you not only assist them during the taxing times but also ensure a steady income for yourself each tax season.                            </Text>
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>
                    </Flex>
                </Flex>

                {/* page 5 */}
                <Box marginTop={""} width={"80%"} margin={"auto"}>
                    <Text fontSize={"3rem"} color={"#052B60"} as={"span"}>
                        Credit Solutions
                    </Text>
                    <Text fontSize={"1.5rem"}>
                        <Text fontWeight={"bold"} color={"black"}>

                            HPNPay के साथ जीवन की राह में, सपनों की बाहें; साथ हो आपके, हर पल, हर कदम।
                        </Text>

                    </Text>
                </Box>
                <Flex margin={'3.6rem'}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"6rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                1. Comprehensive and Customised Financial Empowerment
                            </Text>
                            <Text fontSize={"1.3rem"}>
                             HPNPay stands at the forefront of financial empowerment, offering bespoke credit solutions tailored to fit the diverse needs of every customer. We champion your business's growth by providing accessible business loans, injecting the necessary capital to broaden your horizons, enhance your operations, or cater to any specific business exigencies. Facilitate a loan experience for your customers that transcends the traditional, cumbersome branch visits. Our refined loan services are designed with the utmost convenience in mind, ensuring a seamless process that not only fosters customer loyalty but also amplifies the profitability and sustainability of your business in the competitive market.<br />
                            </Text>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                2. Business Expansion Financing
                            </Text>

                            <Text fontSize={"1.3rem"}>
                                Navigate the business landscape with HPNPay’s unencumbered, unsecured financing options crafted for retailers. We're dedicated to offering you not just loans, but a partnership that supports your vision for growth, with attractive terms and affordable rates to ensure your business scales new heights with confidence and ease.
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>

                                3.Motorcycle Acquisition Financing
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Embark on a journey of growth and convenience with HPNPay's Two-Wheeler Loan service. Whether it's for personal use or enhancing your product offerings, our instant and competitively priced loans make owning a motorcycle an achievable dream for you and your customers.
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                4.Home and Personal Financing
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                With HPNPay, tap into a versatile financial toolkit that brings instant solutions to your doorstep. Our Home Loan service is more than just a loan; it's a promise of stability and support, enabling you to address all your financial goals, from managing unexpected medical costs to celebrating milestone events, or investing in your children’s future through education. We offer a personal touch, with loans crafted to provide not just funds, but peace of mind and reliability.
                            </Text>
                        </Box>
                        <Box>
                            <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                                5.Gold Asset Financing
                            </Text>
                            <Text fontSize={"1.3rem"}>
                                Unlock the value of your assets with HPNPay's Gold Loan service, a secure and swift financial solution that respects the worth of your investments. With a streamlined process and minimal documentation, access the capital you need by leveraging the gold you own. It’s a safe, sound, and smart way to meet financial requirements, assuring you and your customers of a reliable source of funds when it matters most.

                            </Text>
                        </Box>
                        <Box marginBottom={'2rem'}>

                            <Text fontSize={"1.3rem"}>
                                6. At HPNPay, we are not just a credit service, we are a catalyst for your success, committed to delivering financial solutions that are as innovative as they are inclusive. Join us in a partnership that promises to illuminate the path of financial stability and growth for your business and your customers alike.

                            </Text>
                            <Stack marginTop={'1rem'} spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='email' placeholder='Enter Your Email' width='500px' height='75px' />
                                <Button width='150px' height='75px'
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'} left={"200px"}>Get in touch</Button>
                            </Stack>
                        </Box>

                    </Flex>
                    <Box>
                        <Image ml={"10px"} src={Product9} width={"1000"} height={'380'} marginTop={'4rem'} />
                    </Box>
                </Flex>

                {/* landing partner table */}

                {/* <Text fontSize="5xl" color="blue.600" align={"center"}>
                Lending Partner
            </Text>
            <TableContainer>
                <Table variant="simple">
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Partners</Th>
                            <Th>Loan Products</Th>
                            <Th>Nodal Officer</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Image src={yesbank} />
                            </Td>
                            <Td>Business Loans</Td>
                            
                            <Td>
                                Ms. Rashmi Pandit
                                <br />
                                Email: level2escalation@unitybank.co.in
                                <br />
                                Phone: 022 42159000
                            </Td>
                        </Tr>
                        
                        <Tr>
                            <Td>
                                <Image src={axisbank} />
                            </Td>
                            <Td>Secured Loans</Td>
                           
                            <Td>
                                Mr. Gaurav Mohta (Grievance Redressal Officer)
                                <br />
                                Email: complaints@homefirstindia.com
                                <br />
                                Phone: 8880549911
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image src={axisImage} />
                            </Td>
                            <Td>
                                Personal Loans, Two-Wheeler Loans, Rolling Short Term Business
                                Loans
                            </Td>
                          
                            <Td>
                                Mr. Parag Deshpande
                                <br />
                                Email: PNO@axisbank.com
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image src={sbi_bank} />
                            </Td>
                            <Td>Personal Loans</Td>
                           
                            <Td>
                                Mr. Mohit Gulati
                                <br />
                                Email: gro@moneywide.com
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image src={panjabbank} />
                            </Td>
                            <Td>Personal Loans</Td>
                           
                            <Td>
                                Ms. Meghana Shah
                                <br />
                                Email: help@kreditbee.in
                                <br />
                                Phone: 080-44292200 / 080-68534522
                            </Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td>
                                <Image src={loanImage} />
                            </Td>
                            <Th>Business Loans</Th>
                            
                            <Td>
                                Asifa Hussain
                                <br />
                                Email: cs.fintech@loantap.in
                                <br />
                                Phone: 020 – 4852 1017
                            </Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer> */}
            </Box>
        </>


    );
}