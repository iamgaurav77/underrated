import { Button, Typography } from '@mui/material';
import type { ButtonProps, TypographyProps } from '@mui/material';

export interface URAButtonWithTextProps extends ButtonProps {
  text: string;
  textProps?: Omit<TypographyProps, 'children'>;
}

const URAButtonWithText = ({ text, textProps, ...buttonProps }: URAButtonWithTextProps) => {
  return (
    <Button {...buttonProps}>
      <Typography variant='body1' {...textProps}>
        {text}
      </Typography>
    </Button>
  );
};

export default URAButtonWithText;
