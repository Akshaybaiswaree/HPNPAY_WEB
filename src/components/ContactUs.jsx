'use client'

import {
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import contactUsImage from "../images/contactus/connect_img1.png"
import facebookIcon from "../images/contactus/facebook_4494475.png"
import linkdienIcon from "../images/contactus/linkedin_3536505.png"
import twitterIcon from "../images/contactus/twitter_4494477.png"
import youtubeIcon from "../images/contactus/youtube_4494485.png"
import contactTopImage from "../images/contactus/contact-top-icon.png"
import telephoneImage from "../images/contactus/telephone.png"
import reCaptchaImage from "../images/contactus/RecaptchaLogo.svg.png"
import googlePlay from "../images/contactus/google-play.png"
import { PhoneIcon } from '@chakra-ui/icons'
import Solution4 from "../images/contactus/360_F_584079236_dGOg5QEHUhUQb1KN642R6uCW9Fhourue.jpg"
import goldLoan from '../images/footer/goldinvestment.jpg';
import ContactForm from './ContactForm'

export default function ContactUs() {
    return (
        <>
        <Box mx="1rem">
            <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                >
                                <Text fontWeight="bold" fontSize="50"  color="blue.800">Let's connect to </Text>
                                <Text fontSize="50" color="red.600">create impact</Text>
                            </Text>
                            <ContactForm/>
                            <br />{' '}
                        </Heading>
                        <Text fontSize={'lg'} >Regd. Office</Text>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            103 A , RANI BAZAR<br />
                            Bikaner, Rajasthan 334001, IN,<br />

                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button
                                size='md'
                                height='48px'
                                width='200px'
                                border='2px'
                                borderColor='blue.500'
                                colorScheme='blue.400'
                                color='blue.500'
                            >
                                Help & Support
                            </Button>
                        </Stack>
                        <Stack direction={'row'} spacing={5}>
                            <Image src={facebookIcon} width={"40px"} height={"40px"} />
                            <Image src={twitterIcon} width={"40px"} height={"40px"} />
                            <Image src={linkdienIcon} width={"40px"} height={"40px"} />
                            <Image src={youtubeIcon} width={"40px"} height={"40px"} />
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1} p={8}>
                    <Image
                        height={"400px"}
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            contactUsImage
                        }
                        marginTop={'50px'}
                    />
                </Flex>
            </Stack>
            <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={"#c7f7ee"} margin={"auto"}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={"600px"} maxW={"600px"} marginLeft={"3rem"}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>
                                Attention! <br />
                                HPNPAY cares about your safety.
                            </Text>
                            <br /><br />{' '}
                          
                        </Heading>
                        
                    
                        <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                  width={'100%'}
                >
                  <Input
                    type="number"
                    placeholder="Enter Your number"
                    width="70%"
                    height="75px"
                    border="1px solid gray"
                  />
                  <Button
                    width={{ base: "100%", md: "150px" }}
                    height="75px"
                    _hover={{ bg: "blue.600" }}
                    background={"#156DB1"}
                    color={"white"}
                    marginTop={{ base: "1rem", md: "0" }}
                  >
                    Get in touch
                  </Button>
                </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1} p={8}>
                    <Image
                        height={"400px"}
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            contactTopImage
                        }
                    />
                </Flex>
            </Stack>

            <Box height={'600px'} width={'100%'} margin='auto' h={'full'} overflow={'hidden'} paddingTop={'20px'} >
                <Image src={goldLoan} width={'80rem'} margin='auto' boxShadow={'dark-lg'} />
            </Box>
            {/* <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={"#f7f7f7"} margin={"auto"}>
                <Flex p={1} flex={1} align={'center'} justify={'center'} mt="1rem">
                    <Stack spacing={6} w={"30rem"} maxW={"700px"} mx="4rem" mb="1rem">
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                    color: 'blue.500'
                                }}>
                                Download our Apps
                            </Text>
                            <br /><br />{' '}
                            <Text fontSize='xl' as='b'>HPNPAY App</Text>
                        </Heading>
                        <Stack direction={'row'} spacing={5}>
                            <Text fontSize='xl' w="80%">Become a HPNPAY powered retailer & earn extra income by offering digital banking and financial services at your retail store. Download the app now!</Text>
                        </Stack>
                        <Image src={googlePlay} width={"150px"} />
                    </Stack>
                </Flex>
                <Flex flex={1} p={1} align={'center'} justify={'center'} >
                    <Stack marginTop={{base:"2rem", md:"10rem"}} mb="1rem">
                        <Text fontSize={'3xl'} color={'#1c539e'} as='b'>Join HPNPAY</Text>
                        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Input type='number' placeholder='Enter Your Number' width={{base:"80%", md:"60%"}} height='75px' />
                            <Button width='8rem' height='4rem'
                                _hover={{ bg: 'blue.600' }}
                                background={'#156DB1'}
                                color={'white'}
                                position={'absoulte'}
                                left={"200px"}>Verify</Button>
                        </Stack>
                        <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'75px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
                            <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                            <Image src={reCaptchaImage} width={'50px'} height='50px' />
                        </Stack>
                    </Stack>
                </Flex>
            </Stack> */}
             <Stack
           
    //   minH={'70vh'}
      direction={{ base: 'column', md: 'column' }}
      backgroundColor={"#f7f7f7"}
    //   margin={"auto"}
      width={{ base: '100%', md: '100%' }}
    >
      {/* First Section (Left Side) */}
      <Flex p={1} flex={1} align={'center'}  mt={{ base: '1rem', md: '1rem' }}>
        <Stack spacing={6} w={{ base: '100%', md: '30rem' }} maxW={{ base: '100%', md: '700px' }} mx={{ base: 0, md: '4rem' }} mb="1rem">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
                color: 'blue.500'
              }}>
              Download our Apps
            </Text>
            <br />
            <Text fontSize='xl' as='b'>HPNPAY App</Text>
          </Heading>
          <Stack direction={'row'} spacing={5}>
            <Text fontSize='xl' w="80%">Become a HPNPAY powered retailer & earn extra income by offering digital banking and financial services at your retail store. Download the app now!</Text>
          </Stack>
          <Image src={googlePlay} width={"150px"} />
        </Stack>
      </Flex>

      {/* Second Section (Right Side) */}
      {/* <Flex flex={1} p={1}   >
        <Stack 
        className='join-hpnpay-button'
        marginTop={{ base: "2rem", md: "2rem" }}  width={{ base: '100%', md: 'auto' }}>
          <Text fontSize={'3xl'} color={'#1c539e'} as='b'>Join HPNPAY</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Input type='number' placeholder='Enter Your Number' width={{ base: "80%", md: "60%" }} height='75px' />
            <Button
              width={{ base: '100%', md: '8rem' }}
              height='4rem'
              _hover={{ bg: 'blue.600' }}
              background={'#156DB1'}
              color={'white'}
              position={'absoulte'}
              left={{ base: 0, md: "200px" }}
            >Verify</Button>
          </Stack>
          <Stack border={'1px solid #d3d3d3'} width={{ base: '100%', md: '400px' }} direction={'row'} height={'75px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
            <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
            <Image src={reCaptchaImage} width={'50px'} height='50px' />
          </Stack>
        </Stack>
      </Flex> */}
    </Stack>


            <Box>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    margin={"-0.5px"}

                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        bg: 'blue.400',
                                        zIndex: -1,
                                    }}>

                                </Text>

                                <Text color={'blue.400'} as={'span'} >
                                    Download HPNPAY now
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                Use HPNPAY app & take charge of all your transactions to grow your business


                            </Text>
                            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='phone' placeholder='Enter Phone No.' width='80%' height='66px' border='1px solid blue' />
                            </Stack>
                            <Stack border={'1px solid #d3d3d3'} width={'80%'} direction={'row'} height={'66px'} display={'flex'} justifyContent={'space-between'} spacing={13} alignItems={'center'}>
                                <Checkbox colorScheme='green' margin={'10px'} size='lg' mx="0.5rem" w="50%"><Text  fontSize={{base:"0.8rem",md:"1rem"}}>I'm not robot</Text></Checkbox>
                                <Image src={reCaptchaImage} width={'50px'} height='50px' />
                                <Button width='8rem' height='3rem' m="0.5rem"
                                    _hover={{ bg: 'blue.600' }}
                                    background={'#156DB1'}
                                    color={'white'}
                                    position={'absoulte'}
                                    left={"200px"} ><Text  fontSize={{base:"0.8rem",md:"1rem"}}>Get App Link</Text></Button>

                            </Stack>
                        </Stack>

                    </Flex>
                    <Flex flex={1}>

                        <Image width={"100%"} height={"65%"} marginTop={"5rem"} ml={'10px'} src={Solution4} />

                    </Flex>
                </Stack>
            </Box>
            </Box>
        </>
    )
};