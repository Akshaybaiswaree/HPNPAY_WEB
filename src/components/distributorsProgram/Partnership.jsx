
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Stack, Text, Button, Center } from "@chakra-ui/react";
import lap from "../../images/aboutUs_img/semlessbuisness.png";
import { useBreakpointValue } from '@chakra-ui/react';
import aeps from "../../images/aboutUs_img/cal.png"
import multi from "../../images/aboutUs_img/potential.png"
import payment from "../../images/aboutUs_img/potential.png"
import onboard from "../../images/aboutUs_img/endlessoportunity.png"
import income from "../../images/aboutUs_img/youchoice.png"
import partnerbenifit from "../../images/product_img/distributor_partner.png"
import onboarding from "../../images/aboutUs_img/onboarding (1).png";
import platform from "../../images/aboutUs_img/oneplatform.png";
import reward from "../../images/aboutUs_img/lifetimereward.png"
import ultimate from "../../images/aboutUs_img/ultimate.png";
import expand from "../../images/aboutUs_img/expand.png"

const Partnership = () => {
    return (
        <>
           

<Stack width={{ base: '85%', md: '85%' }} mx="1rem">
  <Stack >
    <Center>
    <Heading>Unleash Your Digital Potential!</Heading>
    </Center>
    <br />
    <Text color="#052B60" fontSize="1.5rem" fontWeight="700" textAlign="center">
      Dive into a future of unparalleled opportunities and growth. Your digital journey begins here. 💼🌐🔝
    </Text>
  </Stack>
  <Flex marginTop="30px" w="100vw" justifyContent="center" direction={{ base: 'column', md: 'row' }} mx="1rem">
    <Box >
      <Stack   width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }} >
        <Image src={lap} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Seamless Business Setup:</Text>
        <Text fontSize="19px" w="80%">- Go Digital: Kickstart your distribution journey effortlessly from the comfort of your smartphone or laptop.</Text>
      </Stack>
      <Stack marginTop="50px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={ultimate} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px"w="80%" fontWeight="700">Ultimate Flexibility:</Text>
        <Text fontSize="19px" w="80%">Whether from a cozy corner in your home or your local shop, you're in control. Say goodbye to traditional hassles - no inventory, no vast warehouses, and zero manpower constraints.</Text>
      </Stack>
      <Stack marginTop="50px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={onboarding} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%"fontWeight="700">Onboarding Made Easy:</Text>
        <Text fontSize="19px" w="80%">- Simplicity at its Best: Our onboarding process is tailored for ease, ensuring a smooth entry for your entire network.</Text>
      </Stack>
    </Box>
    <Box >
      <Stack width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={payment} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Exceptional Earning Potential:</Text>
        <Text fontSize="19px" w="80%">- Boost Your Income: With a network of just 5-7 retailers, watch your monthly earnings skyrocket to a whopping ₹40,000 to ₹60,000.</Text>
      </Stack>
      <Stack marginTop="50px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={platform} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px"w="80%" fontWeight="700">One Platform, Multiple Services:</Text>
        <Text fontSize="19px" w="80%">- Diverse Offerings: Dive into a world of services - Banking, Payments, Travel, Insurance, and so much more! Why juggle between platforms when one can do it all?</Text>
      </Stack>
      <Stack marginTop="50px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={expand} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Expand & Prosper:</Text>
        <Text fontSize="19px" w="80%">- The more retailers you onboard, the merrier your bank balance!</Text>
      </Stack>
    </Box>
    <Box width={{ base: '100%', md: 'auto' }}>
      <Stack width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={onboard} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Endless Opportunities:</Text>
        <Text fontSize="19px" w="80%">Once your retailers are onboarded, a realm of services awaits. From our existing portfolio to the latest offerings, there's a continuous avenue for income.</Text>
      </Stack>
      <Stack marginTop="25px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={reward} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Lifetime Rewards:</Text>
        <Text fontSize="19px" w="80%" >Consistent Returns: We believe in rewarding every effort. Earn industry-leading commissions on every transaction initiated by your retailer. A lifetime of financial rewards awaits!</Text>
      </Stack>
      <Stack marginTop="50px" width={{ base: '100%', md: '400px' }} height={{ base: '500px', md: 'auto' }}>
        <Image src={income} borderRadius='lg' height="18rem" width="20rem" />
        <Text fontSize="20px" w="80%" fontWeight="700">Your Choice, Your Offering:</Text>
        <Text fontSize="19px" w="80%">Cater to your audience's needs by offering them a service mix that best suits them.</Text>
      </Stack>
    </Box>
  </Flex>
</Stack>



   
            <Stack
            
            background={'#f6f9fc'}
            direction={{ base: 'column', md: 'row' }} marginTop={{ base: '40px', md: '80px' }}>

  <Flex 
  
  
  direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={{ base: 'center', md: 'stretch' }} justify={'space-evenly'}>
      <Box 
       background={'#f6f9fc'}
       width={{ base: '100%', md: '40%' }}>
        <Stack spacing={6}>
          <Heading fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={"cyan.800"}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Formula to earn more
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} wordSpacing={'2px'} color={'gray.500'}>
            It is easy to earn 40,000 to 60,000 every month with just 5-7 retailers in your network. You earn every time a customer does a financial transaction on your retail network.
          </Text>
        </Stack>
      </Box>
      <Box width={{ base: '100%', md: '40%' }}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          width={'100%'}
          src={aeps}
        />
      </Box>
    </Flex>
  </Flex>

</Stack>



        </>
    );
};

export default Partnership;