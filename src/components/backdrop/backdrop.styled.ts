import styled from "styled-components"
import { colors } from "../../utils/colors"
import { headerHeightTemplates } from "../../utils/constants"
import { query } from "../../utils/mediaQueries"
import { flex, font } from "../../utils/styles"

const Container = styled.div <{ opacity: number }>`
  ${flex('row', 'center', 'flex-end')};
  ${({opacity}) => (
    `opacity: ${opacity};`
  )};
  transition: 0.3s;

  background-color: ${colors.darkGrey}99;
  z-index: 30;
  position: fixed;
  top: 0px;
  left: 0px;
  min-width: 100%;
  min-height: 100%;
`
const MenuContainer = styled.div`
  ${flex('column', 'center', 'flex-start')};
  padding-top: ${headerHeightTemplates.extraSmall}px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.light};
  min-height: 100%;
  width: 30%;

  @media ${query.XM} {
    width: 50%;
  }
  @media ${query.M} {
    width: 70%;
  }
`
const MenuItem = styled.div`
  ${flex('column', 'center', 'center')}
  ${font(colors.dark, 16, 600)}
  background-color: ${colors.yellow};
  padding: 0px 0px 0px 0px ;
  margin-bottom: 5px;
  width: 90%;
  height: 50px;
  position: relative;
  border-radius: 10px;
  transition: 350ms;
  /* cursor: pointer;

  :hover {
    background-color: ${colors.light};
  } */
`

export const S = {
  Container,
  MenuContainer,
  MenuItem,
}