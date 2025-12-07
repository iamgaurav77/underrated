import {} from '@mui/material';
import { useRouter } from 'next/router';
import type React from 'react';
import { useState } from 'react';
import {
  FooterText,
  FooterTextLabel,
  Form,
  FormContainer,
  LoginLink,
  SignUpButton,
  SignUpTitle,
  StyledTextField,
  TitleContainer,
} from './styled';

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    // Form data: formData
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <FormContainer>
      <TitleContainer>
        <SignUpTitle>Sign Up</SignUpTitle>
      </TitleContainer>

      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label='Name'
          variant='outlined'
          fullWidth
          value={formData.name}
          onChange={handleChange('name')}
          required
        />
        <StyledTextField
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          value={formData.email}
          onChange={handleChange('email')}
          required
        />
        <StyledTextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
        <StyledTextField
          label='Confirm Password'
          type='password'
          variant='outlined'
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
        />

        <SignUpButton type='submit'>Sign Up</SignUpButton>
      </Form>

      <FooterText>
        <FooterTextLabel>Already have an account?</FooterTextLabel>
        <LoginLink onClick={handleLoginClick}>Log in</LoginLink>
      </FooterText>
    </FormContainer>
  );
};

export default SignUpForm;
