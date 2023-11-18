import {
  Grid,
  Box,
  Text,
  Link,
  VStack,
  Heading,
  Button,
  Image,
  Center,
  Flex,
  UnorderedList,
  ListItem,
  OrderedList
} from "@chakra-ui/react";
import React from "react";

function Blog5() {
  return (
    <div style={{ margin: "1rem 2rem" }}>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading fontSize="xl" mb="1rem">
        Hannanth Digital India Private Limited: Expanding Access to Formal Credit
        </Heading>
        <Text mb="1rem">
        The question looms large for many: can those 'invisible' to the financial system—those without a substantial credit history—access formal credit? At Hannanth Digital India Private Limited, we are committed to transforming this narrative, ensuring that formal lending solutions are accessible to even those with thin or nonexistent credit files
        </Text>
        <Heading fontSize="xl" mb="1rem">Building a Credit History with Hannanth Digital India Private Limited</Heading>
        <Text>If you are new to credit (NTC) or have a minimal credit footprint, Hannanth Digital India Private Limited offers several pathways to build a solid credit history:</Text>
        <Flex>
          <Image
            src="blog5.png"
            alt="blog1"
            mb={4}
            w="40rem"
            h="22rem"
            borderRadius="15px"
            mr="1rem"
            mt="0.5rem"
          />
          <div>
          <OrderedList mt="2rem" fontSize="18" mb="1rem">
            <ListItem mb="1rem"><b>Opt for a Secured Credit Card:</b> This card functions just like any regular credit card but is secured with a deposit. It's a reliable stepping stone for creating a credit footprint, particularly beneficial for young adults embarking on their financial journey.</ListItem>
            <ListItem mb="1rem"><b>Acquire a Supplementary Credit Card:</b> Being added as a secondary cardholder, perhaps on a parent's or spouse's account, can help you begin crafting an individual credit history.
</ListItem>
            <ListItem mb="1rem"><b>Be Prompt with Utility Payments: </b>Regular payments of your utility and mobile bills can contribute to your creditworthiness. As the financial landscape evolves, such payment histories are increasingly recognized by credit bureaus.
</ListItem>
          </OrderedList >
         
          </div>
        </Flex>

        <Text mb="1rem">
        Expand these activities cautiously. Applying for too many credit lines at once can be detrimental to your credit score. Instead, judiciously choose a single financial product, use it responsibly, and consider additional credit facilities after a period of consistent, on-time payments.

        </Text>

        <Flex>
          <div>
            <Text mb="1rem" mt="2rem">
            It's also crucial not to overextend your credit utilization. Experts suggest using no more than 30-40% of your available credit, as higher utilization can negatively impact your score.
            </Text>
            <Text mb="1rem" mt="2rem">
            Regularly accessing your credit report, which is free annually from credit bureaus, is vital. Ensure all information is correct, including personal details and financial activities. Promptly report any discrepancies to the bureau
            </Text>
            <Text mb="1rem" mt="2rem">
              We've witnessed many customers, including migrant workers, lose
              their jobs during the pandemic. In response, we initiated
              "JobsNearby," a platform connecting job seekers with relevant
              opportunities, exemplifying our commitment to our community.
            </Text>
          
          </div>{" "}
          <Image
            src="credit.png"
            alt="Alt Text 1"
            mb="1rem"
            w="50rem"
            h="20rem"
            borderRadius="lg"
            ml="1rem"
            mt="1rem"
          />
        </Flex>
        <Heading fontSize="xl">Creating an Inclusive Credit Ecosystem</Heading>
        <Text mb="1rem" mt="1rem">
        Hannanth Digital India Private Limited champions a broader, more inclusive credit ecosystem. We advocate for the inclusion of alternative data points—such as rental payments and insurance premiums—into credit evaluations. These additional data points can disrupt traditional lending models and democratize access to credit.
            </Text>
            <Text mb="1rem" mt="1rem">
            In the current digital era, with the ubiquity of smartphones and the internet, vast amounts of data are generated daily. With the right consent and regulatory framework, this data can be harnessed to revolutionize the lending ecosystem. Hannanth Digital India is at the forefront of this change, ensuring that every transaction, large or small, contributes to building a comprehensive financial profile for our customers.
            </Text>
        <Text mb="1rem" mt="1rem">
        The push towards digitization, automation, and collaborations between credit bureaus and fintech companies, including e-commerce platforms, payment aggregators, and social media networks, is integral to extending credit to wider sections of society. All collaborations must prioritize user privacy and consent, aligning with the country's move toward open banking regulations. Such initiatives facilitate the secure and standardized sharing of consumer data, fostering a transparent and interconnected financial environment.
        </Text>
        <Text mb="1rem" mt="1rem">
        As we continue to break down the barriers to formal credit, Hannanth Digital India Private Limited remains dedicated to empowering the 'credit invisible' population, ushering in a new era of financial inclusivity and resilience. Let's embrace this journey toward financial empowerment together.
        <Flex>
          <Text  fontWeight={'600'}  color={'bl'}   marginTop={'2rem'}>Author:</Text>
          <Text  fontWeight={'600'}  color={'#0099FF'} marginTop={'2rem'}>Shreyas Kamble </Text>
        </Flex>
        (Mergers and Acquisitions (M&A) Analyst)
        </Text>
      </Box>
    </div>
  )
}

export default Blog5;
