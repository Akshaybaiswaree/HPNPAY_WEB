import React from 'react';
import { Grid, Box, Text, VStack, Heading, Button, Image, Center } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ title, to, comments, image, onReadMore }) => (
  <Box p={4} borderWidth="1px" borderRadius="lg">
    <Center>
      <Image src={image} alt={title} mb={4} h="15rem" />
    </Center>
    <Heading fontSize="l" mb={2}>
      {title}
    </Heading>
    <NavLink to={to}>
      <Button colorScheme='blue' size="sm" mt={2} onClick={scrollToTop}>
        Read more
      </Button>
    </NavLink>
  </Box>
);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
}

const BlogCards = () => {
  const blogs = [
    { title: 'HPNPAY: Integrating Last-Mile Connectivity with Advanced Technology', to: '/blog1', image: 'blog1.png' },
    { title: "HPNPAY's Vision of Democratizing Credit Access in Bharat", to: '/blog2', image: 'blog2.png' },
    { title: "Hannanth Digital India Private Limited's Mission to Transform Kiranas for Tomorrow", to: '/blog3', image: 'blog3.png' },
    { title: " Pioneering Compassionate Customer Delivery During Trying Times", to: '/blog4', image: 'blog4.png' },
    { title: "Hannanth Digital India Private Limited: Expanding Access to Formal Credit", to: '/blog5', image: 'blog5.png' },
    { title: "Charting a New Course for Insurance Accessibility in India", to: '/blog6', image: 'blog6.png' },
    { title: "Hannanth Digital India Private Limited: Leading the Digital Payment Revolution", to: '/blog7', image: 'blog7.png' },
  ];

  return (
    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
      {blogs.map((blog, index) => (
        <VStack key={index} align="stretch" mt="2rem" >
          <BlogCard
           
            h="25rem"
            mt="2rem"
            title={blog.title}
            to={blog.to}
            image={blog.image}
            onReadMore={() => {
              console.log(`Read more clicked for ${blog.title}`);
            }}
          />
        </VStack>
      ))}
    </Grid>
  );
};

export default BlogCards;

