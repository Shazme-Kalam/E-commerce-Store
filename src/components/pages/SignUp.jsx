import React from 'react';
import { Button, FormControl, FormLabel, FormHelperText, Input, Container, FormErrorMessage } from '@chakra-ui/react';
import Header from '../Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer';
const SignUp = () => {
 const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "too short")
      .max(10, "too long")
      .required(),
    email: Yup.string()
      .email("invalid email")
      .required(),
    password: Yup.string()
      .min(5, "tooshort")
      .max(10, "toolong")
      .required(),
  })
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: SignupSchema
  })

  return (
    <div>
      <Header />

      <Container maxW='md' mt='10' p='5' bg='black' color='white' borderRadius='5px'>
        <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.username && formik.errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type='text'
              name='username'
              onChange={formik.handleChange}
              value={formik.values.username} 
              />
  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input
              type='text'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            <FormHelperText color='black'>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={formik.touched.password && formik.errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password} />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Button type='submit' mt={4} color='grey' border='2px'>
            Sign Up
          </Button>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
