import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SliderContainer = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
}));

export const SliderWrapper = styled(Box)<{ translateX: number }>(({ translateX }) => ({
  display: 'flex',
  width: '300%',
  height: '100%',
  transform: `translateX(-${translateX}%)`,
  transition: 'transform 0.5s ease-in-out',
}));

export const Slide = styled(Box)(() => ({
  width: '33.333%',
  height: '100%',
  flexShrink: 0,
}));

export const SlideImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
}));

export const DotsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: theme.spacing(1),
  zIndex: 10,
}));

export const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: active ? theme.spacing(2) : theme.spacing(1.5),
  height: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  backgroundColor: active ? '#fff' : 'rgba(255, 255, 255, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}));
