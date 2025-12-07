import type { Category } from '@/@types/common';
import { CATEGORIES_MODULE_CONFIG } from '@/modules/categories-module/config';
import { Box, styled } from '@mui/material';
import { useRouter } from 'next/router';

const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20), // Account for fixed header
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
}));

const CategoryImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  borderRadius: theme.spacing(2),
  objectFit: 'cover',
}));

const CategoryName = styled('h1')(({ theme }) => ({
  fontSize: theme.spacing(8),
  fontWeight: 600,
  textAlign: 'center',
  margin: 0,
}));

const CategoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Wait for router to be ready
  if (!router.isReady) {
    return (
      <PageWrapper>
        <CategoryName>Loading...</CategoryName>
      </PageWrapper>
    );
  }

  // Decode the category name from the URL
  const categorySlug = id ? decodeURIComponent(id as string) : '';

  // Helper function to convert category name to slug
  const nameToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  // Find the category from config by matching slug
  const category: Category | undefined = CATEGORIES_MODULE_CONFIG.find(
    cat => nameToSlug(cat.name) === categorySlug.toLowerCase(),
  );

  if (!category) {
    return (
      <PageWrapper>
        <CategoryName>Category not found</CategoryName>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <CategoryName>{category.name}</CategoryName>
      {category.image && <CategoryImage src={category.image} alt={category.name} />}
    </PageWrapper>
  );
};

export default CategoryDetailPage;
