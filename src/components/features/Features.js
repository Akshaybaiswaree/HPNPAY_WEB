import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  Image,
  Blob,
  useColorModeValue,
  SimpleGrid,
  StackDivider,
  Icon,
  Card,
  Table,
  Tbody,
  Tr,
  Td,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";
import advantage1 from "../../images/retailer_img/advantage1.svg.png";
import advantage2 from "../../images/retailer_img/advantage2.svg.png";
import advantage3 from "../../images/retailer_img/advantage3.svg.png";
import advantage4 from "../../images/retailer_img/advantage4.svg.png";
import advantage5 from "../../images/retailer_img/advantage5.svg.png";
import advantage6 from "../../images/retailer_img/advantage6.svg.png";
import advantage7 from "../../images/retailer_img/advantage7.svg.png";
import advantage8 from "../../images/retailer_img/advantage8.svg.png";
import advantage9 from "../../images/retailer_img/advantage9.svg.png";
import advantage10 from "../../images/retailer_img/advantage10.svg.png";

function Features() {
  return (
    <Container maxW="100vw">
         <Box marginTop={"3rem"}>
        <Heading
          color={"blue.700"}
          fontSize="5xl"
          font-weight="bold"
          textAlign="center"
        >
          HPNPAY Advantage
        </Heading>

        <Stack spacing={4} margin="2rem">
          <Text fontSize="4xl" as="b" color={"#1c539e"} textAlign="center">
            Upgrade your business with the leader in branchless banking
          </Text>
        </Stack>
        <SimpleGrid
          bg="gray.50"
          columns={{ sm: 2, md: 3 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Effortless Integration </Heading>
                <Text>
                  Seamlessly integrate HPNPAY with your existing systems to
                  streamline your services without the need for technical
                  expertise.
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage2}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Flexible Earnings Structure</Heading>
                <Text>
                  With HPNPAY, benefit from a flexible commission model that
                  rewards your growth and transaction volumes, enhancing your
                  earning potential.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage3}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Comprehensive Support</Heading>
                <Text>
                  Receive dedicated support and training from our expert team to
                  ensure smooth operations and service excellence.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage4}
                alt="Comprehensive Support"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Market Expansion Opportunities</Heading>
                <Text>
                  HPNPAY opens up new markets and customer segments, allowing
                  you to tap into the vast potential of branchless banking.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage5}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Real-time Tracking and Analytics</Heading>
                <Text>
                  Monitor your business performance with our real-time analytics
                  dashboard, enabling informed decision-making.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage6}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Secure Transactions</Heading>
                <Text>
                  Benefit from state-of-the-art security protocols ensuring that
                  every transaction is secure and reliable.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage7}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Customizable Solutions</Heading>
                <Text>
                  Tailor HPNPAY's services to meet the specific needs of your
                  customers, providing a personalized experience that drives
                  loyalty.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage8}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Nationwide Recognition</Heading>
                <Text>
                  As a part of a reputed brand, gain instant recognition and
                  trust, which helps in attracting and retaining customers.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage9}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Continuous Innovation </Heading>
                <Text>
                  Leverage HPNPAY's commitment to continuous innovation,
                  ensuring that your services stay ahead of market trends.{" "}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={advantage10}
                alt="Comprehensive Support"
                borderRadius="lg"
                h="12rem"
                w="20rem"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Eco-friendly Business Model </Heading>
                <Text>
                  With digital transactions, reduce your carbon footprint and
                  contribute to a greener environment.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default Features