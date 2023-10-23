import styled from "styled-components"
import { colors } from "../../utils/colors"
import { font } from "../../utils/styles"

const Button = styled.div <{ withPaddings: boolean }>`
  ${font(colors.darkOrage,16,500)};
  ${ ({withPaddings}) => (withPaddings ? `
    padding: 10px;
  `: '')};
  border-radius: 10px;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    color: ${colors.dark}
  };
`

export const S = {
  Button: Button,
}
