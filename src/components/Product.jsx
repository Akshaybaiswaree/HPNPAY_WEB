import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  Center,
} from "@chakra-ui/react";
import Product1 from "../images/product_img/onApp.png";
import Product2 from "../images/product_img/Aips.png";
import Product3 from "../images/product_img/digitalpayment.png";
import ProductTree from "../images/product_img/customerkhata.png";
import Product4 from "../images/product_img/insurance.png";
import Product5 from "../images/product_img/carbooking.png";
import Product6 from "../images/product_img/utilitybill.png";
import Product7 from "../images/product_img/partner.png";
import Product8 from "../images/product_img/tax.png";
import Product9 from "../images/product_img/empowerment.png";
import Product10 from "../images/product_img/buisnessExpansion.png";
import Product11 from "../images/product_img/motorcycleAcquisition.png";
import Product12 from "../images/product_img/homeFinancing.png";
import Product13 from "../images/product_img/goldasset.png";
import goldLoan from "../images/footer/goldinvestment.jpg";
import { Link } from "react-router-dom";
import flightbooking from "../images/product_img/flightbooking.png";

export default function Product() {
  //code for show page froom top.
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      <Box mx="1rem" mt="0.5rem">
        {/* page one */}
        <Stack
          direction={{ base: "column", md: "row" }}
          width={{ base: "100%", md: "95%" }}
          mx={{ base: "0.5rem", md: "2rem" }}
          paddingY="2rem"
        >
          <Flex p="0.2rem" flex={1} align={"center"}>
            <Stack spacing={6} w={{ base: "95vw", md: "45vw" }}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}>
                <Text color={"#052B60"} as={"span"}>
                  One App
                </Text>{" "}
                <br />{" "}
                <Text color={"#052B60"} as={"span"}>
                  Many Services
                </Text>{" "}
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "2xl" }}
                color={"gray.500"}
                align="justify"
                mx="0.5rem"
              >
                Offer products and services from your shop and earn an
                additional Rs. per month. No working capital required.
                <br />
                <Text fontWeight={"bold"} color={"#052B60"} align="justify">
                  Upgrade your shop. Be the one stop banking and digital service
                  provider in your area/
                </Text>
              </Text>
              <Stack direction={{ base: "row", md: "row" }} spacing={4}>
                <Link to="/income-calculator">
                  <Button
                    size="md"
                    height="60px"
                    width={{
                      base: "8rem",
                      sm: "3rem",
                      md: "6rem",
                      lg: "12rem",
                    }}
                    border="2px"
                    borderColor="blue.500"
                  >
                    <Text fontSize={{ base: "14px", md: "10px", lg: "12px" }}>
                      Income Calculator
                    </Text>
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="md"
                    height="60px"
                    width={{
                      base: "8rem",
                      sm: "3rem",
                      md: "6rem",
                      lg: "12rem",
                    }}
                    // border='2px'
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                  >
                    <Text fontSize={{ base: "14px", md: "10px", lg: "12px" }}>
                      Join HPNPAY
                    </Text>
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} p="0.2rem" align={"center"}>
            <Image
              src={Product1}
              marginTop={"3rem"}
              width={{ base: "25rem", md: "35rem" }}
              height={"30rem"}
              borderRadius="0.5rem"
            />
          </Flex>
        </Stack>

        <Box background={"#f6f9fc"}>
          <Box
            width={{ base: "100%", md: "90%" }}
            marginX={{ base: "0.5rem", md: "2rem" }}
            paddingY="2rem"
          >
            <Text
              fontSize={{ base: "1.8rem", md: "3rem" }}
              color="#052B60"
              as="span"
            >
              "Banking Services Reinvented"
            </Text>
            <Text
              fontSize={{ base: "1.2rem", md: "1.5rem" }}
              marginTop="1rem"
              w={{ base: "90vw" }}
            >
              <Text
                fontWeight="bold"
                color="black"
                px="0.1rem"
                align="justify"
                mr={{ base: "0.5rem", md: "1rem" }}
              >
                At HPNPay, we understand the value of trust in the world of
                digital transactions.
              </Text>
              <Text fontWeight="bold" color="black" px="0.1rem">
                "Your Trust, Our Commitment: Digital Excellence, Delivered
                Securely."
              </Text>
            </Text>
            <Link to="/bankingservices">
              <Button
                fontSize="1rem"
                as="span"
                flex="1"
                textAlign="left"
                marginTop={{ base: "1rem", md: "2rem" }}
                onClick={scrollToTop}
                colorScheme="blue"
              >
                Read more
              </Button>
            </Link>
          </Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            margin={{ base: "1rem", md: "0.2rem" }}
          >
            <Box
              className="banking-image"
              marginBottom={{ base: "2rem", md: "1rem" }}
              width={{ base: "100%", md: "45%" }}
              marginLeft={{ base: "0", md: "2rem" }}
            >
              <Image
                src={Product2}
                width={{ base: "25rem", md: "35rem" }}
                height={"30rem"}
                borderRadius="0.5rem"
              />
            </Box>
            <Flex
              flexDirection="column"
              gap="20px"
              width={{ base: "100%", md: "55%" }}
              mx={{ base: "1rem", md: "2rem" }}
              mb="1rem"
            >
              <Box>
                <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                  AePS (Aadhaar enabled Payment Services)
                </Text>
                <Text
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  align="justify"
                  mr={{ base: "1rem" }}
                >
                  Capitalize on our robust and time-honored platform that boasts
                  a stellar 99.9% success rate.
                  <br />
                  Empower Your Customers: Seamlessly assist customers in
                  withdrawing Direct Benefit Transfer (DBT), crucial government
                  relief funds, and other monetary assets directly from their
                  bank accounts.
                  <br />
                  High-Tech Authentication: Leveraging the power of biometric
                  verification through Aadhaar's fingerprint technology.
                </Text>
              </Box>
              <Box>
                <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                  Micro ATM Extravaganza Universal Banking Support:
                </Text>
                <Text
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  align="justify"
                  mr={{ base: "1rem" }}
                >
                  A remarkable capability to offer cash withdrawal services,
                  integrating effortlessly with debit cards across a vast
                  network of over 1000+ banks.
                </Text>
              </Box>
              <Box>
                <Text color={"#052B60"} fontSize={"1.7rem"} fontWeight={"700"}>
                  Real-time Money Transfer Flawless Transactions:
                </Text>
                <Text
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  align="justify"
                  mr={{ base: "1rem" }}
                >
                  Boundless Possibilities: Facilitate your customers in
                  transmitting money from corner to corner within India,
                  instantly, 24/7. An added perk? They can conveniently deposit
                  cash into their accounts too.
                  <br />
                  Revolutionize your financial game and offer your customers
                  unmatched conveniences!
                </Text>
              </Box>

              <Box mr={{ base: "1.2rem", md: "0rem" }}>
                <Stack
                  marginTop={{ base: "2rem", sm: "4rem" }}
                  // spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    width={{ base: "100%", sm: "300px" }}
                    height="4rem"
                  />
                  <Button
                    width={{ base: "100%", sm: "150px" }}
                    maxWidth={{ sm: "150px" }}
                    height="4rem"
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                    position={{ base: "static", sm: "static" }}
                    left={{ base: "0", sm: "400px" }}
                    marginTop={{ base: "1rem", sm: "0" }}
                  >
                    Get in touch
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box
          width={{ base: "100%", md: "90%" }}
          // margin="auto"
          marginTop={{ base: "rem", md: "rem" }}
          padding={{ base: "1rem", md: "1rem" }}
        >
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            color="#052B60"
            as="span"
           
            className="digitalsuite-side"
          >
            Digital Suite
          </Text>
          <Text fontSize={{ base: "1.2rem", md: "1.5rem" }} align="justify">
            <Text fontWeight="bold" color="black">
              HPNPay: Empowering Insurance, Simplifying Choices
            </Text>
            Welcome to HPNPay, your comprehensive digital insurance hub. We're
            not just any online insurance portal; we represent a seamless blend
            of technology, convenience, and commitment to our retailer and
            distributor agent partners.
          </Text>
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          marginTop={{ base: "1rem", md: "2rem" }}
          paddingX={{ base: "1rem", md: "4rem" }}
        >
          <Flex
            flexDirection="column"
            gap={{ base: "2rem", md: "30px" }}
            width={{ base: "100%", md: "50%" }}
            marginLeft={{ base: "0rem", md: "1.5rem" }}
          >
            {/* Content for Why Choose HPNPay */}
            <Box>
              <Text color="#052B60" fontSize="1.7rem" fontWeight="700">
                Why Choose HPNPay?
              </Text>
              <Text fontSize="1.3rem" align="justify">
                We offer a range of affordable general insurance plans,
                including bike insurance and mobile device protection plans
              </Text>
              <Link to="/digitalsuite">
                <Button
                  fontSize="1rem"
                  as="span"
                  flex="1"
                  textAlign="left"
                  marginTop={{ base: "1rem", md: "2rem" }}
                  onClick={scrollToTop}
                  colorScheme="blue"
                >
                  Read more
                </Button>
              </Link>
            </Box>

            {/* Content for Customer Khata */}
            <Box>
              <Text color="#052B60" fontSize="1.7rem" fontWeight="700">
                Customer Khata: Revolutionizing Credit Management
              </Text>
              <Text fontSize="1.3rem" align="justify">
                In the modern business landscape, efficiency and accuracy are
                paramount. That's why Customer Khata is here to redefine how you
                manage your customer credits.
              </Text>
              <Link to="/customkhata">
                <Button
                  fontSize="1rem"
                  as="span"
                  flex="1"
                  textAlign="left"
                  marginTop={{ base: "1rem", md: "2rem" }}
                  onClick={scrollToTop}
                  colorScheme="blue"
                >
                  Read more
                </Button>
              </Link>
            </Box>

            {/* Content for UPI QR */}
            <Box>
              <Text color="#052B60" fontSize="1.7rem" fontWeight="700">
                UPI QR: The Future of Digital Payments
              </Text>
              <Text fontSize="1.3rem" align="justify">
                In today's digital age, seamless transactions are no longer a
                luxury; they're a necessity. With UPI QR, we're making that
                vision a reality.
              </Text>
              <Link to="/upi">
                <Button
                  fontSize="1rem"
                  as="span"
                  flex="1"
                  textAlign="left"
                  marginTop={{ base: "1rem", md: "2rem" }}
                  onClick={scrollToTop}
                  colorScheme="blue"
                >
                  Read more
                </Button>
              </Link>
            </Box>

            <Box mr={{ base: "1.2rem", md: "0rem" }}>
              <Stack
                marginTop={{ base: "2rem", sm: "4rem" }}
                // spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  width={{ base: "100%", sm: "300px" }}
                  height="4rem"
                />
                <Button
                  width={{ base: "100%", sm: "150px" }}
                  maxWidth={{ sm: "150px" }}
                  height="4rem"
                  _hover={{ bg: "blue.600" }}
                  background={"#156DB1"}
                  color={"white"}
                  position={{ base: "static", sm: "static" }}
                  left={{ base: "0", sm: "400px" }}
                  marginTop={{ base: "1rem", sm: "0" }}
                >
                  Get in touch
                </Button>
              </Stack>
            </Box>
          </Flex>

          {/* Images */}
          <Box marginTop={{ base: "2rem", md: "0" }}>
            <Image
              ml={{ base: "0", md: "1rem" }}
              src={ProductTree}
              width={{ base: "100%", md: "33rem" }}
              height={{ base: "12rem", md: "18rem" }}
              borderRadius="0.5rem"
            />
            <br />
            <Image
              ml={{ base: "0", md: "1rem" }}
              src={Product3}
              width={{ base: "100%", md: "33rem" }}
              height={{ base: "12rem", md: "18rem" }}
              borderRadius="0.5rem"
            />
          </Box>
        </Flex>

        {/* fourth  gold investment*/}
        <Box
          height={{ base: "12rem", md: "15rem" }}
          width={{ base: "100vw" }}
          margin={{ base: "0.3rem", md: "1rem" }}
          overflow={"hidden"}
          paddingTop={{ base: "10px", md: "40px" }}
        >
          <Image
            src={goldLoan}
            width={{ base: "90%", md: "80rem" }}
            mx="0.1rem"
            mt={{ base: "1rem", md: "0rem" }}
            height={{ base: "8rem", md: "12rem" }}
            boxShadow={"dark-lg"}
            borderRadius="0.5rem"
          />
        </Box>

        {/* insurance page */}
        <Box mx={{ base: "0.2em", md: "0.5rem" }}>
          <Box background={"#f6f9fc"} height="20rem">
            <Box
              padding={{ base: "1rem", md: "2rem" }}
              className="insurance-data"
              width={{ base: "100%", md: "90%" }}
            >
              <Text
                fontSize={{ base: "2rem", md: "3rem" }}
                color="#052B60"
                as="span"
              >
                Insurance
              </Text>
              <Text fontSize={{ base: "1.2rem", md: "1.5rem" }}>
                <Text fontWeight="bold" color="black">
                  Journey to Digital Freedom - HPNPay, Your Store's Digital
                  Companion
                </Text>
                <Text fontWeight="bold" color="black">
                  डिजिटल स्वतंत्रता का सफर - HPNPay, आपकी दुकान का डिजिटल साथी
                </Text>
                <br />
                We offer a range of affordable general insurance plans,
                including bike insurance and mobile device protection plans
              </Text>
            </Box>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              marginTop={{ base: "2rem", md: "3rem" }}
            >
              <Box>
                <Image
                  className="insurance-image"
                  ml={{ base: "0", md: "100px" }}
                  src={Product4}
                  width={{ base: "100%", md: "40rem" }}
                  height={{ base: "auto", md: "25rem" }}
                  paddingLeft={{ base: "0rem", md: "0rem" }}
                  borderRadius="0.5rem"
                />
              </Box>
              <Box
                width={{ base: "100%", md: "50%" }}
                gap={{ md: "3rem" }}
                marginTop={{ base: "2rem", md: "40px" }}
                marginLeft={{ base: "0", md: "6rem" }}
                marginRight={{ base: "0", md: "5rem" }}
              >
                <Box
                  marginRight={{ base: "1rem", md: "5rem" }}
                  marginLeft={{ base: "1rem", md: "5rem" }}
                >
                  <Text
                    color="#052B60"
                    fontSize={{ base: "1.5rem", md: "1.7rem" }}
                    fontWeight="700"
                  >
                    General
                  </Text>
                  <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                    We offer a range of affordable general insurance plans,
                    including bike insurance and mobile device protection plans
                  </Text>

                  <Box mr={{ base: "1.2rem", md: "0rem" }}>
                    <Stack
                      marginTop={{ base: "2rem", sm: "4rem" }}
                      // spacing={{ base: 4, sm: 6 }}
                      direction={{ base: "column", sm: "row" }}
                    >
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        width={{ base: "100%", sm: "300px" }}
                        height="4rem"
                      />
                      <Button
                        width={{ base: "100%", sm: "150px" }}
                        maxWidth={{ sm: "150px" }}
                        height="4rem"
                        _hover={{ bg: "blue.600" }}
                        background={"#156DB1"}
                        color={"white"}
                        position={{ base: "static", sm: "static" }}
                        left={{ base: "0", sm: "400px" }}
                        marginTop={{ base: "1rem", sm: "0" }}
                      >
                        Get in touch
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>

          {/* page 5 */}
          <Box
            className="travel-data"
            padding={{ base: "1rem", md: "3em" }}
            marginTop={{ base: "40rem", md: "30rem" }}
            width={{ base: "100%", md: "90%" }}
            align="justify"
          >
            <Text
              fontWeight={"600"}
              fontSize={{ base: "2rem", md: "3rem" }}
              color="#052B60"
              as="span"
              align="justify"
            >
              Travel
            </Text>
            <Text fontSize={{ base: "1.2rem", md: "1.5rem" }} align="justify">
              <Text fontWeight="bold" color="black">
                Become the one-stop travel Loan agency in your area{" "}
              </Text>

              <Text align="justify" fontSize={{ base: "1rem", md: "1.3rem" }}>
                An IATA approved travel service provider, we offer you the most
                comprehensive range of travel products and services at very
                affordable rates and great commissions. Offer rail, flights,
                hotels, holidays and more from your shop
              </Text>
            </Text>
          </Box>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            marginTop={{ base: "2rem", md: "2rem" }}
            margin={{ base: "1rem", md: "3.6rem" }}
          >
            <Flex
              flexDirection="column"
              gap={{ base: "4rem", md: "10rem" }}
              width={{ base: "100%", md: "50%" }}
              marginTop={{ base: "0.4rem", md: "1rem" }}
              // marginLeft={{ base: "1rem", md: "4rem" }}
            >
              {/* Content for Car Booking */}
              <Box>
                <Text
                  color="#052B60"
                  fontSize={{ base: "1.5rem", md: "1.7rem" }}
                  fontWeight="700"
                >
                  Car Booking
                </Text>
                <Text fontSize={{ base: "1rem", md: "1.3rem" }} align="justify">
                  Help your customers skip the hassle of queues and waiting
                  times. With our intuitive app interface, offer quick and
                  efficient car booking services right from your shop. For every
                  booking made, enjoy a profitable commission.
                </Text>
              </Box>

              {/* Content for Flight Booking */}
              <Box>
                <Text
                  color="#052B60"
                  fontSize={{ base: "1.5rem", md: "1.7rem" }}
                  fontWeight="700"
                >
                  Flight Booking
                </Text>
                <Text fontSize={{ base: "1rem", md: "1.3rem" }} align="justify">
                  Leverage the power of an IATA-accredited platform to offer
                  flight ticket bookings. Provide your customers with
                  competitive rates and stand out with top-notch service. Plus,
                  benefit from excellent commissions on each booking.
                </Text>

                <Box m={{ base: "1rem", md: "0rem" }}>
                  <Stack
                    marginTop={{ base: "2rem", sm: "4rem" }}
                    // spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      width={{ base: "100%", sm: "300px" }}
                      height="4rem"
                    />
                    <Button
                      width={{ base: "100%", sm: "150px" }}
                      maxWidth={{ sm: "150px" }}
                      height="4rem"
                      _hover={{ bg: "blue.600" }}
                      background={"#156DB1"}
                      color={"white"}
                      position={{ base: "static", sm: "static" }}
                      left={{ base: "0", sm: "400px" }}
                      marginTop={{ base: "1rem", sm: "0" }}
                    >
                      Get in touch
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Flex>

            {/* Images */}
            <Box>
              <Image
                ml={{ base: "0", md: "40px" }}
                mt={{ base: "1rem", md: "0rem" }}
                src={Product5}
                width={{ base: "100%", md: "33rem" }}
                height="18rem"
                borderRadius="0.5rem"
              />
              <br />
              <Image
                ml={{ base: "0", md: "40px" }}
                src={flightbooking}
                width={{ base: "100%", md: "33rem" }}
                height="18rem"
                borderRadius="0.5rem"
              />
            </Box>
          </Flex>

          {/* <Utility></Utility> */}
          <Box background={"#f6f9fc"} width={{ base: "100%", md: "100%" }}>
            <Box
              className="utility"
              paddingTop={{ base: "1rem", md: "2rem" }}
              width={{ base: "90%", md: "80%" }}
              marginTop={{ base: "1rem", md: "2rem" }}
            >
              <Text
                fontSize={{ base: "2rem", md: "3rem" }}
                color="#052B60"
                as="span"
              >
                Utility Bill Payments Made Easy
              </Text>
              <Text
                fontSize={{ base: "1rem", md: "1.5rem" }}
                align="justify"
                width={{ base: "90%", md: "100%" }}
              >
                Enable your customers to clear their monthly Gas, Electricity,
                and Water bills right from your store. By providing this
                essential service, not only do you make their lives simpler, but
                you also guarantee a steady income stream for your business.
              </Text>
            </Box>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              margin={{ base: "1rem ", md: "1rem" }}
              align={{ base: "center" }}
              justifyContent="center"
              mb={{ base: "0rem" }}
            >
              {/* <Box className="travel-image" mb="1em">
                <Image
                  ml={{ base: "0rem", md: "2rem" }}
                  src={Product6}
                  // width={{ base: "100%", md: "45rem" }}
                  height="auto"
                  borderRadius="0.5rem"
                />
              </Box> */}
              <Box width={{ base: "100%", md: "40%" }} mb={{base:"0.5rem", md:"1rem"}}>
              <Image
                // marginLeft={{ base: "0rem", md: "2rem" }}
                src={Product6}
                height={"auto"}
                borderRadius="0.5rem"
                marginTop={{ base: "2rem", md: "0" }}
              />
            </Box>
              <Flex
                flexDirection="column"
                gap="30px"
                width={{ base: "100%", md: "50%" }}
                mx={{ base: "0", md: "1rem" }}
                mb="1rem"
                justifyContent="center"
              >
                {/* Content for One-Stop for Credit Card Settlements */}
                <Box ml={{ base: "0.2rem", md: "0rem" }}>
                  <Text
                    color="#052B60"
                    fontSize={{ base: "1.5rem", md: "1.7rem" }}
                    fontWeight="700"
                  >
                    One-Stop for Credit Card Settlements
                  </Text>
                  <Text
                    fontSize={{ base: "1rem", md: "1.3rem" }}
                    align="justify"
                  >
                    Cater to a broad base by facilitating credit card payments
                    across 30+ banks. With monthly billing cycles, this service
                    not only aids your clientele but also promises you a regular
                    revenue boost.
                  </Text>
                </Box>

                {/* Content for Trusted Cash Collection Point */}
                <Box>
                  <Text
                    color="#052B60"
                    fontSize={{ base: "1.5rem", md: "1.7rem" }}
                    fontWeight="700"
                  >
                    Trusted Cash Collection Point
                  </Text>
                  <Text
                    fontSize={{ base: "1rem", md: "1.3rem" }}
                    align="justify"
                  >
                    Position your store as a reliable hub for cash collection.
                    Whether it's customers wanting to deposit or collection
                    agents gathering EMIs, with every transaction, you get a
                    piece of the pie.
                  </Text>
                </Box>

                {/* Content for Timely LIC Premium Services */}
                <Box>
                  <Text
                    color="#052B60"
                    fontSize={{ base: "1.5rem", md: "1.7rem" }}
                    fontWeight="700"
                  >
                    Timely LIC Premium Services
                  </Text>
                  <Text
                    fontSize={{ base: "1rem", md: "1.3rem" }}
                    align="justify"
                  >
                    Be the helping hand customers need for their LIC premium
                    payments, be it monthly, quarterly, half-yearly, or
                    annually. By offering this vital service, you not only
                    assist them but also cement a recurring income channel for
                    your store.
                  </Text>
                </Box>

                <Box mr={{ base: "1.5rem", md: "0rem" }}>
                  <Stack
                    marginTop={{ base: "2rem", sm: "4rem" }}
                    // spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      width={{ base: "100%", sm: "300px" }}
                      height="4rem"
                    />
                    <Button
                      width={{ base: "100%", sm: "150px" }}
                      maxWidth={{ sm: "150px" }}
                      height="4rem"
                      _hover={{ bg: "blue.600" }}
                      background={"#156DB1"}
                      color={"white"}
                      position={{ base: "static", sm: "static" }}
                      left={{ base: "0", sm: "400px" }}
                      marginTop={{ base: "1rem", sm: "0" }}
                    >
                      Get in touch
                    </Button>
                  </Stack>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
        {/* page 5 */}

{/* Partner services */}
        <Box width={{ base: "100%", md: "90%" }}>
          <Box marginTop={{ base: "1rem", md: "2rem" }}>
            <Text
              fontWeight={"600"}
              marginLeft={{ base: "1rem", md: "2rem" }}
              fontSize={{ base: "2rem", md: "3rem" }}
              color={"#052B60"}
              paddingLeft={{ base: "1rem", md: "2rem" }}
              
            >
              Partner Services
            </Text>
          </Box>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ ase:"space-between ",md: "space-between" }}
            alignItems="center"
            marginTop={{ base: "10px", md: "40px" }}
            
            mx={{base:"0.2rem", md:"1rem"}}
          >
            <Box
              width={{ base: "100%", md: "48%" }}
              marginLeft={{ base: "1rem", md: "5rem" }}
              marginRight={{ base: "1rem", md: "0" }}
              marginBottom={{ base: "2rem", md: "0" }}
             
            >
              <Box marginBottom={{ base: "2rem", md: "0" }}>
                <Text
                  color={"#052B60"}
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  fontWeight={"500"}
                  align="justify"
                  mx={{base:"1rem", md:"0rem"}}
                >
                  "Charting the Path to Digital Commerce - HPNPay, Amplifying
                  Your Store's Digital Journey."
                </Text>
                <Text
                  color={"#052B60"}
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  fontWeight={"500"}
                  mx={{base:"1rem", md:"0rem"}}
                >
                  "डिजिटल संसार में अब आपका स्टोर भी - HPNPay, आपके व्यापार का
                  डिजिटल साथी।"
                </Text>
              </Box>
              
              <Box mr={{ base: "1.5rem", md: "0rem" }} ml={{base:"1rem", md:"0rem"}} mb={{base:"0rem", md:"1.5rem"}}>
                <Stack
                  marginTop={{ base: "2rem", sm: "4rem" }}
                  // spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    width={{ base: "100%", sm: "300px" }}
                    height="4rem"
                  />
                  <Button
                    width={{ base: "100%", sm: "150px" }}
                    maxWidth={{ sm: "150px" }}
                    height="4rem"
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                    position={{ base: "static", sm: "static" }}
                    left={{ base: "0", sm: "400px" }}
                    marginTop={{ base: "1rem", sm: "0" }}
                  >
                    Get in touch
                  </Button>
                </Stack>
              </Box>
            </Box>
            <Box width={{ base: "90%", md: "48%" }} mb={{base:"1rem", md:"0rem"}}>
              <Image
                marginLeft={{ base: "0rem", md: "5rem" }}
                src={Product7}
                height={"auto"}
                borderRadius="0.5rem"
                marginTop={{ base: "2rem", md: "0" }}
                mb={{base:"1rem", md:"2rem"}}
              />
            </Box>
          </Flex>

          <Text
            marginLeft={{ base: "1rem", md: "5rem" }}
            fontSize={{ base: "1.3rem", md: "1.5rem" }}
            align="justify"
            mr={{ base: "1rem", md: "0rem"}}

          >
            "Digital offerings should be within everyone's grasp, not only those
            versed in digital finance. Through HPNPAY, broaden the horizon of
            digital services to your community, leveraging our distinguished
            brand collaborations. Harness the power of the HPNPAY platform to
            deliver succinct content and streamlined services. Assist customers
            in converting their tangible cash into digital formats at your
            venue, guaranteeing seamless access to the myriad advantages HPNPAY
            provides."
          </Text>

          <Box marginLeft={{ base: "1rem", md: "5rem" }}>
            <Text
              color={"#052B60"}
              fontSize={{ base: "1.7rem", md: "2rem" }}
              fontWeight={"700"}
              mt={{base:"1rem", md:"1rem"}}
            >
              Gift Card Solutions at Your Fingertips
            </Text>
            <Text fontSize={{ base: "1.3rem", md: "1.5rem" }} align="justify"
            mr={{ base: "1rem", md: "0rem"}}>
              Provide your customers with the option to buy gift cards from
              leading e-commerce giants such as Amazon, Flipkart, Myntra,
              Pantaloons, and many more right from your establishment. Not only
              will this enhance their shopping experience, but you'll also
              benefit with commissions both at the time of card issuance and
              when they're redeemed. Empower your store with a touch of digital
              convenience and watch your revenue grow!
            </Text>
          </Box>
        </Box>

        <Box background={"#f6f9fc"}  my="2rem">
          <Box
            width={{ base: "100%", md: "90%" }}
            marginTop={{ base: "1rem", md: "2rem" }}
          >
            <Text
              fontWeight={"600"}
              marginLeft={{ base: "1rem", md: "3rem" }}
              fontSize={{ base: "2rem", md: "3rem" }}
              color={"#052B60"}
              paddingLeft={{ base: "1rem", md: "2rem" }}
            >
              Essential Services
            </Text>
            <Text fontSize={"1.5rem"}>
              <Text
                fontWeight={"bold"}
                color={"black"}
                marginLeft={{ base: "2rem", md: "5rem" }}
                marginBottom={{ base: "1rem", md: "1rem" }}
              >
                Provide essential services to customers and earn more{" "}
              </Text>
              <Text marginLeft={{ base: "2rem", md: "5rem" }}>
                Help your customers with their tax filings and PAN requirements
                from your shop and help bring them into the formal financial
                fold
              </Text>
            </Text>
          </Box>

          <Flex
            justifyContent={{ md: "space-between" }}
            direction={{ base: "column", md: "row" }}
            paddingX={{ base: "1rem", md: "0" }}
           
          >
            {/* <Box
              marginRight={{ base: "1rem", md: "4rem" }}
              width={{ base: "100%", md: "50%" }}
              marginBottom={{ base: "2rem", md: "0" }}
            >
              <Image
                className="Essentialservices-image"
                marginLeft={{ base: "1rem", md: "5rem" }}
                src={Product8}
                height={"auto"}
                marginTop={{ base: "2rem", md: "1rem" }}
                borderRadius="0.5rem"
              />
            </Box> */}
             <Box width={{ base: "100%", md: "40%" }} mb={{base:"0.5rem", md:"1rem"}} ml={{base:"0rem", md:"5rem"}}>
              <Image
                // marginLeft={{ base: "0rem", md: "2rem" }}
                src={Product8}
                height={"auto"}
                borderRadius="0.5rem"
                marginTop={{ base: "2rem", md: "1rem" }}
              />
            </Box>
            <Box
              className="essential-services-text"
              marginLeft={{ base: "1rem", md: "2rem" }}
              width={{ base: "100%", md: "50%" }}
            >
              <Text
                color={"#052B60"}
                fontSize={{ base: "1.7rem", md: "2rem" }}
                fontWeight={"600"}
                marginTop={{ base: "1rem", md: "0" }}
              >
                PAN Card Services:
              </Text>
              <Text
                fontSize={{ base: "1.3rem", md: "1.5rem" }}
                marginTop={{ base: "1rem", md: "0" }}
                
                mr={{ base: "1rem", md: "1rem"}}
                align="justify"
              >
                Enable your customers to receive their physical PAN card in just
                3-4 working days through your shop. Additionally, for those in
                need of swift services, provide them with an E-PAN card in as
                little as 2 hours and up to a maximum of 24 hours. Transform the
                way your customers experience essential services by offering
                quick and efficient solutions.
              </Text>
              <Box marginTop={{ base: "1rem", md: "0" }}>
                <Text
                  color={"#052B60"}
                  fontSize={{ base: "1.7rem", md: "2rem" }}
                  fontWeight={"600"}
                  marginTop={{ base: "1rem", md: "0" }}
                >
                  Tax Filing:
                </Text>
                <Text
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  marginTop={{ base: "1rem", md: "0" }}
                  align="justify"
                  mr={{ base: "1rem", md: "1rem"}}
                >
                  Tax season can be stressful, but with your shop's services, it
                  doesn't have to be. Help your customers navigate the
                  complexities of tax filing seamlessly. By offering this
                  essential service, you not only assist them during the taxing
                  times but also ensure a steady income for yourself each tax
                  season.
                </Text>
                
                <Box mr={{ base: "1.5rem", md: "0rem" }} mb="1rem">
                  <Stack
                    marginTop={{ base: "2rem", sm: "4rem" }}
                    // spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      width={{ base: "100%", sm: "300px" }}
                      height="4rem"
                    />
                    <Button
                      width={{ base: "100%", sm: "150px" }}
                      maxWidth={{ sm: "150px" }}
                      height="4rem"
                      _hover={{ bg: "blue.600" }}
                      background={"#156DB1"}
                      color={"white"}
                      position={{ base: "static", sm: "static" }}
                      left={{ base: "0", sm: "400px" }}
                      marginTop={{ base: "1rem", sm: "0" }}
                    >
                      Get in touch
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* page 5 */}
        <Box
          width={{ base: "100%", md: "90%" }}
          marginTop={{ base: "1rem", md: "2rem" }}
        >
          <Text
            fontWeight={"600"}
            marginLeft={{ base: "0rem", md: "3rem" }}
            fontSize={{ base: "2rem", md: "3rem" }}
            color={"#052B60"}
            paddingLeft={{ base: "1rem", md: "2rem" }}
          >
            Credit Solution
          </Text>
          <Text fontSize={"1.5rem"}>
            <Text
              fontWeight={"bold"}
              color={"black"}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "1rem", md: "2rem" }}
            >
              HPNPay के साथ सपनों की उड़ान में, आपकी मंजिल से हमारा वादा।
            </Text>
          </Text>
        </Box>

        <Box width={{ base: "90%", md: "90%" }}>
          {/* 1st */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box
              width={{ base: "95vw", md: "60%" }}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "1rem", md: "2rem" }}
              my="1rem"
              mr="2rem"
              
            >
              <Text color={"#052B60"} fontSize={"1.5rem"} fontWeight={"700"}>
                1. Comprehensive and Customised Financial Empowerment
              </Text>
              <Text fontSize={"1.3rem"} marginTop="1rem" align="justify" mr={{ base: "1rem", md: "1rem"}}>
                HPNPay stands at the forefront of financial empowerment,
                offering bespoke credit solutions tailored to fit the diverse
                needs of every customer. We champion your business's growth by
                providing accessible business loans, injecting the necessary
                capital to broaden your horizons, enhance your operations, or
                cater to any specific business exigencies. Facilitate a loan
                experience for your customers that transcends the traditional,
                cumbersome branch visits. Our refined loan services are designed
                with the utmost convenience in mind, ensuring a seamless process
                that not only fosters customer loyalty but also amplifies the
                profitability and sustainability of your business in the
                competitive market.
              </Text>
            </Box>

            <Box
              width={{ base: "100%", md: "35%" }}
              marginTop={{ base: "2rem", md: "2rem" }}
            >
              <Image
                src={Product9}
                className="credit-image"
                width={"auto"}
                height={"auto"}
                borderRadius="0.5rem"
              />
            </Box>
          </Flex>

          {/* 2nd */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            marginTop="2rem"
          >
            <Box
              width={{ base: "95vw", md: "60%" }}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "1rem", md: "2rem" }}
            >
              <Text color={"#052B60"} fontSize={{ base: "1.5rem", md: "1.8rem" }} fontWeight={"700"}>
                2. Business Expansion Financing
              </Text>
              <Text fontSize={"1.3rem"} marginTop="1rem" align="justify" mr={{ base: "1rem", md: "1rem"}}>
                Navigate the business landscape with HPNPay’s unencumbered,
                unsecured financing options crafted for retailers. We're
                dedicated to offering you not just loans, but a partnership that
                supports your vision for growth, with attractive terms and
                affordable rates to ensure your business scales new heights with
                confidence and ease.
              </Text>
            </Box>

            <Box width={{ base: "100%", md: "40%" }} mb={{base:"0.5rem", md:"1rem"}} ml={{base:"0rem", md:"5rem"}}>
              
              <Image
                className="credit-image"
                src={Product10}
                width={"auto"}
                height={"auto"}
                borderRadius="0.5rem"
                mt="2rem"
              />
            </Box>
          </Flex>

          {/* 3rd */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            marginTop="2rem"
          >
            <Box
              width={{ base: "95vw", md: "60%" }}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "0rem", md: "2rem" }}
             
            >
              <Text color={"#052B60"}fontSize={{ base: "1.5rem", md: "1.8rem" }}fontWeight={"700"}>
                3. Motorcycle Acquisition Financing
              </Text>
              <Text fontSize={"1.3rem"} marginTop="1rem" align="justify" mr={{ base: "1rem", md: "1rem"}}>
                Embark on a journey of growth and convenience with HPNPay's
                Two-Wheeler Loan service. Whether it's for personal use or
                enhancing your product offerings, our instant and competitively
                priced loans make owning a motorcycle an achievable dream for
                you and your customers.
              </Text>
            </Box>

            <Box
              width={{ base: "95vw", md: "35%" }}
              marginTop={{ base: "2rem", md: "0" }}
              boxSize="100%"
              ml="0rem"
            >
              <Center>
              <Image
                className="credit-image"
                src={Product11}
                width={"auto"}
                height={"auto"}
                borderRadius="0.5rem"
              /></Center>
            </Box>
          </Flex>

          {/* 4th */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            marginTop="2rem"
          >
            <Box
              width={{ base: "95vw", md: "60%" }}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "1rem", md: "2rem" }}
            >
              <Text color={"#052B60"} fontSize={"2.2rem"} fontWeight={"700"} >
                4. Home and Personal Financing
              </Text>
              <Text fontSize={"1.3rem"} marginTop="1rem" mr={{ base: "1rem", md: "1rem"}}  align="justify">
                With HPNPay, tap into a versatile financial toolkit that brings
                instant solutions to your doorstep. Our Home Loan service is
                more than just a loan; it's a promise of stability and support,
                enabling you to address all your financial goals, from managing
                unexpected medical costs to celebrating milestone events, or
                investing in your children’s future through education. We offer
                a personal touch, with loans crafted to provide not just funds,
                but peace of mind and reliability.
              </Text>
            </Box>

            <Box
              width={{ base: "100%", md: "35%" }}
              marginTop={{ base: "2rem", md: "2rem" }}
            >
              <Center>
              <Image
                className="credit-image"
                src={Product12}
                width={"auto"}
                height={"auto"}
                borderRadius="0.5rem"
              /></Center>
            </Box>
          </Flex>

          {/* 5th */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            marginTop="2rem"
          >
            <Box
              width={{ base: "95vw", md: "60%" }}
              marginLeft={{ base: "0rem", md: "3rem" }}
              paddingLeft={{ base: "1rem", md: "2rem" }}
            >
              <Text color={"#052B60"} fontSize={{ base: "1.5rem", md: "1.8rem" }} fontWeight={"700"}>
                5. Gold Asset Financing
              </Text>
              <Text fontSize={"1.3rem"} marginTop="1rem" align="justify" mr={{ base: "1.5rem", md: "1rem"}} >
                Unlock the value of your assets with HPNPay's Gold Loan service,
                a secure and swift financial solution that respects the worth of
                your investments. With a streamlined process and minimal
                documentation, access the capital you need by leveraging the
                gold you own. It’s a safe, sound, and smart way to meet
                financial requirements, assuring you and your customers of a
                reliable source of funds when it matters most. At HPNPay, we are
                not just a credit service, we are a catalyst for your success,
                committed to delivering financial solutions that are as
                innovative as they are inclusive. Join us in a partnership that
                promises to illuminate the path of financial stability and
                growth for your business and your customers alike.
              </Text>
            </Box>

            <Box
              width={{ base: "100%", md: "35%" }}
              marginTop={{ base: "2rem", md: "2rem" }}
            >
              <Image
                className="credit-image"
                src={Product13}
                width={"auto"}
                height={"auto"}
                borderRadius="0.5rem"
              />
            </Box>
          </Flex>

          {/* Contact Form */}
          <Box mr={{ base: "1.5rem", md: "2rem" }} ml={{base:"2rem", md:"5rem"}} >
            <Stack
              marginTop={{ base: "2rem", sm: "4rem" }}
              // spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Input
                type="email"
                placeholder="Enter Your Email"
                width={{ base: "100%", sm: "300px" }}
                height="4rem"
              />
              <Button
                width={{ base: "100%", sm: "150px" }}
                maxWidth={{ sm: "150px" }}
                height="4rem"
                _hover={{ bg: "blue.600" }}
                background={"#156DB1"}
                color={"white"}
                position={{ base: "static", sm: "static" }}
                left={{ base: "0", sm: "400px" }}
                marginTop={{ base: "1rem", sm: "0" }}
              >
                Get in touch
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
