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

const LoginForm = () => {
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

  const handleSignUpClick = () => {
    router.push('/sign-up');
  };

  return (
    <FormContainer>
      <TitleContainer>
        <SignUpTitle>Login</SignUpTitle>
      </TitleContainer>

      <Form onSubmit={handleSubmit}>
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

        <SignUpButton type='submit'>Login</SignUpButton>
      </Form>

      <FooterText>
        <FooterTextLabel>Don't have an account?</FooterTextLabel>
        <LoginLink onClick={handleSignUpClick}>Sign up</LoginLink>
      </FooterText>
    </FormContainer>
  );
};

export default LoginForm;
