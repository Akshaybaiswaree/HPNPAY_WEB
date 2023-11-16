import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react'

function ContactForm() {
  return (
    <>
    <FormControl mt="1rem" isRequired>
        <FormLabel isRequired>Name</FormLabel>
        <Input placeholder='First name' mb="2rem"/>
    </FormControl>
    <FormControl>
        <FormLabel >Email address</FormLabel>
        <Input type='email'mb="2rem" />
    </FormControl>
    <FormControl isRequired>
        <FormLabel isRequired>Mobile number</FormLabel>
        <Input type='number' mb="1rem"/>
    </FormControl>
    <FormControl >
        <FormLabel isRequired>Enquiry</FormLabel>
        <Input type='Text' mb="1rem"/>
    </FormControl>


  


    <FormControl>
        <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
    </FormControl>
    </>
  )
}

export default ContactForm