import { StyledCategoryButton, StyledCategoryName, StyledImage, StyledURAText } from './styled';

interface CategoryCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, image, onClick }: CategoryCardProps) => {
  return (
    <StyledCategoryButton disableRipple onClick={onClick}>
      <StyledImage src={image} alt={name} />
      <StyledCategoryName>
        <StyledURAText text={name} />
      </StyledCategoryName>
    </StyledCategoryButton>
  );
};

export default CategoryCard;
