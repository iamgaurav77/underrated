import type { SxProps, Theme } from '@mui/material';
import { AgGridReact, type AgGridReactProps } from 'ag-grid-react';
import { StyledGridContainer, StyledGridWrapper } from './styles';

export interface URAGridProps extends AgGridReactProps {
  containerSx?: SxProps<Theme>;
  wrapperClassName?: string;
}

const URAGrid = ({
  containerSx,
  wrapperClassName = 'ag-theme-alpine',
  ...restProps
}: URAGridProps) => {
  return (
    <StyledGridContainer sx={containerSx}>
      <StyledGridWrapper className={wrapperClassName}>
        <AgGridReact {...restProps} />
      </StyledGridWrapper>
    </StyledGridContainer>
  );
};

export default URAGrid;
