import { BUTTON_VARIANT } from '../../../../../packages/constant';
import { TEXT_CONSTANTS } from '../../constant';
import {
  StyledArtistImage,
  StyledButtonContainer,
  StyledContainer,
  StyledImageContainer,
  StyledPoetryHeading,
  StyledSection,
  StyledSectionColumn,
  StyledSectionRow,
  StyledTagline,
  StyledTitle,
  StyledVideoContainer,
  StyledVideoWrapper,
  StyledYellowButton,
} from './styled';

const SampleArtist = () => {
  const handleWatchPerformances = () => {
    const videoSection = document.getElementById('poetry-video');
    videoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinMovement = () => {};

  return (
    <StyledContainer>
      <StyledSection>
        <StyledImageContainer>
          <StyledArtistImage src='/art-images/sample-artist.png' />
        </StyledImageContainer>
        <StyledSectionRow>
          <StyledTitle text={TEXT_CONSTANTS.POETRY} />
          <StyledTitle text={TEXT_CONSTANTS.STORYTELLING} />
          <StyledTagline text={TEXT_CONSTANTS.EXPERIENCE_THE_POWER_OF_HINDI_POETRY} />
          <StyledButtonContainer>
            <StyledYellowButton
              variant={BUTTON_VARIANT.CONTAINED}
              text={TEXT_CONSTANTS.WATCH_PERFORMANCES}
              onClick={handleWatchPerformances}
            />
          </StyledButtonContainer>
        </StyledSectionRow>
      </StyledSection>

      <StyledSectionColumn id='poetry-video'>
        <StyledPoetryHeading text={TEXT_CONSTANTS.MY_POETRY} />
        <StyledVideoWrapper>
          <StyledVideoContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/EXnM-poash0'
              title='My Poetry Video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </StyledVideoContainer>
        </StyledVideoWrapper>
      </StyledSectionColumn>
      <StyledSectionColumn>
        <StyledTitle text={TEXT_CONSTANTS.JOIN_MOVEMENT} />
        <StyledTagline text={TEXT_CONSTANTS.CONNECT_WITH_ME_ON_SOCIAL_MEDIA} />
        <StyledButtonContainer>
          <StyledYellowButton
            variant={BUTTON_VARIANT.CONTAINED}
            text={TEXT_CONSTANTS.JOIN_MOVEMENT}
            onClick={handleJoinMovement}
          />
        </StyledButtonContainer>
      </StyledSectionColumn>
    </StyledContainer>
  );
};

export default SampleArtist;
