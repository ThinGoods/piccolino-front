import styled from "styled-components"
import { flex, font } from "../../utils/styles"
import { contentWidthSizing } from "../../utils/constants"

const Content = styled.div`
  ${flex('column', 'center', 'space-between')};
  ${contentWidthSizing};
`
const Title = styled.div`
  ${font("dark", 40, 600)};
  
`
const Description = styled.div`
  ${font("dark", 16, 400)};
`

export const S = {
  Content,
  Title,
  Description,
  }
  