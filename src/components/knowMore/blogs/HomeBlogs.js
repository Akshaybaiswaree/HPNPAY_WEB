// export default HomeBlogs;
import React from 'react';
import { Grid, Box, Text, VStack, Heading, Button, Image, Center } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const HomeBlogCard = ({ title, to, comments, image, onReadMore }) => (
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

const HomeBlogs = () => {
  const blogs = [
    { title: 'Digital Payments: The Unstoppable March Towards a Cashless India', to: '/digitalPayments', image: 'digitalP.png' },
    { title: "The Digital Payment Revolution: Transforming India's Economic Landscape", to: '/economicLandscape', image: 'digitalp2.png' },
    { title: "Embracing the Digital Wave: How Shopkeepers Can Thrive in the New Retail Landscape", to: '/digitalWave', image: 'shopkeeper.png' },
  ];

  return (
    <>
      <Text fontWeight="bold" fontSize={{base:'2xl' , md:"3xl" ,lg:"5xl"}} m="2rem" ml="0rem" color="blue.500">
        Blogs
      </Text>
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
        {[0, 1, 2].map((columnIndex) => (
          <VStack key={columnIndex} align="stretch">
            {blogs.map((blog, index) => (
              index % 3 === columnIndex && (
                <HomeBlogCard
                 
                  h="25rem"
                  key={index}
                  title={blog.title}
                  to={blog.to}
                  image={blog.image}
                  onReadMore={() => {
                    console.log(`Read more clicked for ${blog.title}`);
                  }}
                />
              )
            ))}
          </VStack>
        ))}
      </Grid>
    </>
  );
};

export default HomeBlogs;

