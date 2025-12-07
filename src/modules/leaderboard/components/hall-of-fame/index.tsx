import { styled } from '@mui/material';
import URAGrid from '../../../../../packages/ura-grid';
import { GRID_CONFIG, OVERALL_RATING_COLUMN_DEFS } from '../../config';
import { HALL_OF_FAME } from '../../constants/dummyData';

export const StyledPlaceholderContainer = styled('div')(() => ({
  color: GRID_CONFIG.COLORS.WHITE,
  padding: GRID_CONFIG.PLACEHOLDER.PADDING,
  textAlign: 'center',
}));

export const StyledGridWrapper = styled('div')(() => ({
  height: '600px',
  width: '100%',
}));

const StyledGridContainer = {
  '--ag-row-opacity': 0.6,
} as const;

const HallOfFame = () => {
  return (
    <StyledGridWrapper>
      <URAGrid
        containerSx={StyledGridContainer}
        rowData={HALL_OF_FAME}
        columnDefs={OVERALL_RATING_COLUMN_DEFS}
        headerHeight={GRID_CONFIG.GRID.HEADER_HEIGHT}
        rowHeight={GRID_CONFIG.GRID.ROW_HEIGHT}
        getRowId={params => params.data.id}
      />
    </StyledGridWrapper>
  );
};

export default HallOfFame;
