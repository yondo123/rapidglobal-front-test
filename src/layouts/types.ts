type Colors = 'white' | 'black' | 'green' | 'blue';
type BaseColors = 'primary' | 'secondary' | 'tertiary' | 'accent';
type StatusColors = 'success' | 'warning' | 'error' | 'info';
type ContentColors = 'border' | 'font' | 'disabled' | 'neutral' | 'label';

export type Breakpoint = Record<'sm' | 'md' | 'lg', number>;
export type ColorScheme = BaseColors | StatusColors | ContentColors | Colors;
export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** Button */
export type ButtonVariant = 'solid' | 'outline' | 'ghost';

/** Typography */
export type FontBold = 'light' | 'medium' | 'semi' | 'extra' | number;
export type FontAlign = 'start' | 'end' | 'center' | 'justify';
export type FontDecoration = 'none' | 'underline' | 'line-through' | 'overline';
export type FontStyle = 'normal' | 'italic' | 'oblique';

/** Flex */
export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

/** Form */
export type FormVariants = 'flushed' | 'outlined';

/** Tab */
export type TableVariants = 'striped' | 'simple';
