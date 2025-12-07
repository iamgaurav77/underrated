import { styled } from '@mui/material';
import URAText from '../../../../../packages/ura-text';
import { GRID_CONFIG } from '../../config';
import { LEADERBOARD } from '../../constants';

export const StyledProfileImage = styled('img')<{ $rank: number }>(({ theme, $rank }) => ({
  width: $rank === 1 ? theme.spacing(20) : theme.spacing(16),
  height: $rank === 1 ? theme.spacing(20) : theme.spacing(16),
  borderRadius: '50%',
  objectFit: 'cover',
  border: `3px solid ${$rank === 1 ? '#FFD700' : GRID_CONFIG.COLORS.DEFAULT_SKILL_BG}`,
  boxShadow: $rank === 1 ? '0 0 20px rgba(255, 215, 0, 0.5)' : '0 0 10px rgba(138, 43, 226, 0.3)',
}));

export const StyledName = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontWeight: 'bold',
  color: GRID_CONFIG.COLORS.WHITE,
  textAlign: 'center',
}));

export const StyledSkillBadge = styled('div')<{ $level: string }>(({ theme, $level }) => {
  const getColor = (level: string) => {
    switch (level.toLowerCase()) {
      case LEADERBOARD.SKILL_LEVELS.MASTER:
        return { bg: GRID_CONFIG.COLORS.MASTER_BG, text: GRID_CONFIG.COLORS.DEFAULT_SKILL_TEXT };
      case LEADERBOARD.SKILL_LEVELS.EXPERT:
        return {
          bg: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
          text: GRID_CONFIG.COLORS.DEFAULT_SKILL_TEXT,
        };
      case LEADERBOARD.SKILL_LEVELS.PRO:
        return {
          bg: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
          text: GRID_CONFIG.COLORS.DEFAULT_SKILL_TEXT,
        };
      case LEADERBOARD.SKILL_LEVELS.NOOB:
        return {
          bg: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
          text: GRID_CONFIG.COLORS.DEFAULT_SKILL_TEXT,
        };
      default:
        return {
          bg: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
          text: GRID_CONFIG.COLORS.DEFAULT_SKILL_TEXT,
        };
    }
  };
  const colors = getColor($level);
  return {
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(1),
    backgroundColor: colors.bg,
    color: colors.text,
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: theme.spacing(10),
  };
});

export const StyledRankBadge = styled('div')<{ $isFirst?: boolean }>(({ theme, $isFirst }) => ({
  width: $isFirst ? theme.spacing(8) : theme.spacing(5),
  height: $isFirst ? theme.spacing(8) : theme.spacing(5),
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  ...($isFirst
    ? {
        backgroundColor: '#FFD700',
        color: '#000',
        fontSize: theme.spacing(4),
      }
    : {
        backgroundColor: GRID_CONFIG.COLORS.WHITE,
        color: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
        fontSize: theme.spacing(2.5),
        border: `2px solid ${GRID_CONFIG.COLORS.DEFAULT_SKILL_BG}`,
      }),
  fontWeight: 'bold',
}));

export const StyledTopThreeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(8),
  padding: theme.spacing(4, 0),
}));

export const StyledTopPerformerCard = styled('div')<{ $rank: number }>(({ theme, $rank }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  position: 'relative',
  ...($rank === 1 && {
    order: 2,
    transform: 'scale(1.1)',
  }),
  ...($rank === 2 && {
    order: 1,
  }),
  ...($rank === 3 && {
    order: 3,
  }),
}));

export const StyledTrophyIcon = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(6),
  marginBottom: theme.spacing(1),
}));
