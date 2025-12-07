import SignUpForm from '@/modules/user/components/sign-up-form';
import { Box, styled } from '@mui/material';

const PageWrapper = styled(Box)(() => ({
  padding: 0,
}));

const SignUpPage = () => {
  return (
    <PageWrapper>
      <SignUpForm />
    </PageWrapper>
  );
};

export default SignUpPage;
