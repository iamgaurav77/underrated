import type { ColDef } from 'ag-grid-community';
import URAGrid from '../../../../../packages/ura-grid';
import { GRID_CONFIG, OVERALL_RATING_COLUMN_DEFS } from '../../config';
import { REMAINING_PERFORMERS } from '../../constants/dummyData';

const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
};

const RatingGrid = () => {
  return (
    <URAGrid
      rowData={REMAINING_PERFORMERS}
      columnDefs={OVERALL_RATING_COLUMN_DEFS}
      defaultColDef={defaultColDef}
      headerHeight={GRID_CONFIG.GRID.HEADER_HEIGHT}
      rowHeight={GRID_CONFIG.GRID.ROW_HEIGHT}
      getRowId={params => params.data.id}
    />
  );
};

export default RatingGrid;
