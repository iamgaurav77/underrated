import { Typography, type TypographyProps } from '@mui/material';
import { type RefObject, forwardRef } from 'react';

export interface URATextProps extends TypographyProps {
  text?: string | number;
  dataTestId?: string;
}

const URAText = forwardRef(
  ({ text = '', dataTestId = '', children, ...restProps }: URATextProps, ref) => (
    <Typography
      data-testid={dataTestId}
      {...restProps}
      ref={ref as RefObject<HTMLParagraphElement>}
    >
      {children ? children : text}
    </Typography>
  ),
);

export default URAText;
