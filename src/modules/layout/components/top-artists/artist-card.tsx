import type { Artist } from '../../@types';
import {
  StyledButton,
  StyledContainer,
  StyledField,
  StyledImage,
  StyledImageContainer,
  StyledName,
  StyledTextContainer,
} from './styled';

interface ArtistCardProps {
  artist: Artist;
  onClick?: () => void;
}

const ArtistCard = ({ artist, onClick }: ArtistCardProps) => {
  const content = (
    <>
      <StyledImageContainer>
        <StyledImage src={artist.img} alt={artist.name} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledName>{artist.name}</StyledName>
        <StyledField variant='body2'>{artist.field}</StyledField>
      </StyledTextContainer>
    </>
  );

  if (onClick) {
    return (
      <StyledButton type='button' onClick={onClick}>
        {content}
      </StyledButton>
    );
  }

  return <StyledContainer $isClickable={false}>{content}</StyledContainer>;
};

export default ArtistCard;
