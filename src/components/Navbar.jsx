

// import React from 'react';

// import {
//   Box,
//   Flex,
//   Text,
//   Spacer,
//   Link,
//   Collapse,
//   useColorModeValue,
//   Button,
//   Image,

// } from '@chakra-ui/react';
// import LOGO from '../../src/images/footer/LOGO.svg';

// const Navbar = () => {

//   return (
//     <Box w="100vw">
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}

//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}
//       >
//         <Link to='/'>
//           <Text fontSize='2xl' fontWeight='bold'>
//             <Image ml={'20px'} src={LOGO} width={'100px'} />
//           </Text>
//         </Link>

//         <Flex display={{ base: 'none', md: 'flex' }} alignItems='center' w='100vw' ml={'1rem'}>

//           <NavLink to='/'>Retailer</NavLink>
//           <NavLink to='/corporate'>Corporate</NavLink>


//           <Spacer />
//           <NavLink to='/products'>Products</NavLink>
//           <NavLink to='/solution'>Solution</NavLink>
//           <NavLink to='/distributors'>Distributors Program</NavLink>
//           <NavLink to='/'>Media</NavLink>
//           <NavLink to='/aboutus'>About Us</NavLink>
//           <HoverNavLink title='Know More' style={{ display: 'flex', flexDirection: 'column' }}>
//             <NavLink to='/service1'>Blog</NavLink>
//             <NavLink to='/service2'>HPN Club</NavLink>
//             <NavLink to='/service2'>Jobs</NavLink>
//             <NavLink to='/service2'>Event</NavLink>
//             <NavLink to='/service2'>FAQ's</NavLink>
//           </HoverNavLink>
//           <NavLink to='/contactus'>Contact Us</NavLink>
//           <Spacer /> {/* Add Spacer */}
//           <NavLink to='/about'>Case Studies</NavLink>
//           <NavLink to='/contact'>Features</NavLink>
//           <Button
//             as={'a'}
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'sm'}
//             fontWeight={600}
//             color={'white'}
//             href={'#'}
//             mr={'20px'}
//             _hover={{ bg: 'blue.600' }}
//             background={'#156DB1'}
//           >
//             <NavLink to='/login'>
//               Login
//             </NavLink>
//           </Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );

// };

// const NavLink = ({ to, children }) => (
//   <Link
//     // as={ReactRouterLink}
//     to={to}
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//   >
//     {children}
//   </Link>
// );

// const HoverNavLink = ({ title, children }) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <Box
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//       position='relative'
//     >
//       <Link px={2} py={1} rounded={'md'}>
//         {title}
//       </Link>
//       <Collapse in={isOpen} animateOpacity>
//         <Box
//           bg={useColorModeValue('white', 'gray.800')}
//           p={4}
//           border={1}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           position='absolute'
//           zIndex='1'
//           left='0'
//           mt='2'
//         >
//           {children}
//         </Box>
//       </Collapse>
//     </Box>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  PopoverArrow,
  PopoverHeader,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import LOGO from '../../src/images/footer/LOGO.svg';

export default function Navbar(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}

      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Link to='/'>
          <Image ml={'20px'} src={LOGO} width={'100px'} />
        </Link>
        <Flex flex={{ base: 1 }} alignItems={'center'} justify={{ base: 'center', md: 'center' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}

            color={useColorModeValue('gray.800', 'white')}
          >

          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                // background={'#82e368'}
                // bg={'rgb(43, 46, 74)'}
                href={'#'}
                mr={'20px'}
                _hover={{bg:'blue.600'}}
                background={'#156DB1'}
              >
                Login 
              </Button>
            </PopoverTrigger>
            <PopoverContent height='40px' width='100px'>
              <Link onClick={props.login} to='/login'>
                <PopoverHeader fontWeight='semibold'>Retailer</PopoverHeader>
              </Link>
              <PopoverArrow />
            </PopoverContent>
          </Popover>


        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <></>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500
            }

          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

const NAV_ITEMS = [
  {

    label: <Link to='/'>Retailer</Link>,
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
  {
    label: <Link to='/corporate'> Corporate </Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },

  {
    label: <Link to='/products'>Product</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
  {
    label: <Link to='/solution'>Solution</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
  {
    label: <Link to='/distributors'>Distributors Program</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
  // {
  //   label: <Link to='/media'>Media</Link>,
  //   children: [
  //     {
  //       label: 'Blogs',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Career',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //     {
  //       label: 'Events',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  //   href: '#',
  // },
  {
    label: <Link to='/aboutus'>About Us</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
  // {
  //   label: <Link to='/Know More'>Know More</Link>,
  //   // children: [
  //   //   {
  //   //     label: 'Job Board',
  //   //     subLabel: 'Find your dream design job',
  //   //     href: '#',
  //   //   },
  //   //   {
  //   //     label: 'Freelance Projects',
  //   //     subLabel: 'An exclusive list for contract work',
  //   //     href: '#',
  //   //   },
  //   // ],
  //   href: '#',
  // },
  {
    label: <Link to='/knowMore'>Know more</Link>,
    children: [
      {
        label: 'Blogs',
        href: '/blogs',
      },
      {
        label: 'HPN Club',
        href: '#',
      },
      {
        label: 'Jobs',
        href: '#',
      },
      {
        label: 'Events',
        href: '#',
      },
      {
        label: "FAQ's",
        href: '#',
      },
      
    ],
    href: '#',
  },
  {
    label: <Link to='/contactus'>Contact Us</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
    href: '#',
  },
 


];
