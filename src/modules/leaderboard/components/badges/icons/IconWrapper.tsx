import type React from 'react';

interface IconWrapperProps {
  src: string;
  alt: string;
  glowColor?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ src, alt, glowColor }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        marginTop: '10px',
        objectFit: 'contain',
        filter: glowColor
          ? `drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 12px ${glowColor}80)`
          : undefined,
      }}
    />
  );
};

export default IconWrapper;
