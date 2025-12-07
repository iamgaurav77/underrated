import { SKILL_LEVEL_COLORS } from '@/common/constant/skill-level';
import type { ICellRendererParams } from 'ag-grid-community';
import type { Performer } from '../../@types';
import { StyledSkillLevelCell } from '../../styled';

const SkillLevelCellRenderer = (params: ICellRendererParams<Performer>) => {
  const skillColor = SKILL_LEVEL_COLORS[params.value as keyof typeof SKILL_LEVEL_COLORS];
  return <StyledSkillLevelCell $bgColor={skillColor}>{params.value}</StyledSkillLevelCell>;
};

export default SkillLevelCellRenderer;
