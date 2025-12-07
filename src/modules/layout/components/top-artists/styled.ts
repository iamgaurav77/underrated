import { Typography, styled } from '@mui/material';
import URAText from '../../../../../packages/ura-text';

export const StyledContainer = styled('div')<{ $isClickable?: boolean }>(({ $isClickable }) => ({
  textAlign: 'center',
  cursor: $isClickable ? 'pointer' : 'default',
  border: 'none',
  background: 'none',
  padding: 0,
  width: '100%',
}));

export const StyledButton = styled('button')(() => ({
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  width: '100%',
}));

export const StyledImageContainer = styled('div')(({ theme }) => ({
  width: '150px',
  height: '150px',
  margin: '0 auto',
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
  marginBottom: theme.spacing(1.5),
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}));

export const StyledTextContainer = styled('div')(() => ({
  textAlign: 'center',
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: 'white',
  fontSize: '16px',
  marginBottom: theme.spacing(0.5),
}));

export const StyledField = styled(Typography)(() => ({
  color: 'white',
  fontSize: '14px',
}));

export const MainDivStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(12.5),
  paddingTop: theme.spacing(37.5),
  paddingBottom: theme.spacing(30),
}));

export const StyledTitle = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(5),
  fontWeight: 'bold',
  color: '#FFFFFF',
  textAlign: 'center',
  lineHeight: 1.2,
}));

export const StyledArtistsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(12.5),
}));

export const StyledArtistCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(12.5),
}));
