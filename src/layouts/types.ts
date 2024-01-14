type Colors = 'white' | 'black' | 'green' | 'blue';
type BaseColors = 'primary' | 'secondary' | 'tertiary' | 'accent';
type StatusColors = 'success' | 'warning' | 'error' | 'info';
type ContentColors = 'border' | 'font' | 'disabled' | 'neutral';

export type Breakpoint = Record<'sm' | 'md' | 'lg', number>;
export type ColorScheme = BaseColors | StatusColors | ContentColors | Colors;
