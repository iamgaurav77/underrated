import { Box, styled } from '@mui/material';

export const StyledGridContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  border: 'none',
  overflow: 'hidden',
  '& .ag-theme-alpine': {
    '--ag-background-color': 'rgb(19, 1, 35, 1)',
    '--ag-header-background-color': 'rgb(19, 1, 35, 1)',
    '--ag-header-foreground-color': 'rgb(19, 1, 35, 1)',
    '--ag-odd-row-background-color': 'rgb(19, 1, 35, 1)',
    '--ag-row-background-color': 'rgb(19, 1, 35, 1)',
    '--ag-border-color': 'rgb(19, 1, 35, 1)',
    '--ag-header-column-separator-color': 'rgba(255, 255, 255)',
    '--ag-font-size': theme.spacing(2.5),
    '--ag-font-family': 'inherit',
    backgroundColor: 'rgb(19, 1, 35, 1)',
    border: 'none',
    '& .ag-root-wrapper': {
      border: 'none',
      backgroundColor: 'rgb(19, 1, 35, 1)',
    },
    '& .ag-body-viewport': {
      backgroundColor: 'rgb(19, 1, 35, 1)',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    '& .ag-body-vertical-scroll': {
      display: 'none',
    },
    '& .ag-header': {
      backgroundColor: 'rgb(19, 1, 35, 1)',
      borderBottom: 'none',
      '&::after': {
        display: 'none',
      },
    },
    '& .ag-header-cell': {
      color: 'white',
      backgroundColor: 'rgb(19, 1, 35, 1)',
      fontSize: theme.spacing(2.5),
      fontWeight: 'bold',
      borderBottom: 'none',
      borderRight: 'none',
    },
    '& .ag-header-row': {
      borderBottom: 'none',
    },
    '& .ag-header-viewport': {
      borderBottom: 'none',
    },
    '& .ag-row': {
      backgroundColor: 'rgb(19, 1, 35, 1) !important',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'background-color 0.2s ease',
      opacity: 'var(--ag-row-opacity, 1)',
      '&:hover': {
        backgroundColor: 'rgb(33, 2, 62) !important',
      },
      '&:first-of-type': {
        borderTop: 'none',
      },
      '&.ag-row-moving': {
        backgroundColor: 'rgb(19, 1, 35, 1) !important',
      },
      '&.ag-row-animation': {
        backgroundColor: 'rgb(19, 1, 35, 1) !important',
      },
    },
    '& .ag-cell': {
      fontSize: theme.spacing(2.5),
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent !important',
      outline: 'none !important',
      border: 'none !important',
      '&:focus': {
        outline: 'none !important',
        border: 'none !important',
        boxShadow: 'none !important',
        backgroundColor: 'transparent !important',
      },
      '&.ag-cell-focus': {
        outline: 'none !important',
        border: 'none !important',
        boxShadow: 'none !important',
        backgroundColor: 'transparent !important',
      },
      '&.ag-cell-range-selected': {
        outline: 'none !important',
        border: 'none !important',
        backgroundColor: 'transparent !important',
      },
      '&.ag-cell-inline-editing': {
        outline: 'none !important',
        border: 'none !important',
        backgroundColor: 'transparent !important',
      },
    },
    '& .ag-cell-wrapper': {
      outline: 'none !important',
      '&:focus': {
        outline: 'none !important',
      },
    },
  },
}));

export const StyledGridWrapper = styled(Box)(() => ({
  height: '800px',
  width: '100%',
  borderRadius: '10px',
}));
