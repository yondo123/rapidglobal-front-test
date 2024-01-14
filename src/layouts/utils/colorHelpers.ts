import { Colors } from '../colors';
import type { ColorScheme } from '../types';

export const getInvertColor = (color: string) => {
  const hexValue = color.replace('#', '');
  const rgbValues = hexValue.match(/.{1,2}/g)?.map((value) => parseInt(value, 16)) ?? [];
  const brightness = (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3;
  return brightness < 200 ? Colors.white : Colors.font;
};

export const getColorFromColorScheme = (color: ColorScheme): string => Colors[color];

export const getTokenFromColor = (color: string): ColorScheme => {
  const colorToken = Object.entries(Colors).find(([, value]) => value === color);
  if (colorToken) {
    return colorToken[0] as ColorScheme;
  }
  return 'neutral';
};

export const convertHexToRgba = (hex: string, opacity: number) =>
  `rgba(${parseInt(hex.substring(1, 3), 16)},${parseInt(hex.substring(3, 5), 16)},${parseInt(
    hex.substring(5, 7),
    16
  )},${opacity})`;
