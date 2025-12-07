import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import URAButtonWithText from '../../../../../packages/ura-button-with-text';
import URAText from '../../../../../packages/ura-text';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(30),
  width: '100%',
}));

export const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    '&:nth-of-type(1)': {
      gap: theme.spacing(6),
    },
  },
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  flex: '0 0 auto',
  width: '100%',
  maxWidth: '550px',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    maxWidth: '700px',
  },
}));

export const StyledArtistImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '500px',
  borderRadius: theme.spacing(2),
  objectFit: 'cover',
  display: 'block',
  [theme.breakpoints.up('md')]: {
    minHeight: '600px',
  },
}));

export const StyledTitle = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(5),
  fontWeight: 'bold',
  color: '#FFFFFF',
  textAlign: 'left',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.spacing(4),
    textAlign: 'center',
  },
}));

export const StyledTagline = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  color: 'rgba(255, 255, 255, 0.9)',
  textAlign: 'left',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: theme.spacing(2),
    textAlign: 'center',
  },
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const StyledYellowButton = styled(URAButtonWithText)(({ theme }) => ({
  backgroundColor: '#FFD700',
  color: '#000000',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(1.5),
  fontWeight: 'bold',
  fontSize: theme.spacing(2),
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FFC700',
    opacity: 0.9,
  },
  '& .MuiTypography-root': {
    color: '#000000',
    fontWeight: 'bold',
  },
}));

export const StyledPoetryHeading = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(6),
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledVideoWrapper = styled(Box)(() => ({
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
}));

export const StyledVideoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

export const StyledSectionColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: theme.spacing(3),
}));

export const StyledSectionRow = styled('div')(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));
