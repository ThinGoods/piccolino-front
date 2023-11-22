import styled from "styled-components"
import { colors } from "./utils/colors"
import { headerHeightSizing } from "./utils/constants"
import { flex } from "./utils/styles"

const Container = styled.div`
  width: 100%;
  min-height: 1080px;
  background-color: ${colors.grey};
  ${flex("column", "center", "flex-start")}
`
const HeaderSpacing = styled.div`
  ${headerHeightSizing}
`
export const S = {
    Container,
    HeaderSpacing,
}
