export interface IFont {
  (
    color?: string,
    size?: number,
    weight?: TFontWeight,
  ): string
}

type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type TFontName =
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Black';

export type TFontDictionary = {
  [prop in TFontWeight]: TFontName
}
export interface IFlex {
  (
    direction?: TFlexDirection,
    align?: TFlexAlign,
    justify?: TlexJustifyContent,
    wrap?: TFlexWrap,
  ): string
}
type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type TFlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end' | 'unsafe';
type TlexJustifyContent = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
