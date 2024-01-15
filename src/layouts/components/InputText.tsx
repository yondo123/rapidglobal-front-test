'use client';

import { useId } from 'react';
import { HiddenLabel } from '../mixins/Hidden';
import { baseStyle, createInputVariantStyle, createInputSizeStyle } from '../styles/inputTextStyle';
import { createFontSizeStyle } from '../styles/typography';
import type { Size, ColorScheme, FormVariants } from '../types';

interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  colorScheme?: ColorScheme;
  variant?: FormVariants;
  label?: string;
  htmlSize?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const InputText = ({
  variant = 'outlined',
  colorScheme = 'primary',
  size = 'md',
  label,
  htmlSize = 20,
  ...inputTextProps
}: InputTextProps) => {
  const tempInputId = useId();
  const inputId = inputTextProps.id ?? tempInputId;
  const inputLabel = label ?? `${inputId}-label}`;
  const inputName = inputTextProps.name ?? 'Text Input';
  const textSize = createFontSizeStyle(size as Size);
  const variantStyle = createInputVariantStyle(variant, colorScheme);
  const inputSizeStyle = createInputSizeStyle(size);
  return (
    <>
      <HiddenLabel htmlFor={inputId}>{inputLabel}</HiddenLabel>
      <input
        size={htmlSize}
        type="text"
        id={inputId}
        name={inputName}
        css={[baseStyle, variantStyle, textSize, inputSizeStyle]}
        {...inputTextProps}
      />
    </>
  );
};
