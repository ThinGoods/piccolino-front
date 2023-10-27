import styled from "styled-components"
import { colors } from "../../utils/colors"
import { flex, font } from "../../utils/styles"

const Container = styled.div`
  ${flex('row', 'center', 'center')};
  background-color: ${colors.light};
  width: 100%;
`
const Text = styled.div`
  ${font('darkGrey', 12, 400)};
  margin-right: 10px;
`
const Icon = styled.img`
  cursor: pointer;
`


export const S = {
  Container,
  Text,
  Icon,
}
