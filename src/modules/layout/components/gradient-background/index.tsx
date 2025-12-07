import { Box, styled } from '@mui/material';
import type { BoxProps } from '@mui/material';
import type React from 'react';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps extends BoxProps {
  children: React.ReactNode;
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'angle',
})<{ angle?: number }>(({ theme, angle = 165 }) => ({
  background: `linear-gradient(${angle}deg, rgb(19, 8, 37) 20%, rgb(61, 8, 48) 100%)`,
  color: 'white',
  py: theme.spacing(8),
}));

const GradientBackground: React.FC<AnimatedBackgroundProps> = ({ children, ...boxProps }) => {
  const [angle, setAngle] = useState(165);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev >= 360 ? 0 : prev + 1));
    }, 20); // Smooth animation (360 degrees in 14.4 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBox angle={angle} {...boxProps}>
      {children}
    </StyledBox>
  );
};

export default GradientBackground;
