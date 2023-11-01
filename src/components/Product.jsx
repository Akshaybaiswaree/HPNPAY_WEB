
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
            <Box margin="50px">


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
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Banking Services
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Your Trust, Our Commitment - HPNPay, Secure and Reliable Digital Services{''}
                        </Text>
                        <Text fontWeight={"bold"} color={"black"}>
                            आपका विश्वास, हमारा संवाद - HPNPay, सुरक्षित और विश्वसनीय डिजिटल सेवाएं{''}
                        </Text>
                        <br />
                        No working capital required. Offer uninterrupted banking services like
                        cash withdrawal, money transfer, cash deposits, savings, insurance and
                        loan from your shop. HPNPAY is a PCI DSS and ISO 27001 certified
                        company, which means transacting on the platform is very secure and
                        has a time tested success ratio of more than 99.9%
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
                    <Box>
                        <Image ml={"95px"} src={Product2} width={"200"} height={'350'} marginTop={'90px'} />
                    </Box>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Aeps
                            </Text>

                            <Text fontSize={"24px"}>
                                Help customers withdraw DBT, government relief funds and cash from
                                their bank accounts using fingerprint with Aadhaar enabled Payment
                                Services (AePS)
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Micro ATM{" "}
                            </Text>
                            <Text fontSize={"24px"}>
                                Provide cash withdrawal services using debit cards of over 1000+
                                banks
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Money Transfer{" "}
                            </Text>
                            <Text fontSize={"24px"}>
                                Take advantage of our time tested platform with 99.9% success rate
                                to help customers send money from anywhere to anywhere within India,
                                real time, 24*7. Customers use this service also to deposit cash
                                into their accounts
                            </Text>
                        </Box>

                        <Box>
                            {/* <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                            HPNPAY - Savings & Current Account opening
                        </Text>
                        <Text fontSize={"24px"}>
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
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Digital Suite
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            HPNPay - The Catalyst of Digital Success for Your Store{''}              </Text>
                        <br />
                        Less than 3% of Bharat is insured. Safeguard your customers from the
                        uncertainties of life. Protect them with affordable insurance plans
                        across health, medical and general insurance. Earn respect and money
                        while you are at it
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
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                General
                            </Text>

                            <Text fontSize={"24px"}>We offer a range of affordable general insurance plans, including bike insurance and mobile device protection plans
                            </Text>
                        </Box>
                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Customer Khata
                            </Text>
                            <Text fontSize={"24px"}>
                                Upgrade your business with 100% better customer credit management. A
                                digital ledger that maintains record of all transactions, sets
                                automatic payment reminders and helps you collect payments through
                                integrated digital payment solutions
                            </Text>
                        </Box>
                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                UPI QR
                            </Text>
                            <Text fontSize={"24px"}>
                                A single QR Code that helps you accept payment from any payment app.
                                Make it your mobile screen saver or print and dispaly on the shop to
                                enable seamless digital payments
                            </Text>
                        </Box>
                        <Box>
                            {/* <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                            HPNPAY Prepaid Card
                        </Text>
                        <Text fontSize={"24px"}>
                            Become the Banking Mitra of your area. Help every citizen to open &
                            operate a bank account. Two types of accounts that can be opened: 
                            1. Zero balance Axis Bank Sahaj Savings Account: A zero balance
                            account that can be opened instantly with just Aadhaar eKYC  2. TDS
                            Free Current Account: Open Current Account from your shop & grow
                            your business
                        </Text> */}
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
                    <Image src={goldLoan} width={'80rem'} margin='auto' boxShadow={'dark-lg'}/>
                </Box>
                {/* //page Second */}
                <Box width={"80%"} margin={"auto"}>
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Insurance
                    </Text>
                    <Text fontSize={"2rem"}>
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
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                General

                            </Text>
                            <Text fontSize={"24px"}>
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
                <Box marginTop={""} width={"80%"} margin={"auto"}>
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Travel
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Become the one-stop travel Loan agency in your area{" "}
                        </Text>
                        <br />
                        An IATA approved travel service provider, we offer you the most comprehensive range of travel products and services at very affordable rates and great commissions. Offer rail, flights, hotels, holidays and more from your shop
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >




                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>

                                Car Booking

                            </Text>
                            <Text fontSize={"24px"}>
                                Customers no longer need to stand in long queues for their train tickets. Offer train ticket bookings from your shop by using our simple, user friendly app. Earn on every transaction
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Flight Booking
                            </Text>
                            <Text fontSize={"24px"}>
                                An IATA accredited platform for booking flight tickets at competitive rates and great commissions.
                            </Text>
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
                <Box width={"80%"} margin={"auto"}>
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Utility Bill Payment Centre
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Go All Digital - HPNPay, Redefining Payments{''}
                        </Text>
                        <Text fontWeight={"bold"} color={"black"}>

                            "सब कुछ डिजिटल हो जाए - HPNPay, भुगतानों का नया
                        </Text>
                        <br />
                        Households need to pay their EMIs, subscriptions fees and utility bills every month. Solve customer pain point of standing in long queues. From water bills to electricity bills, from phone/DTH recharges to monthly EMIs, provide easy cash collection, bill payment and recharge solutions from your shop.
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
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
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Gas, Electricity & Water Bills
                            </Text>

                            <Text fontSize={"24px"}>
                                Every household needs to pay these utility bills every month. Offer them from your shop and ensure regular monthly income for yourself
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Credit Card Payments{" "}
                            </Text>
                            <Text fontSize={"24px"}>
                                Help customers make their credit card payments across 25+ banks. Credit card payment also follows a monthly cycle, and will ensure recurring income opportunity for yourself
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Cash Collection{" "}
                            </Text>
                            <Text fontSize={"24px"}>
                                Offer cash collection services. Customers and collection agents can deposit EMIs at your store, and you earn on every cash deposit.
                            </Text></Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                LIC Premium Payments
                            </Text>
                            <Text fontSize={"24px"} >Help customers pay their LIC premiums monthly, quarterly, half-yearly or annually and ensure a recurring income for yourself
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
                    <Text fontSize={"5rem"} color={"#052B60"} paddingLeft={"rem"}>
                        Partner Services
                    </Text>
                    {/* <Text fontSize={"2rem"}>
          <Text fontWeight={"bold"} color={"black"}>
            Upgrade your business with HPNPAY digital solutions{" "}
          </Text>
          <br />
          This service is free for all our partner retailers. HPNPAY Digital
          Suite helps you scale your business by adopting the right digital
          tools, from multiple digital payment options to digitized customer
          ledger to manage payments, reconcilliation and customer credits better
        </Text> */}
                </Box>
                <Flex marginTop={"10px"}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Towards the Next Step in Payments - HPNPay, Your Store's Next Digital Leap
                            </Text>

                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                भुगतानों के साथ अगले कदम की ओर - HPNPay, आपकी दुकान का अगला डिजिटल कदम


                            </Text>

                            <Text fontSize={"24px"}>
                                Digital services shouldn't be limited to only those who have digital money. Offer customers in your area access to digital products from our partner brands. Use the HPNPAY platform to offer micro content and satchetized services, help customers digitize cash at your store and enable easy access to these services
                            </Text>
                        </Box>


                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Gift Card Services
                            </Text>
                            <Text fontSize={"24px"}>
                                Let customers purchase gift cards from popular e-commerce brands like Amazon, Flipkart, Myntra, Pantaloons, etc. from your store. Earn commission on card issuance and on redemption
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
                        <Image ml={"30px"} src={Product7} width={"400"} height={'380'} />
                    </Box>
                </Flex>

                {/* eight */}
                {/* fourth */}
                {/* //page Second */}
                <Box width={"80%"} margin={"auto"}>
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Essential Services
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Provide essential services to customers and earn more{" "}
                        </Text>
                        <br />
                        Help your customers with their tax filings and PAN requirements from your shop and help bring them into the formal financial fold


                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
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
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>

                                PAN Card
                                {" "}
                            </Text>
                            <Text fontSize={"24px"} >
                                In just 2 hours, customers can receive their PAN cards from your shop. Provide digital and physical PAN card registration from your shop

                            </Text> </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Tax

                            </Text>
                            <Text fontSize={"24px"}>
                                Help customers file taxes from your shop and earn easily during tax filing season
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
                <Box marginTop={""} width={"80%"} margin={"auto"}>
                    <Text fontSize={"5rem"} color={"#052B60"} as={"span"}>
                        Credit Services
                    </Text>
                    <Text fontSize={"2rem"}>
                        <Text fontWeight={"bold"} color={"black"}>
                            Tailored credit services for all{" "}
                        </Text>
                        <br />
                        Unlock growth opportunities with business loans. Access funds to expand, upgrade, or meet any business needs. Offer loans to your customers without any branch visit. Simplify loan processes, enabling convenience and fostering mutual profitability for your business and valued customers.
                    </Text>
                </Box>
                <Flex marginTop={"80px"}>
                    <Flex
                        flexDirection={"column"}
                        gap={"30px"}
                        width={"50%"}
                        marginTop={"40px"}
                        marginLeft={"9rem"}
                    >
                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Business Loan
                            </Text>

                            <Text fontSize={"24px"}>
                                Easy, unsecured business loans for retailers at affordable rates to ensure business growth.
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>

                                Two-Wheeler Loan
                            </Text>
                            <Text fontSize={"24px"}>
                                Instant and affordable loans for you and your customers to help bring home your dream two-wheeler.
                            </Text>
                        </Box>

                        <Box>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>Home Loan</Text>
                            <Text fontSize={"24px"}>
                                An instant solution for all financial needs. Avail quick and
                                affordable personal loans for all life goals, including medical
                                emergencies, weddings, or to fund children’s education.

                            </Text></Box>

                        <Box marginBottom={'2rem'}>
                            <Text color={"#052B60"} fontSize={"34px"} fontWeight={"700"}>
                                Gold Loan
                            </Text>
                            <Text fontSize={"24px"}>
                                Quick, secure gold loans with minimum documentation for you and your
                                customers.
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
                        <Image ml={"10px"} src={Product9} width={"1000"} height={'380'} />
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