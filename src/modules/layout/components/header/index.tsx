import { useRouter } from 'next/router';
import type React from 'react';
import { useEffect, useState } from 'react';
import { BUTTON_VARIANT } from '../../../../../packages/constant';
import { HEADER_TEXT, IMAGES_PATH } from '../../constant';
import {
  StyledBox,
  StyledButtonWithText,
  StyledDiv,
  StyledLogoContainer,
  StyledLogoImage,
  StyledURAText,
} from './styled';

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 70); // Show background after scrolling 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleCategoriesClick = () => {
    router.push('/categories');
  };

  const handleTopArtistsClick = () => {
    router.push('/top-artists');
  };

  const handleLeaderboardClick = () => {
    router.push('/leaderboard');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleSignUpClick = () => {
    router.push('/sign-up');
  };

  return (
    <StyledDiv scrolled={scrolled}>
      <StyledLogoContainer onClick={handleLogoClick} sx={{ cursor: 'pointer' }}>
        <StyledURAText>{HEADER_TEXT.UNDERRATED}</StyledURAText>
        <StyledLogoImage src={IMAGES_PATH.ART_ICON} />
      </StyledLogoContainer>

      <StyledBox>
        <StyledButtonWithText text={HEADER_TEXT.CATEGORIES} onClick={handleCategoriesClick} />
        <StyledButtonWithText text={HEADER_TEXT.TOP_ARTISTS} onClick={handleTopArtistsClick} />
        <StyledButtonWithText text={HEADER_TEXT.LEADERBOARD} onClick={handleLeaderboardClick} />
        <StyledButtonWithText
          variant={BUTTON_VARIANT.CONTAINED}
          color='error'
          text={HEADER_TEXT.LOG_IN}
          onClick={handleLoginClick}
        />
        <StyledButtonWithText
          variant={BUTTON_VARIANT.CONTAINED}
          text={HEADER_TEXT.SIGN_UP}
          onClick={handleSignUpClick}
        />
      </StyledBox>
    </StyledDiv>
  );
};

export default Header;
