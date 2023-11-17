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
    Table, Tbody, Tr, Td,
    CardHeader,
    CardBody,
    CardFooter,
    Center,
    List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Highlight
  } from '@chakra-ui/react'
import BlogCards from './BlogCards'
import HomeBlogs from './HomeBlogs'

const Blogs = () => {
  return (
    <div style={{margin:"1rem 2.5rem"}}>
    
    <HomeBlogs/>
    
    <BlogCards/>
    </div>
  )
}

export default Blogs