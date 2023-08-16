import { colors } from "./colors";
import { IFlex, IFont, TFontDictionary } from "./styles.types";

const FONT_NAME = "Montserrat";

const fontDictionary: TFontDictionary = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
}

export const font: IFont = (color = colors.dark, size = 14, weight = 400) => {

  return `
  font-family: "${FONT_NAME}${fontDictionary[weight]}";
  color: ${color};
  font-size: ${size}px;
  `
}

export const flex: IFlex = (direction = 'row', align = 'center', justify = 'center', wrap = 'nowrap') => {
  return `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${wrap};
  `
}
