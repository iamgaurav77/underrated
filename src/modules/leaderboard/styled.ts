import { Box, Tab, Tabs, styled } from '@mui/material';
import URAText from '../../../packages/ura-text';
import { GRID_CONFIG } from './config';

export const StyledDashboardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  position: 'relative',
  overflow: 'hidden',
}));

export const StyledContent = styled('div')(() => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: '1200px',
  margin: '0 auto',
}));

export const StyledTitle = styled(URAText)(({ theme }) => ({
  fontSize: theme.spacing(8),
  fontWeight: 'bold',
  color: GRID_CONFIG.COLORS.WHITE,
  marginBottom: theme.spacing(6),
  textAlign: 'left',
}));

export const StyledTabsContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(8),
  borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
}));

export const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: GRID_CONFIG.COLORS.DEFAULT_SKILL_BG,
    height: '3px',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: theme.spacing(2.5),
  fontWeight: 500,
  textTransform: 'none',
  padding: theme.spacing(2, 4),
  '&.Mui-selected': {
    color: GRID_CONFIG.COLORS.WHITE,
  },
  '&:hover': {
    color: GRID_CONFIG.COLORS.WHITE,
  },
}));

export const StyledRankCell = styled(Box)(() => ({
  fontSize: GRID_CONFIG.SIZES.RANK_CELL_FONT_SIZE,
  fontWeight: 'bold',
  color: GRID_CONFIG.COLORS.WHITE,
}));

export const StyledProfileCellContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: GRID_CONFIG.SIZES.PROFILE_CELL_GAP,
}));

export const StyledProfileImageCell = styled('img')(() => ({
  width: GRID_CONFIG.SIZES.PROFILE_IMAGE_SIZE,
  height: GRID_CONFIG.SIZES.PROFILE_IMAGE_SIZE,
  borderRadius: '50%',
  objectFit: 'cover',
}));

export const StyledProfileNameCell = styled('span')(() => ({
  color: GRID_CONFIG.COLORS.WHITE,
  fontSize: GRID_CONFIG.SIZES.PROFILE_NAME_FONT_SIZE,
  fontWeight: 500,
}));

export const StyledSkillLevelCell = styled('div')<{ $bgColor: string }>(({ $bgColor }) => ({
  padding: GRID_CONFIG.SIZES.SKILL_BADGE_PADDING,
  borderRadius: GRID_CONFIG.SIZES.SKILL_BADGE_BORDER_RADIUS,
  backgroundColor: $bgColor,
  color: '#FFFFFF',
  fontSize: GRID_CONFIG.SIZES.SKILL_BADGE_FONT_SIZE,
  fontWeight: 'bold',
  display: 'inline-block',
}));
