import styled from "styled-components"
import { flex, font } from "../../utils/styles"

const MenuContainer = styled.div`
  ${flex('row', 'center', 'space-between')}
  width: 100%;
  padding-bottom: 21px;
`
const MenuItem = styled.div`
  ${font('dark', 16, 600)}
  ${flex()}
  padding-left: 24px;
  padding-right: 24px;
  height: 58px;
  border-radius: 30px;
  transition: 350ms;
  cursor: pointer;

  &:hover {
    background-color: #FFCB00;
  }
`

export const S = {
  MenuContainer: MenuContainer,
  MenuItem: MenuItem,
}