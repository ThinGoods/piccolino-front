import styled from "styled-components"
import { flex, font } from "../../utils/styles"
import { headerPercentWidth } from "../../utils/constants"

const Content = styled.div`
  ${flex('column', 'center', 'space-between')}
  width: ${headerPercentWidth}%;
`
const Title = styled.div`
  ${font("dark", 40, 600)}
  
`
const Description = styled.div`
  ${font("dark", 16, 400)}
`

export const S = {
    Content,
    Title,
    Description,
  }