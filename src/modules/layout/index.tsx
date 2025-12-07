import { Box, Container, styled } from '@mui/material';
import type React from 'react';
import Categories from '../../components/categories';
import Description from './components/description';
import SampleArtist from './components/sample-artist';
import Slider from './components/slider';
import TopArtists from './components/top-artists';
import { CATEGORIES } from './configs';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
}));

const HeroSection = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  marginTop: 0,
  paddingTop: 0,
  top: 0,
}));

const OverlayContent = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'auto',
  },
}));

const Layout: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Slider />
        <OverlayContent>
          <Description />
        </OverlayContent>
      </HeroSection>
      <StyledContainer>
        <SampleArtist />
        <Categories categories={CATEGORIES} />
        <TopArtists />
      </StyledContainer>
    </>
  );
};

export default Layout;
