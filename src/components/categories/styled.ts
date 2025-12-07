import { styled } from '@mui/material';
import URAButton from '../../../packages/ura-button';
import URAText from '../../../packages/ura-text';

export const StyledCategoriesContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  paddingTop: theme.spacing(12),
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2.5),
  width: '100%',
}));

export const StyledCategoryCard = styled('div')(() => ({
  flex: '0 0 calc((100% - 4rem) / 3)',
}));

export const StyledCategoryButton = styled(URAButton)(() => ({
  '&:hover': {
    transform: 'scale(1.03)',
    transition: 'transform 0.3s ease',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '95%',
  borderRadius: theme.spacing(2),
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}));

export const StyledCategoryName = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  height: theme.spacing(6),
  backgroundColor: 'rgba(0,0,0,0.6)',
  width: '95%',
  borderBottomLeftRadius: theme.spacing(2),
  borderBottomRightRadius: theme.spacing(2),
}));

export const StyledURAText = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  textAlign: 'center',
  marginTop: theme.spacing(1),
}));
