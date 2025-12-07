import type { ColDef } from 'ag-grid-community';
import ProfileCellRenderer from '../cell-renderer/profile-cell-renderer';
import RankCellRenderer from '../cell-renderer/rank-cell-renderer';
import SkillLevelCellRenderer from '../cell-renderer/skill-level-cell-renderer';
import { LEADERBOARD } from '../constants';

export const GRID_CONFIG = {
  GRID: {
    HEIGHT: 800,
    HEADER_HEIGHT: 70,
    ROW_HEIGHT: 70,
    BORDER_RADIUS: '10px',
  },
  COLUMNS: {
    RANK_WIDTH: 120,
    SKILL_LEVEL_WIDTH: 150,
  },
  COLORS: {
    WHITE: '#FFFFFF',
    MASTER_BG: '#8B4513',
    DEFAULT_SKILL_BG: '#8A2BE2',
    DEFAULT_SKILL_TEXT: '#FFFFFF',
  },
  SIZES: {
    RANK_CELL_FONT_SIZE: '20px',
    PROFILE_IMAGE_SIZE: '48px',
    PROFILE_NAME_FONT_SIZE: '16px',
    SKILL_BADGE_PADDING: '4px 12px',
    SKILL_BADGE_BORDER_RADIUS: '8px',
    SKILL_BADGE_FONT_SIZE: '14px',
    PROFILE_CELL_GAP: '12px',
  },
  PLACEHOLDER: {
    PADDING: '40px',
  },
} as const;

export const OVERALL_RATING_COLUMN_DEFS: ColDef[] = [
  {
    headerName: LEADERBOARD.COLUMN_HEADERS.RANK,
    field: LEADERBOARD.COLUMN_FIELDS.RANK,
    width: GRID_CONFIG.COLUMNS.RANK_WIDTH,
    cellRenderer: RankCellRenderer,
  },
  {
    headerName: LEADERBOARD.COLUMN_HEADERS.PROFILE,
    field: LEADERBOARD.COLUMN_FIELDS.NAME,
    flex: 1,
    cellRenderer: ProfileCellRenderer,
  },
  {
    headerName: LEADERBOARD.COLUMN_HEADERS.SKILL_LEVEL,
    field: LEADERBOARD.COLUMN_FIELDS.SKILL_LEVEL,
    width: GRID_CONFIG.COLUMNS.SKILL_LEVEL_WIDTH,
    cellRenderer: SkillLevelCellRenderer,
  },
];
