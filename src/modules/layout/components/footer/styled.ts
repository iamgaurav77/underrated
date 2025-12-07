import { Box, Container, styled } from '@mui/material';

export const StyledFooter = styled('footer')(({ theme }) => ({
  color: 'white',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  marginTop: theme.spacing(8),
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
}));

export const StyledColumnsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
}));

export const StyledColumn = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const StyledHeading = styled('h3')(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  fontWeight: 'bold',
  margin: 0,
  marginBottom: theme.spacing(1),
  color: 'white',
}));

export const StyledLink = styled('a')(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.8,
  },
}));

export const StyledCopyright = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontSize: theme.spacing(2),
  color: 'white',
  paddingTop: theme.spacing(4),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));
