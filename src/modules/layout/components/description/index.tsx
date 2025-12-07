import type React from 'react';
import { BUTTON_VARIANT } from '../../../../../packages/constant';
import { HERO_TEXT } from '../../constant';
import { StyledBox, StyledHeroTitle, StyledURAButtonWithText, StyledURAText } from './styled';

interface DescriptionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Description: React.FC<DescriptionProps> = ({
  title = HERO_TEXT.TITLE,
  subtitle = HERO_TEXT.SUBTITLE,
  ctaText = HERO_TEXT.GET_STARTED_TEXT,
  onCtaClick,
}) => {
  return (
    <StyledBox>
      <StyledHeroTitle text={title} />
      <StyledURAText text={subtitle} />
      <StyledURAButtonWithText
        variant={BUTTON_VARIANT.CONTAINED}
        size='large'
        text={ctaText}
        onClick={onCtaClick}
      />
    </StyledBox>
  );
};

export default Description;
