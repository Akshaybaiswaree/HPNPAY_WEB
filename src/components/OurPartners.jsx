'use client'

import React from 'react'
import {
    Box, IconButton, useBreakpointValue, Select,
    FormLabel,
    FormControl,
    Image,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Stack,
    Flex,
    Input,
    Checkbox,
    InputGroup,
    InputLeftElement,

} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import reCaptchaImage from '../images/solution_img/reCaptchaImage.png'
import Solution4 from '../images/solution_img/Solution4.png';


// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 3,
}

export default function OurPartners() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    // These are the images used in the slide
    const cards = [
        'https://paynearby.in/wp-content/uploads/2023/04/Arthmate.png',
        // 'https://paynearby.in/wp-content/uploads/2023/04/Homefirst.png',
        // 'https://paynearby.in/wp-content/uploads/2023/04/Unity-small-finance-bank.png',
        'https://paynearby.in/wp-content/uploads/2022/02/Axis-Bank.png',
        'https://paynearby.in/wp-content/uploads/2022/02/BCFI-logo-01.png',
        'https://paynearby.in/wp-content/uploads/2022/02/Indusind-Bank.png',
        'https://paynearby.in/wp-content/uploads/2022/02/NPCI.png',
        'https://paynearby.in/wp-content/uploads/2022/02/RBL-Bank.png',
        'https://paynearby.in/wp-content/uploads/2023/03/SBM-Logo_PNG.png',
        'https://paynearby.in/wp-content/uploads/2022/02/TSSC_Logo.png',
        'https://paynearby.in/wp-content/uploads/2023/05/logo-yes-bank.png',

    ]

    return (
        <>
            {/* heading */}
            <Box>
                <Heading color={'blue.400'} as={'span'} textAlign="center" paddingBottom="20px" marginTop="50px">
                    <Text>
                        Our Partners
                    </Text>
                </Heading>
            </Box>
            {/* slider */}
            <Box position={'relative'}  width={'full'} overflow={'hidden'} borderRadius={'10px'}>
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                {/* <IconButton
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton> */}
                {/* Right Icon */}
                {/* <IconButton
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton> */}
                {/* Slider */}
                {/* <Slider {...settings} ref={(slider) => setSlider(slider)}> */}
                <Flex gap="10px" marginTop="30px">
                    {cards.map((url, index) => (
                        <Box
                            key={index}
                            height={'150px'}
                            
                        >
                            <Image height="70px" src={url}/>
                        </Box>
                    ))}

                </Flex>
                {/* </Slider> */}
            </Box>
            {/* dounload pay now */}
            <Box>
                <Stack direction={{ base: 'column', md: 'row' }}>
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
                                <Input type='phone' placeholder='Enter Phone No.' width='500px' height='66px' border='1px solid blue' />
                            </Stack>
                            <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'66px'} display={'flex'} justifyContent={'space-between'} spacing={13} alignItems={'center'}>
                                <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                                <Image src={reCaptchaImage} width={'50px'} height='50px' />
                                <Button width='150px' height='70px' background='#82e368' color='white' position={'absoulte'} left={"200px"}>Get App Link</Button>

                            </Stack>
                        </Stack>

                    </Flex>
                    <Flex flex={1}>

                        <Image width={"100%"} height={"65%"} marginTop={"5rem"} ml={'10px'} src={Solution4} />

                    </Flex>
                </Stack>
            </Box>
        </>
    )
}