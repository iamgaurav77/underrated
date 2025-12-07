import { TextField, styled } from '@mui/material';
import URAButton from '../../../../../packages/ura-button';
import URAText from '../../../../../packages/ura-text';

export const FormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 200px)',
  maxWidth: theme.spacing(62.5),
  margin: '0 auto',
}));

export const TitleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
  gap: theme.spacing(0.5),
}));

export const SignUpTitle = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(5),
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'Roboto, sans-serif',
}));

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: 'transparent',
    '& fieldset': {
      borderColor: '#8B4A6B', // Reddish-purple border
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#8B4A6B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8B4A6B',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    padding: theme.spacing(1.5, 1.5),
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
  },
}));

export const SignUpButton = styled(URAButton)(({ theme }) => ({
  backgroundColor: '#FF6B35', // Orange color
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 0),
  fontSize: theme.spacing(2.5),
  fontWeight: 400,
  fontFamily: 'Roboto, sans-serif',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#E55A2B',
  },
}));

export const FooterText = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  fontSize: theme.spacing(2),
  fontFamily: 'Roboto, sans-serif',
}));

export const FooterTextLabel = styled(URAText)(({ theme }) => ({
  color: 'white',
  fontSize: theme.spacing(2),
  fontFamily: 'Roboto, sans-serif',
}));

export const LoginLink = styled(URAText)(({ theme }) => ({
  color: '#FF6B35', // Orange color
  fontSize: theme.spacing(2),
  fontFamily: 'Roboto, sans-serif',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
