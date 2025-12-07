import { Box, styled } from '@mui/material';

export const StyledBadgesContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
}));

export const StyledBadgeWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
}));

export const StyledBadge = styled(Box)<{ $glowColor: string; $innerColor: string }>(
  ({ $glowColor }) => ({
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `10px solid ${$glowColor}`,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `
          0 0 30px ${$glowColor}60,
          0 0 50px ${$glowColor}40,
          0 0 70px ${$glowColor}30,
          0 12px 24px rgba(0, 0, 0, 0.5)
        `,
    },
  }),
);

export const StyledIconContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px',
  width: '72px',
  height: '72px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

export const StyledBadgeText = styled('span')(() => ({
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));
