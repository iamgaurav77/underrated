import { LEADERBOARD } from '../../constants';
import { TOP_PERFORMERS } from '../../constants/dummyData';
import {
  StyledName,
  StyledProfileImage,
  StyledRankBadge,
  StyledSkillBadge,
  StyledTopPerformerCard,
  StyledTopThreeContainer,
  StyledTrophyIcon,
} from './styled';

const TopPerformer = () => {
  return (
    <StyledTopThreeContainer>
      {TOP_PERFORMERS.map(performer => (
        <StyledTopPerformerCard key={performer.id} $rank={performer.rank}>
          {performer.rank === 1 ? (
            <StyledTrophyIcon>{LEADERBOARD.TROPHY_EMOJI}</StyledTrophyIcon>
          ) : (
            <StyledRankBadge $isFirst={false}>{performer.rank}</StyledRankBadge>
          )}
          <StyledProfileImage
            src={performer.profileImage}
            alt={performer.name}
            $rank={performer.rank}
          />
          <StyledName text={performer.name} />
          <StyledSkillBadge $level={performer.skillLevel}>{performer.skillLevel}</StyledSkillBadge>
        </StyledTopPerformerCard>
      ))}
    </StyledTopThreeContainer>
  );
};

export default TopPerformer;
