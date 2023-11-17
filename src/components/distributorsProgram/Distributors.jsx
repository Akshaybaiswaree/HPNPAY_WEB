import React from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import Partnership from "./Partnership";
import revenue from "../../images/product_img/distributor_revenue.png";
import { Link } from "react-router-dom";

export default function Distributors() {
  //code for show page froom top.
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      <Box margin={'rem'} background={"#f6f9fc"} mx="1rem">
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={4} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text color={"#052b60"}>
                  Unlock a Whopping up to 18% Monthly Returns!
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                <strong> Elevate Your Investments:</strong>
                Dive into the dynamic world of HPNPAY distribution and
                experience the joy of high returns on your hard-earned money.
                Every investment here is a step towards a prosperous tomorrow.
                Get High returns on money invested in HPNPAY distribution
                business.
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                <strong> Zero Hassles, Maximum Benefits:</strong>
                Forget Physical Stocks: Step into a business model where there's
                no need for tangible goods. No clutter, just clear profits.
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                <strong> Save Big:</strong>
                Say goodbye to hefty store space costs. Plus, no need for
                additional staff or the troubles of goods transfer. It's all
                digital, smooth, and efficient!
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                <strong> Empower Your Money:</strong>
                Let your money work wonders for you. With HPNPAY, not only do
                you invest, but you also elevate your financial stature. Every
                penny here is a penny earned, and then some!{" "}
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                <strong> Join the HPNPAY Revolution!:</strong>
                Make the smart move and step into a world of unparalleled
                financial growth.
              </Text>

              <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
                Estimate Your Earnings - Dive into our intuitive Income
                Calculator
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"#0c4696"}>
                Let your journey to financial supremacy begin with HPNPAY.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link to="/distributor-income-calculator">
                  <Button
                    size="md"
                    height="3.4rem"
                    width="20rem"
                    border="2px"
                    color={"blue.400"}
                    padding={"25px"}
                    onClick={scrollToTop}
                  >
                    Income Calculator
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="md"
                    height="3.6rem"
                    width="20rem"
                    border="2px"
                    bg={"green.400"}
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                    onClick={scrollToTop}
                  >
                    Join HPNPAY
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              margin={"auto"}
              height={"60vh"}
               

               
              width={'100%'}
              alt={"Login Image"}
              objectFit={"cover"}
              src={revenue}
              borderRadius="0.5rem"
            />
          </Flex>
        </Stack>
      </Box>

      <Box>
        <Partnership />
      </Box>
    </>
  );
}