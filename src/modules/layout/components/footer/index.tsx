import { FOOTER_TEXT } from '../../constant';
import {
  StyledColumn,
  StyledColumnsContainer,
  StyledContainer,
  StyledCopyright,
  StyledFooter,
  StyledHeading,
  StyledLink,
} from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledColumnsContainer>
          <StyledColumn>
            <StyledHeading>{FOOTER_TEXT.CATEGORIES}</StyledHeading>
            <StyledLink href='#'>{FOOTER_TEXT.MUSIC}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.PHOTOGRAPHY}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.WRITING}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.DANCE}</StyledLink>
          </StyledColumn>

          <StyledColumn>
            <StyledHeading>{FOOTER_TEXT.ABOUT}</StyledHeading>
            <StyledLink href='#'>{FOOTER_TEXT.ABOUT_US}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.OUR_MISSION}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.BLOG}</StyledLink>
          </StyledColumn>

          <StyledColumn>
            <StyledHeading>{FOOTER_TEXT.SUPPORT}</StyledHeading>
            <StyledLink href='#'>{FOOTER_TEXT.HELP_CENTER}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.CONTACT_US}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.FAQs}</StyledLink>
          </StyledColumn>

          <StyledColumn>
            <StyledHeading>{FOOTER_TEXT.CONTACT}</StyledHeading>
            <StyledLink href='#'>{FOOTER_TEXT.EMAIL}</StyledLink>
            <StyledLink href='#'>{FOOTER_TEXT.OTHER}</StyledLink>
          </StyledColumn>
        </StyledColumnsContainer>

        <StyledCopyright>{FOOTER_TEXT.COPYRIGHT}</StyledCopyright>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
