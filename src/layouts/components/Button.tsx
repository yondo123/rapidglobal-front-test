'use client';

import { useTheme } from '@emotion/react';
import { Text } from './Text';
import { getColorFromColorScheme } from '../utils/colorHelpers';
import { createBaseStyle, createVariantStyle, createButtonSizeStyle } from '../styles/buttonStyle';
import { Size, ColorScheme, ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  width?: string;
}

export const Button = ({
  children,
  width,
  size = 'md',
  variant = 'solid',
  colorScheme = 'primary',
  ...buttonProps
}: ButtonProps) => {
  const { colors } = useTheme();
  const color = getColorFromColorScheme(colorScheme);
  const baseStyle = createBaseStyle(colors.border, width);
  const variantStyle = createVariantStyle(variant, color);
  const sizeStyle = createButtonSizeStyle(size);

  return (
    <button type="button" css={[baseStyle, sizeStyle, variantStyle]} {...buttonProps}>
      {variant === 'ghost' ? (
        children
      ) : (
        <Text colorScheme={colorScheme} size={size}>
          {children}
        </Text>
      )}
    </button>
  );
};
