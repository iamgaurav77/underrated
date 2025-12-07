import { ButtonBase, type ButtonBaseProps, styled } from '@mui/material';

export interface URAButtonProps extends ButtonBaseProps {
  dataTestId?: string;
}

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  '&.Mui-disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'default',
  },
}));

const URAButton = ({ children, dataTestId = '', ...rest }: URAButtonProps) => {
  return (
    <StyledButtonBase data-testid={dataTestId} {...rest}>
      {children}
    </StyledButtonBase>
  );
};

export default URAButton;
