import { Box, styled } from '@mui/material';
import URAButtonWithText from '../../../../../packages/ura-button-with-text';
import URAText from '../../../../../packages/ura-text';

export const StyledDiv = styled('div')<{ scrolled: boolean }>(({ theme, scrolled }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 1000,
  backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
  transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));

export const StyledButtonWithText = styled(URAButtonWithText)({
  fontWeight: 'bold',
  color: 'white',
});

export const StyledURAText = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 'bold',
}));

export const StyledLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const StyledLogoImage = styled('img')(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  objectFit: 'contain',
}));
