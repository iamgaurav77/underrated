import type { ICellRendererParams } from 'ag-grid-community';
import type { Performer } from '../../@types';
import { StyledRankCell } from '../../styled';

const RankCellRenderer = (params: ICellRendererParams<Performer>) => {
  return <StyledRankCell>{params.value}</StyledRankCell>;
};

export default RankCellRenderer;
