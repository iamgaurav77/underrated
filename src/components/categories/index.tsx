import type { Category } from '@/@types/common';
import { styled } from '@mui/material';
import { useRouter } from 'next/router';
import URAText from '../../../packages/ura-text';
import CategoryCard from './category-card';
import { StyledCategoriesContainer, StyledCategoryCard } from './styled';

const StyledCategoriesText = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(7),
  fontWeight: 600,
  textAlign: 'center',
}));

const Categories = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();

  const handleCategoryClick = (category: Category) => {
    // Convert category name to URL-friendly slug
    const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/category/${encodeURIComponent(categorySlug)}`);
  };

  return (
    <div>
      <StyledCategoriesText text='Categories' />
      <StyledCategoriesContainer>
        {categories.map(category => (
          <StyledCategoryCard key={category.name}>
            <CategoryCard
              name={category.name}
              image={category.image || ''}
              onClick={() => handleCategoryClick(category)}
            />
          </StyledCategoryCard>
        ))}
      </StyledCategoriesContainer>
    </div>
  );
};

export default Categories;
