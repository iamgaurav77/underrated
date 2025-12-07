import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import URAButtonWithText from '../../../../../packages/ura-button-with-text';
import URAText from '../../../../../packages/ura-text';

export const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '800px',
}));

export const StyledURAText = styled(URAText)(({ theme }) => ({
  maxWidth: 600,
  color: 'rgba(255,255,255,0.8)',
  textAlign: 'center',
  fontSize: theme.spacing(2.7),
  margin: '0 auto',
}));

export const StyledURAButtonWithText = styled(URAButtonWithText)(({ theme }) => ({
  backgroundColor: 'rgb(145, 6, 6)',
  px: theme.spacing(5),
  '&:hover': {
    backgroundColor: 'rgb(145, 6, 6)',
    opacity: 0.8,
  },
  marginTop: theme.spacing(4),
}));

export const StyledHeroTitle = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(6),
  fontWeight: 'bold',
}));
