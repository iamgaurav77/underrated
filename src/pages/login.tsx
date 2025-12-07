import LoginForm from '@/modules/user/components/login-form';
import { Box, styled } from '@mui/material';

const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10), // Account for fixed header
}));

const LoginPage = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default LoginPage;
