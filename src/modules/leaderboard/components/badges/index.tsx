import {
  SKILL_LEVELS,
  SKILL_LEVEL_COLORS,
  SKILL_LEVEL_INNER_COLORS,
  SKILL_LEVEL_SCORES_MAP,
} from '@/common/constant/skill-level';
import type React from 'react';
import IconWrapper from './icons/IconWrapper';
import {
  StyledBadge,
  StyledBadgeText,
  StyledBadgeWrapper,
  StyledBadgesContainer,
  StyledIconContainer,
} from './styled';

const StarIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <IconWrapper src='/badge-icons/star.svg' alt='Star Icon' glowColor={glowColor} />
);

const TrophyIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <div style={{ marginTop: '10px' }}>
    <IconWrapper src='/badge-icons/trophy.svg' alt='Trophy Icon' glowColor={glowColor} />
  </div>
);

const DiamondIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <IconWrapper src='/badge-icons/diamond.svg' alt='Diamond Icon' glowColor={glowColor} />
);

const CrownIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <IconWrapper src='/badge-icons/crown.svg' alt='Crown Icon' glowColor={glowColor} />
);

const LegendIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <IconWrapper src='/badge-icons/legend.svg' alt='Legend Icon' glowColor={glowColor} />
);

const CompassIcon: React.FC<{ glowColor?: string }> = ({ glowColor }) => (
  <IconWrapper src='/badge-icons/compass.svg' alt='Compass Icon' glowColor={glowColor} />
);

interface BadgeData {
  label: string;
  glowColor: string;
  innerColor: string;
  icon: (glowColor: string) => React.ReactNode;
  score: string;
}

const badges: BadgeData[] = [
  {
    label: SKILL_LEVELS.ROOKIE,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.ROOKIE],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.ROOKIE],
    icon: (glowColor: string) => <StarIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.ROOKIE],
  },
  {
    label: SKILL_LEVELS.RISING,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.RISING],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.RISING],
    icon: (glowColor: string) => <DiamondIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.RISING],
  },
  {
    label: SKILL_LEVELS.PRO,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.PRO],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.PRO],
    icon: (glowColor: string) => <TrophyIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.PRO],
  },
  {
    label: SKILL_LEVELS.EXPERT,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.EXPERT],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.EXPERT],
    icon: (glowColor: string) => <CompassIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.EXPERT],
  },
  {
    label: SKILL_LEVELS.MASTER,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.MASTER],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.MASTER],
    icon: (glowColor: string) => <CrownIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.MASTER],
  },
  {
    label: SKILL_LEVELS.LEGEND,
    glowColor: SKILL_LEVEL_COLORS[SKILL_LEVELS.LEGEND],
    innerColor: SKILL_LEVEL_INNER_COLORS[SKILL_LEVELS.LEGEND],
    icon: (glowColor: string) => <LegendIcon glowColor={glowColor} />,
    score: SKILL_LEVEL_SCORES_MAP[SKILL_LEVELS.LEGEND],
  },
];

const Badges = () => {
  return (
    <StyledBadgesContainer>
      {badges.map(badge => (
        <StyledBadgeWrapper key={badge.label}>
          <StyledBadge $glowColor={badge.glowColor} $innerColor={badge.innerColor}>
            <StyledIconContainer>{badge.icon(badge.glowColor)}</StyledIconContainer>
          </StyledBadge>
          <StyledBadgeText>{badge.label}</StyledBadgeText>
          <StyledBadgeText>{badge.score}</StyledBadgeText>
        </StyledBadgeWrapper>
      ))}
    </StyledBadgesContainer>
  );
};

export default Badges;
