import React, { useState } from "react";
import { Stack, HStack, VStack, Flex, useBreakpointValue, InputGroup, InputLeftElement, Input, Checkbox, useDisclosure, Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Solution1 from "../images/solution_img/Solution1.png"
import Solution2 from "../images/solution_img/Solution2.png"
import Solution3 from "../images/solution_img/Solution3.png"

import {
    Select,
    FormLabel,
    FormControl,
    Box,
    Image,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
    ModalOverlay,
    Lorem,
    ModalBody,
    ModalHeader,
    ModalContent,
    Modal,
    ModalCloseButton,

} from '@chakra-ui/react';


const Solution = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const openModal = () => setIsOpen(true);
    const openModal2 = () => setIsOpen2(true);
    const openModal3 = () => setIsOpen3(true);
    const closeModal = () => setIsOpen(false);
    const closeModal2 = () => setIsOpen2(false);
    const closeModal3 = () => setIsOpen3(false);



    return (
        <Box paddingTop={"2rem"} fontSize={"1.5rem"} margin={'100px'}>
            <Box style={{ display: "flex", justifyContent: 'space-around' }} className='main=solution-component'>
                <Box style={{ flexBasis: "50%" }}>
                    <h1 style={{ color: "#052B60", fontWeight: "bold", fontSize: '3rem' }}>Our Solutions</h1>
                    <p>Think last mile. Think PayNearby. From optimizing
                        cash collection processes to enabling market
                        expansion, businesses of all sizes use HPNPay's
                        proprietary last mile technology and deeply entrenched retail network of 50,00,000+
                        retailers to grow their business</p>
                </Box>
                <Box style={{ background: "#43D5B7", borderRadius: "15px", padding: "2px" }} width={"40%"} height={"20rem"} fontSize={"2rem"} >
                    <FormControl padding={"2rem"}>
                        <FormLabel style={{ marginTop: "4px", fontSize: "25px" }}>Choose the right solution by Industry Type</FormLabel>
                        <Select style={{ background: "white", height: "3.5rem", }} placeholder='Search by Industy'>
                            <option>chemica/fertiliser</option>
                            <option>Ecommerce</option>
                            <option>FMCG & pharma</option>
                            <option> Food Delivery</option>
                            <option>Insurance</option>
                            <option>Network and Marketing</option>
                            <option>OTT</option>
                            <option>Payment and Finance</option>
                        </Select>
                        <Select style={{ background: "white", height: "3.5rem", marginTop: "1.3rem" }} placeholder='Select Solution' />

                        <Button style={{ background: "#278DA6", marginTop: "1rem" }}>Submit</Button>
                    </FormControl>
                </Box>
            </Box>
            <Card style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} width={"100%"} margin={"auto"} marginTop={"8rem"} boxShadow={"none"}>

                <CardBody>
                    <Image ml={'20px'} src={Solution1} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Digitize cash collection
                        </Heading>
                        <Text>
                            Enable customers and collection agents to deposit cash at HPNPay's extensive last mile network and optimize collection cost by upto 50%
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            <Button onClick={openModal} >
                                Learn More
                            </Button>
                        </Text>
                        <Modal isOpen={isOpen} onClose={closeModal} size='6xl'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{'Digitize cash collection'}</ModalHeader>
                                <ModalCloseButton />
                                <Box margin={'2rem'}>
                                    <Text fontSize={'1.1rem'}>
                                        Adopting HPNPay for cash collections could lead to reduced handling costs, increased security, and improved operational efficiencies. The key to success with digital cash collection systems like HPNPay is to ensure that all stakeholders — from your internal teams to the end customers — understand and are comfortable with the new process. Regularly assessing the system's performance and making necessary adjustments will help maintain the reliability and efficiency of the cash collection process, ultimately leading to cost savings.<br /><br />

                                        <Text color={'black.900'} fontWeight={'700'}> 1. Integration with HPNPay:</Text>
                                        - Partner with HPNPay to use their digital infrastructure.
                                        - Seamlessly integrate their system with your financial operations.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>
                                            2. Onboarding and Training:

                                        </Text>
                                        - Onboard your team and any collection agents on how to use the HPNPay platform.
                                        - Provide thorough training to ensure a clear understanding of the cash deposit mechanism.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            3. Customer Education Initiative:
                                        </Text>
                                        - Launch a communication strategy to educate your customers about HPNPay and how they can use it for cash deposits.
                                        - Ensure educational materials are clear and accessible.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            4. Streamlined Customer Experience:
                                        </Text>

                                        - Work with HPNPay to provide a user-friendly process for customers.
                                        - Offer support channels to assist customers with the new system.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            5. Real-Time Transaction Tracking:
                                        </Text>

                                        - Make use of HPNPay’s tracking capabilities to monitor cash flow in real-time.
                                        - Ensure the system supports straightforward reconciliation.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            6. Compliance and Security:
                                        </Text>

                                        - Ensure all cash transactions through HPNPay are compliant with local and international financial regulations.
                                        - Implement robust security measures to safeguard against fraud.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            7. Revise Fee Structure:
                                        </Text>

                                        - Reevaluate any applicable fees to encourage the use of HPNPay over traditional cash handling methods.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            8. Incentives HPNPay Agents:
                                        </Text>

                                        - Develop incentive programs for HPNPay agents to ensure high service levels for your customers.<br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            9. Feedback Loops:
                                        </Text>

                                        - Implement a feedback system to continually gather insights from users and agents.
                                        - Use the feedback for ongoing improvements to the cash deposit process.
                                        <br />
                                        <Text color={'black.900'} fontWeight={'700'}>

                                            10. Data-Driven Optimisation:
                                        </Text>

                                        - Analyze the collected data to understand usage patterns and identify potential cost savings.
                                        - Use insights from data analytics to enhance efficiency and reduce costs further.

                                    </Text>
                                </Box>
                                <ModalBody>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Stack>
                </CardBody>


                <CardBody>

                    <Image ml={'20px'} src={Solution2} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Increase market penetration at the last mile
                        </Heading>
                        <Text>
                            Distribute sachetize content through HPNPay's last mile network and enable digitization of micro cash exchange to digically reach 400 million+ last mile audience
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            <Button onClick={openModal2}>Learn More</Button>
                        </Text>
                        <Modal isOpen={isOpen2} onClose={closeModal2} size='6xl'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{'Increase Market Penetration at the Last Mile with HPNPay'}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>

                                            <Text color={'black.900'} fontWeight={'700'}> 1. Network Utilisation:</Text>
                                            - Leverage HPNPay's network to increase market penetration, reaching out to the last mile consumers effectively.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>
                                                2. Sachetized Content Distribution:

                                            </Text>
                                            - Offer content in small, affordable packets (sachetized content) through HPNPay's distribution channels, ensuring it's suitable for the digital consumption habits of the last mile audience.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                3. Digitising Micro Cash Exchanges:
                                            </Text>
                                            - Employ HPNPay's platform to convert micro cash transactions into digital currency, facilitating small-value transactions for digital content and services.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                4. Expanding Reach to Last Mile Audience
                                            </Text>

                                            - Utilize HPNPay's infrastructure to digitally reach over 400 million last mile users, delivering value and driving engagement through relevant content.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                5. Agent Empowerment and Incentives:

                                            </Text>

                                            - Empower HPNPay agents with tools and incentives to facilitate the distribution of sachetized content and support the digitization of cash transactions.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                6. Consumer Education and Engagement:
                                            </Text>

                                            - Execute targeted campaigns to educate the last mile consumers about the benefits of digital transactions through HPNPay and the availability of sachetized content.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                7. Feedback Loop Establishment:
                                            </Text>

                                            - Establish a feedback loop with consumers and HPNPay agents to refine the distribution strategy and content offerings continuously.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                8. Content and Service Scalability:
                                            </Text>

                                            - Plan for scalable content delivery, ensuring that as the consumer base grows, the HPNPay platform can handle increased demand and varied content requirements.
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                9. Compliance and Security:
                                            </Text>

                                            - Ensure all services provided through HPNPay adhere to the necessary legal and regulatory requirements, maintaining high standards of security and trust.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                10. Impact Measurement:
                                            </Text>

                                            - Measure the social and economic impact of the digitisation initiative on the last mile audience to gauge success and areas for improvement.
                                            <Text>
                                                By adjusting the strategy to integrate HPNPay, your goal remains to empower last mile consumers with digital access to content and facilitate small transactions, which could lead to greater financial inclusion and content democratization.
                                            </Text>
                                        </Text>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Stack>
                </CardBody>


                <CardBody>

                    <Image ml={'20px'} src={Solution3} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Digitize order placement and payment
                        </Heading>
                        <Text>
                            Enable 3X more efficiency in order processing and cash flow by digitizing order placement and payment across the retail value chain
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            <Button onClick={openModal3}>Learn More</Button>
                        </Text>
                        <Modal isOpen={isOpen3} onClose={closeModal3} size='6xl'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{'Digitise Order Placement and Payment with HPNPay'}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box margin={'2rem'}>
                                        <Text fontSize={'1.1rem'}>

                                            <Text color={'black.900'} fontWeight={'700'}>1. Digital Order System Implementation:</Text>
                                            - Implement a digital ordering system through HPNPay to streamline the order placements from retailers.
                                            - Retailers can use HPNPay’s platform to place orders seamlessly, which helps in reducing manual entry and errors.                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>
                                                2. Streamlined Payment Process:

                                            </Text>
                                            - Facilitate digital payments via HPNPay, ensuring quicker order processing and improved cash flow.
                                            - Offer retailers multiple payment options, such as mobile payments, bank transfers, or digital wallets through HPNPay.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                3. Inventory Management Optimisation:
                                            </Text>
                                            - Use the data from HPNPay for real-time inventory management, enabling better stock control and demand forecasting.
                                            - Set up automated reordering through HPNPay based on stock levels to ensure inventory optimisation.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                4. Enhanced Cash Flow Management:
                                            </Text>

                                            - With faster transaction processing via HPNPay, cash flow is improved due to quicker settlements.
                                            - Real-time financial visibility for retailers could be provided through HPNPay’s digital ledger.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                5. Increased Operational Efficiency:
                                            </Text>

                                            - HPNPay's digitisation of orders and payments can lead to more efficient supply chain operations, trimming the time from order placement to delivery.
                                            - Cut down on administrative tasks related to reconciliation and accounting through HPNPay’s automated systems.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                6. Secure Transactions:
                                            </Text>

                                            - Utilize HPNPay’s secure payment gateway to protect all transactions, building trust with retailers.
                                            - Apply advanced cybersecurity protocols to safeguard financial data.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                7. Data Analytics for Improved Decision Making:
                                            </Text>

                                            - Leverage transaction data collected through HPNPay to understand purchasing trends and make data-driven decisions.
                                            - Use analytics to refine supply chain strategies to better align with retailer demands.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                8. Scalability and Flexibility:
                                            </Text>

                                            - Ensure the HPNPay platform can handle scaling operations, managing increased transactions and integrating new functionalities when necessary.
                                            - Keep the system flexible to swiftly adapt to retail market changes or shifts in consumer behavior.
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                9. Training and Support:
                                            </Text>

                                            - Conduct thorough training for retailers on utilizing HPNPay for placing orders and completing payments.
                                            - Provide a solid support system to help troubleshoot any issues during the transition to digital processes.
                                            <br />
                                            <Text color={'black.900'} fontWeight={'700'}>

                                                10. Feedback Loop and Continuous Improvement:
                                            </Text>

                                            - Establish a constant feedback mechanism with retailers using HPNPay to fine-tune the digital ordering and payment processes.
                                            - Continually iterate based on retailer usage and feedback to ensure that efficiency improvements are consistent and impactful.
                                            <Text>
                                                Adopting HPNPay for digital order placement and payment processes is expected to significantly enhance the efficiency of order processing and cash flow within the retail value chain, resulting in a more streamlined, cost-effective, and responsive supply chain ecosystem.
                                            </Text>
                                        </Text>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Stack>
                </CardBody>
            </Card>

        </Box >

    )
};

export default Solution;