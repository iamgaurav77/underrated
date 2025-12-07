import CategoriesModule from '@/modules/categories-module';
import { Box, styled } from '@mui/material';

const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20), // Account for fixed header
}));

const CategoriesPage = () => {
  return (
    <PageWrapper>
      <CategoriesModule />
    </PageWrapper>
  );
};

export default CategoriesPage;
