import type { Artist } from '../../@types';
import { TOP_ARTIST_CONFIG } from '../../configs';
import ArtistCard from './artist-card';
import { MainDivStyle, StyledArtistCard, StyledArtistsContainer, StyledTitle } from './styled';

interface TopArtistsProps {
  title?: string;
  artists?: Artist[];
  onArtistClick?: (artist: Artist) => void;
}

export const TEXT_CONSTANTS = {
  TOP_ARTISTS_OF_THE_MONTH: 'Top Artists of the Month',
};

const TopArtists = ({
  title = TEXT_CONSTANTS.TOP_ARTISTS_OF_THE_MONTH,
  artists = TOP_ARTIST_CONFIG,
  onArtistClick,
}: TopArtistsProps) => {
  return (
    <MainDivStyle>
      <StyledTitle text={title} />
      <StyledArtistsContainer>
        {artists.map(artist => (
          <StyledArtistCard key={`${artist.name}-${artist.field}`}>
            <ArtistCard artist={artist} onClick={() => onArtistClick?.(artist)} />
          </StyledArtistCard>
        ))}
      </StyledArtistsContainer>
    </MainDivStyle>
  );
};

export default TopArtists;
