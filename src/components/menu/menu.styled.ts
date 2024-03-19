import styled from "styled-components"
import { colors } from "../../utils/colors"
import { query } from "../../utils/mediaQueries"
import { flex, font } from "../../utils/styles"

const MenuContainer = styled.div`
  ${flex('row', 'center', 'space-between')};
  width: 100%;

  padding-top: 21px;
  padding-bottom: 21px;
`
const MenuItem = styled.div`
  ${font(colors.dark, 16, 600)};
  ${flex()};
  padding-left: 24px;
  padding-right: 24px;
  height: 58px;
  border-radius: 30px;
  transition: 350ms;
  cursor: pointer;

  &:hover {
    background-color: ${colors.yellow};
  }
  @media ${query.XL_2} {
    padding-left: 16px;
    padding-right: 16px;
    height: 50px;
  }
  @media ${query.XL} {
    padding-left: 10px;
    padding-right: 10px;
    height: 35px;
  }
  @media ${query.L_2} { font-size: 14px; }
  @media ${query.L_3} { font-size: 12px; }
`

export const S = {
  MenuContainer: MenuContainer,
  MenuItem: MenuItem,
}
